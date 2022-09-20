- [ID3v2.2](#id3v22)
  - [frame](#frame)
- [ID3v2.3](#id3v23)
  - [extended header](#extended-header)
  - [frame](#frame-1)
- [ID3v2.4](#id3v24)
  - [extended header](#extended-header-1)
  - [frame](#frame-2)
  - [footer](#footer)

`ID3v2` タグはおもに `MP3` 音楽ファイルのメタ情報を保存するために使われます。
`MP3` ファイルの最初に保存され、`"ID3"` で始まります。

# type

- **`int`**: 整数、ビッグエンディアン
- **`syncsafe int`**: 同期安全整数、ビッグエンディアン
  各バイトの最上位ビットが必ず0になります。
- **`string`**: 文字列、`ISO-8859-1` (`latin-1`) エンコード
- **`unicode string`**: 文字列、`ISO/IEC 10646-1:1993` (`ucs-2`) エンコード
- **`string0`**: ヌル終端文字列、`latin-1` エンコードの場合は `0x00` 、 `ucs-2` エンコードの場合は `0x00 0x00`
- **`language`**: 文字列、ISO-639-2
- **`url`**: 文字列

Text = "XXXX"\
Integers = $ xx xx xx xx\
Synchsafe integers = %0xxxxxxx 0xxxxxxx 0xxxxxxx 0xxxxxxx\
($ xx is hexa number, %xxxxxxxx is binary number)

# Header

| size | name | type |
| ---: | --- | --- |
| 3 | tag header | string |
| 1 | major version | int |
| 1 | revision version | int |
| 1 | flags | flag |
| 4 | size | syncsafe int |

- `ID3v2` タグはMP3ファイルの最初に保存されます。
- `tag header` は必ず `"ID3"` (`0x49 0x44 0x33`)で、 `ID3v2` タグが存在することを表します。
- `major version` はタグのバージョンです。
- `revision version` はタグのリビジョンバージョンです。
- `flags` はタグのフラグです。
  `0xabcd0000`
  - フラグ `a` がセットされた場合、非同期を使用します。
  - フラグ `b` がセットされた場合
    - `ID3v2.2` タグでは圧縮タグを使用します。
    - `ID3v2.3` `ID3v2.4` タグでは拡張ヘッダーを使用します。
  - フラグ `c` がセットされた場合、を使用します。
  - フラグ `d` がセットされた場合、を使用します。
- `size` はヘッダー (10バイト) を除いたタグのサイズです。同期安全整数を使用します。



![id3v2 header svg](id3v2-header.svg)

- Version represents the version of the tag.
  Different versions are not compatible.
  - `0x02` = ID3v2.2
  - `0x03` = ID3v2.3
  - `0x04` = ID3v2.4
- Can be read by applications that support larger revision versions of tags. (backward compatibility)
- Size does not include common header and footer.

# Extended Header

Extended header added in v2.3.
It is present when the "Extended header" flag of the common header is set.

## ID3v2.3 Extended Header

![id3v2.3 extended header svg](id3v2-3-extended-header.svg)

## ID3v2.3 Extended Header

![id3v2.4 extended header svg](id3v2-4-extended-header.svg)

# Footer

## ID3v2.4 Footer

![id3v2.4 footer svg](id3v2-4-footer.svg)

# Frame

## ID3v2.2 frame header

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | string |
| 3 | frame size | int |

- `frame id` は大文字 `A-Z` または数字 `0-9` の文字列です。
- `frame size` はヘッダー (6バイト) を除いたフレームのサイズです。
  フレームのサイズは1バイトより大きい必要があります。

# Unique file identifier フレーム

## ID3v2.2 `"UFI"`

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | string |
| 3 | frame size | int |
|   | owner id | string/0 |
| < 64 | id | bytes |

- Unique file identifier フレームはデータベース内でオーディオファイルの情報の識別子を保存します。
- `frame id` は `"UFI"` です。
- `owner id` はデータベースの識別子です。
  長さが0の場合はこのフレームは無視されます。
  同じ `owner id` を持つ UFI フレームはファイルに一つだけです。
- `id` はデータベース内のオーディオファイルの識別子です。

# Text information フレーム

## ID3v2.2 `"T00" - "TZZ"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | string |
| 3 | frame size | int |
| 1 | encoding | byte |
|   | information | string/0 |

- Text information フレームはテキスト情報を保存します。
- `frame id` は `"T00" - "TZZ"` から `"TXX"` を除くいずれかです。
- `encoding` は文字列のエンコードです。
  - `0x00` の場合は `latin-1` です。
  - `0x01` の場合は `ucs-2` です。
- `information` はテキスト情報です。

### 詳細

- `"TT1"` - コンテンツグループ
- `"TT2"` - タイトル/曲名/コンテンツ
- `"TT3"` - サブタイトル/説明


  TP1
   The 'Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group' is
   used for the main artist(s). They are seperated with the "/"
   character.

  TP2
   The 'Band/Orchestra/Accompaniment' frame is used for additional
   information about the performers in the recording.

  TP3
   The 'Conductor' frame is used for the name of the conductor.
   
  TP4
   The 'Interpreted, remixed, or otherwise modified by' frame contains
   more information about the people behind a remix and similar
   interpretations of another existing piece.

  TCM
   The 'Composer(s)' frame is intended for the name of the composer(s).
   They are seperated with the "/" character.

  TXT
   The 'Lyricist(s)/text writer(s)' frame is intended for the writer(s)
   of the text or lyrics in the recording. They are seperated with the
   "/" character.

  TLA
   The 'Language(s)' frame should contain the languages of the text or
   lyrics in the audio file. The language is represented with three
   characters according to ISO-639-2. If more than one language is used
   in the text their language codes should follow according to their
   usage.

  TCO
   The content type, which previously (in ID3v1.1, see appendix A) was
   stored as a one byte numeric value only, is now a numeric string. You
   may use one or several of the types as ID3v1.1 did or, since the
   category list would be impossible to maintain with accurate and up to
   date categories, define your own.
   References to the ID3v1 genres can be made by, as first byte, enter
   "(" followed by a number from the genres list (section A.3.) and
   ended with a ")" character. This is optionally followed by a
   refinement, e.g. "(21)" or "(4)Eurodisco". Several references can be
   made in the same frame, e.g. "(51)(39)". If the refinement should
   begin with a "(" character it should be replaced with "((", e.g. "((I
   can figure out any genre)" or "(55)((I think...)". The following new
   content types is defined in ID3v2 and is implemented in the same way
   as the numerig content types, e.g. "(RX)".
   
     RX  Remix
     CR  Cover

  TAL
   The 'Album/Movie/Show title' frame is intended for the title of the
   recording(/source of sound) which the audio in the file is taken from.
   
  TPA
   The 'Part of a set' frame is a numeric string that describes which
   part of a set the audio came from. This frame is used if the source
   described in the "TAL" frame is divided into several mediums, e.g. a
   double CD. The value may be extended with a "/" character and a
   numeric string containing the total number of parts in the set. E.g.
   "1/2".

  TRK
   The 'Track number/Position in set' frame is a numeric string
   containing the order number of the audio-file on its original
   recording. This may be extended with a "/" character and a numeric
   string containing the total numer of tracks/elements on the original
   recording. E.g. "4/9".

  TRC
   The 'ISRC' frame should contian the International Standard Recording
   Code [ISRC].

  TYE
   The 'Year' frame is a numeric string with a year of the recording.
   This frames is always four characters long (until the year 10000).

  TDA
   The 'Date' frame is a numeric string in the DDMM format containing
   the date for the recording. This field is always four characters
   long.

  TIM
   The 'Time' frame is a numeric string in the HHMM format containing
   the time for the recording. This field is always four characters
   long.
   
  TRD
   The 'Recording dates' frame is a intended to be used as complement to
   the "TYE", "TDA" and "TIM" frames. E.g. "4th-7th June, 12th June" in
   combination with the "TYE" frame.

  TMT
   The 'Media type' frame describes from which media the sound
   originated. This may be a textstring or a reference to the predefined
   media types found in the list below. References are made within "("
   and ")" and are optionally followed by a text refinement, e.g. "(MC)
   with four channels". If a text refinement should begin with a "("
   character it should be replaced with "((" in the same way as in the
   "TCO" frame. Predefined refinements is appended after the media type,
   e.g. "(CD/S)" or "(VID/PAL/VHS)".

    DIG    Other digital media
      /A    Analog transfer from media

    ANA    Other analog media
      /WAC  Wax cylinder
      /8CA  8-track tape cassette

    CD     CD
      /A    Analog transfer from media
      /DD   DDD
      /AD   ADD
      /AA   AAD

    LD     Laserdisc
      /A     Analog transfer from media

    TT     Turntable records
      /33    33.33 rpm
      /45    45 rpm
      /71    71.29 rpm
      /76    76.59 rpm
      /78    78.26 rpm
      /80    80 rpm
     
    MD     MiniDisc
      /A    Analog transfer from media
     
    DAT    DAT
      /A    Analog transfer from media
      /1    standard, 48 kHz/16 bits, linear
      /2    mode 2, 32 kHz/16 bits, linear
      /3    mode 3, 32 kHz/12 bits, nonlinear, low speed
      /4    mode 4, 32 kHz/12 bits, 4 channels
      /5    mode 5, 44.1 kHz/16 bits, linear
      /6    mode 6, 44.1 kHz/16 bits, 'wide track' play
     
    DCC    DCC
      /A    Analog transfer from media
    
    DVD    DVD
      /A    Analog transfer from media
    
    TV     Television
      /PAL    PAL
      /NTSC   NTSC
      /SECAM  SECAM
    
    VID    Video
      /PAL    PAL
      /NTSC   NTSC
      /SECAM  SECAM
      /VHS    VHS
      /SVHS   S-VHS
      /BETA   BETAMAX
    
    RAD    Radio
      /FM   FM
      /AM   AM
      /LW   LW
      /MW   MW
    
    TEL    Telephone
      /I    ISDN
    
    MC     MC (normal cassette)
      /4    4.75 cm/s (normal speed for a two sided cassette)
      /9    9.5 cm/s
      /I    Type I cassette (ferric/normal)
      /II   Type II cassette (chrome)
      /III  Type III cassette (ferric chrome)
      /IV   Type IV cassette (metal)
    
    REE    Reel
      /9    9.5 cm/s
      /19   19 cm/s
      /38   38 cm/s
      /76   76 cm/s
      /I    Type I cassette (ferric/normal)
      /II   Type II cassette (chrome)
      /III  Type III cassette (ferric chrome)
      /IV   Type IV cassette (metal)

  TFT
   The 'File type' frame indicates which type of audio this tag defines.
   The following type and refinements are defined:
   
     MPG    MPEG Audio
       /1     MPEG 2 layer I
       /2     MPEG 2 layer II
       /3     MPEG 2 layer III
       /2.5   MPEG 2.5
       /AAC   Advanced audio compression
     
   but other types may be used, not for these types though. This is used
   in a similar way to the predefined types in the "TMT" frame, but
   without parenthesis. If this frame is not present audio type is
   assumed to be "MPG".

  TBP
   BPM is short for beats per minute, and is easily computed by
   dividing the number of beats in a musical piece with its length. To
   get a more accurate result, do the BPM calculation on the main-part
   only. To acquire best result measure the time between each beat and
   calculate individual BPM for each beat and use the median value as
   result. BPM is an integer and represented as a numerical string.

  TCR
   The 'Copyright message' frame, which must begin with a year and a
   space character (making five characters), is intended for the
   copyright holder of the original sound, not the audio file itself. The
   absence of this frame means only that the copyright information is
   unavailable or has been removed, and must not be interpreted to mean
   that the sound is public domain. Every time this field is displayed
   the field must be preceded with "Copyright " (C) " ", where (C) is one
   character showing a C in a circle.

  TPB
   The 'Publisher' frame simply contains the name of the label or
   publisher.

  TEN
   The 'Encoded by' frame contains the name of the person or
   organisation that encoded the audio file. This field may contain a
   copyright message, if the audio file also is copyrighted by the
   encoder.

  TSS
   The 'Software/hardware and settings used for encoding' frame
   includes the used audio encoder and its settings when the file was
   encoded. Hardware refers to hardware encoders, not the computer on
   which a program was run.

  TOF
   The 'Original filename' frame contains the preferred filename for the
   file, since some media doesn't allow the desired length of the
   filename. The filename is case sensitive and includes its suffix.

  TLE
   The 'Length' frame contains the length of the audiofile in
   milliseconds, represented as a numeric string.

  TSI
   The 'Size' frame contains the size of the audiofile in bytes
   excluding the tag, represented as a numeric string.

  TDY
   The 'Playlist delay' defines the numbers of milliseconds of silence
   between every song in a playlist. The player should use the "ETC"
   frame, if present, to skip initial silence and silence at the end of
   the audio to match the 'Playlist delay' time. The time is represented
   as a numeric string.

  TKE
   The 'Initial key' frame contains the musical key in which the sound
   starts. It is represented as a string with a maximum length of three
   characters. The ground keys are represented with "A","B","C","D","E",
   "F" and "G" and halfkeys represented with "b" and "#". Minor is
   represented as "m". Example "Cbm". Off key is represented with an "o"
   only.

  TOT
   The 'Original album/Movie/Show title' frame is intended for the title
   of the original recording(/source of sound), if for example the music
   in the file should be a cover of a previously released song.
   
  TOA
   The 'Original artist(s)/performer(s)' frame is intended for the
   performer(s) of the original recording, if for example the music in
   the file should be a cover of a previously released song. The
   performers are seperated with the "/" character.

  TOL
   The 'Original Lyricist(s)/text writer(s)' frame is intended for the
   text writer(s) of the original recording, if for example the music in
   the file should be a cover of a previously released song. The text
   writers are seperated with the "/" character.

  TOR
   The 'Original release year' frame is intended for the year when the
   original recording, if for example the music in the file should be a
   cover of a previously released song, was released. The field is
   formatted as in the "TDY" frame.

# ID3v2.2

https://id3.org/id3v2-00

| length | name    | value              | info                                      |
| -----: | :------ | :----------------- | :---------------------------------------- |
|        |         |                    | start of file                             |
|      3 | header  | "ID3"              |                                           |
|      2 | version | $ 02 00            |                                           |
|      1 | flags   | %ab000000          | a = unsynchronisation<br/>b = compression |
|      4 | size    | Synchsafe integers | exclude header (10 Bytes)                 |
|   size | frames  |                    |                                           |

## frame

| length | name             | value    | info                     |
| -----: | :--------------- | :------- | :----------------------- |
|      3 | frame identifier | Text     | A-Z and 0-9              |
|      3 | frame size       | Integers | exclude header (6 Bytes) |
|   size | frame data       |          |

# ID3v2.3

https://id3.org/d3v2.3.0

| length | name            | value              | info                                                                         |
| -----: | :-------------- | :----------------- | :--------------------------------------------------------------------------- |
|        |                 |                    | start of file                                                                |
|      3 | header          | "ID3"              |                                                                              |
|      2 | version         | $ 03 00            |                                                                              |
|      1 | flags           | %abc00000          | a = Unsynchronisation<br/>b = Extended header<br/>c = Experimental indicator |
|      4 | size            | Synchsafe integers | exclude header (10 Bytes)                                                    |
|     ex | extended header |                    | if flag b is 1                                                               |
|     fr | frames          |                    |                                                                              |

## extended header

| length | name                 | value              | info                   |
| -----: | :------------------- | :----------------- | :--------------------- |
|      4 | extended header size | Integers           | exclude size (4 Bytes) |
|      2 | flags                | %a0000000 00000000 | a = CRC data present   |
|      4 | padding size         | Integers           |                        |
|      4 | CRC                  | Byte datas         | if flag a is 1         |

## frame

| length | name        | value              | info                                                                                                                                          |
| -----: | :---------- | :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
|      4 | frame ID    | Text               | A-Z and 0-9                                                                                                                                   |
|      4 | frame size  | Integers           | exclude header (10 Bytes)                                                                                                                     |
|      2 | frame flags | %abc00000 ijk00000 | a = Tag alter preservation<br/>b = File alter preservation<br/>c = Read only<br/>i = Compression<br/>j = Encryption<br/>k = Grouping identity |
|   size | frame data  |                    |                                                                                                                                               |

# ID3v2.4

https://id3.org/id3v2.4.0-structure
https://id3.org/id3v2.4.0-frames

| length | name            | value              | info                                                                                                |
| -----: | :-------------- | :----------------- | :-------------------------------------------------------------------------------------------------- |
|        |                 |                    | start of file                                                                                       |
|      3 | header          | "ID3"              |                                                                                                     |
|      2 | version         | $ 04 00            |                                                                                                     |
|      1 | flags           | %abcd0000          | a = Unsynchronisation<br/>b = Extended header<br/>c = Experimental indicator<br/>d = Footer present |
|      4 | size            | Synchsafe integers | exclude header (10 Bytes)                                                                           |
|     ex | extended header |                    | if flag b is 1                                                                                      |
|     fr | frames          |                    |                                                                                                     |
|     10 | footer          |                    | if flag d is 1                                                                                      |

## extended header

| length | name                 | value              | info                                                                                                                                                                                      |
| -----: | :------------------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      4 | extended header size | Synchsafe integers | whole size (>= 6 Bytes)                                                                                                                                                                   |
|      1 | flags size           | $ 01               |
|      1 | flags                | %0bcd0000          | b = Tag is an update<br/>c = CRC data present<br/>d = Tag restrictions                                                                                                                    |
|      1 | b data size          | $ 00               | if flag b is 1                                                                                                                                                                            |
|      1 | c data size          | $ 05               | if flag c is 1                                                                                                                                                                            |
|      5 | c data               | Byte datas         | if flag c is 1                                                                                                                                                                            |
|      1 | d data size          | $ 01               | if flag d is 1                                                                                                                                                                            |
|      1 | d data               | %ppqrrstt          | p = Tag size restrictions<br/>q = Text encoding restrictions<br/>r = Text fields size restrictions<br/>s = Image encoding restrictions<br/>t = Image size restrictions<br/>if flag d is 1 |

## frame

| length | name                   | value              | info                                                                                                                                                                                                  |
| -----: | :--------------------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      4 | frame ID               | Text               | A-Z and 0-9                                                                                                                                                                                           |
|      4 | frame size             | Synchsafe integers | exclude header (10 Bytes)                                                                                                                                                                             |
|      2 | frame flags            | %0abc0000 0h00kmnp | a = Tag alter preservation<br/>b = File alter preservation<br/>c = Read only<br/>h = Grouping identity<br/>k = Compression<br/>m = Encryption<br/>n = Unsynchronisation<br/>p = Data length indicator |
|     ad | additional information |                    |
|     dt | frame data             |                    |

## footer

| length | name    | value              | info                                                                                                |
| -----: | :------ | :----------------- | :-------------------------------------------------------------------------------------------------- |
|      3 | header  | "3DI"              |
|      2 | version | $ 04 00            |
|      1 | flags   | %abcd0000          | a = Unsynchronisation<br/>b = Extended header<br/>c = Experimental indicator<br/>d = Footer present |
|      4 | size    | Synchsafe integers | exclude header (10 Bytes)                                                                           |

# 参照リンク

- [ID3v2.2 standard](https://id3.org/id3v2-00)
- [ID3v2.3 stamdard](https://id3.org/d3v2.3.0)
- [ID3v2.4 structure](https://id3.org/id3v2.4.0-structure)
- [ID3v2.4 frames](https://id3.org/id3v2.4.0-frames)
