# ID3v2

`ID3v2` タグはおもに `MP3` 音楽ファイルのメタ情報を保存するために使われます。
`MP3` ファイルの最初に保存され、`"ID3"` で始まります。

# type

- **`int`**: 整数 (Integer)、ビッグエンディアン
- **`syncsafe int`**: 同期安全整数 (SuncSafe Integer)、ビッグエンディアン
  各バイトの最上位ビットが必ず0になります。
- **`str`**: 文字列、`ISO-8859-1` (`latin-1`) エンコード
- **`encode str`**: エンコード指定文字列
  - `0x00` の場合は `ISO-8859-1` (`latin-1`) エンコード
  - `0x01` の場合は `ISO/IEC 10646-1:1993` (`ucs-2`) エンコード
- **`str null`**: ヌル終端文字列
- **`encode str null`**: エンコード指定ヌル終端文字列
  - `latin-1` エンコードの場合は `0x00`
  - `ucs-2` エンコードの場合は `0x00 0x00`
- **`lang`**: 文字列、ISO-639-2
- **`url`**: 文字列

Text = "XXXX"\
Integers = $ xx xx xx xx\
Synchsafe integers = %0xxxxxxx 0xxxxxxx 0xxxxxxx 0xxxxxxx\
($ xx is hexa number, %xxxxxxxx is binary number)

# ヘッダー

| size | name          | type         |
| ---: | ------------- | ------------ |
|    3 | tag header    | `"ID3"`      |
|    1 | major version | int          |
|    1 | revision      | int          |
|    1 | flags         | flags        |
|    4 | size          | syncsafe int |

## tag header

タグのヘッダーです。
必ず `"ID3"` (`0x49 44 33`)です。
ID3v2 タグが存在することを表します。

## major version

タグのメジャーバージョンです。
メジャーバージョンは `0xff` になりません。

- `0x02`: ID3v2.2
- `0x03`: ID3v2.3
- `0x04`: ID3v2.4

## revision

タグのリビジョンです。
リビジョンは `0xff` になりません。

## flags

タグのフラグです。
`0bABCD0000`

- A: 非同期 (2.2 2.3 2.4)
  すべてのフレームが非同期フレームであることを示します。
- B: 圧縮 (2.2)
  圧縮が使用されていることを示します。
- B: 拡張ヘッダー (2.3 2.4)
  ヘッダーの直後に拡張ヘッダーが存在することを示します。
- C: 実験的インジケータ (2.3 2.4)
  タグが実験段階であることを示します。
- D: フッター (2.4)
  タグの最後にフッターが存在することを示します。

## size

ヘッダーとフッターを除いたタグのサイズです。
同期安全整数を使用します。

# 拡張ヘッダー

拡張ヘッダーは、タグの構造についての必須ではない情報を含みます。
拡張ヘッダーは非同期化の影響を受けます。

# ID3v2.2 拡張ヘッダー

ID3v2.2 は拡張ヘッダーがありません

# ID3v2.3 拡張ヘッダー

| size | name                 | type        |
| ---: | -------------------- | ----------- |
|    4 | extended header size | int         |
|    2 | extended flags       | flag        |
|    4 | padding size         | int         |
|    4 | crc data             | bytes [opt] |

## extended header size

拡張ヘッダーサイズを除いた拡張ヘッダーのサイズです。
拡張ヘッダーは拡張フラグとパディングサイズ、
オプションで CRC データを含むため、
サイズは 6 または 10 です。

## extended flags

`0bA0000000 00000000`

- A: CRC データ
  拡張ヘッダーに CRC データが含まれることを示します。

## padding size

タグからヘッダーとフレームを除いたサイズです。

## crc data

タグに含まれるフレームから計算された CRC-32 のデータです。

# ID3v2.4 拡張ヘッダー

| size | name                  | type         |
| ---: | --------------------- | ------------ |
|    4 | extended header size  | syncsafe int |
|    1 | extended flags size   | int          |
|    1 | extended flags        | flag         |
|    1 | tag is update size    | int [opt]    |
|    0 | tag is update         | bytes [opt]  |
|    1 | crc data size         | int [opt]    |
|    5 | crc data              | bytes [opt]  |
|    1 | tag restrictions size | int [opt]    |
|    1 | tag restrictions      | flag [opt]   |

## extended header size

拡張ヘッダーのサイズを 32 ビット同期安全整数で保存します。
拡張ヘッダーは拡張ヘッダーサイズと拡張フラグを含むため、
少なくとも 6 以上です

拡張ヘッダーの各データは 127 以下のサイズと指定したバイト数のデータで構成されます。

## extended flags

サイズ: `0x01`

データ: `0b0BCD0000`

拡張ヘッダーにデータが含まれることを示すフラグです。

データは上位ビットで示されたものから順番に格納されます。

- B: 更新タグ
  タグは前のタグの更新であることを示します。
- C: CRC データ
  拡張ヘッダーに CRC データが含まれることを示します。
- D: タグ制限
  拡張ヘッダーにタグ制限が含まれることを示します。

## tag is update

サイズ: `0x00`

データ: なし

このタグはファイルで以前に見つかったタグの更新です。
以前のタグのデータを上書きします。

## crc data size

CRC データのサイズです。
必ず `0x05` です。

## crc data

サイズ: `0x05`

データ: CRC-32

タグに含まれるフレームとパディングのデータから計算された CRC-32 のデータです。
40 ビット同期安全整数として保存します。

## tag restrictions

サイズ: `0x01`

データ: `0bPPQRRSTT`

フラグによってタグのエンコードを制限します

- P: タグサイズ制限
  - `0b00`: 128 フレーム、1 MB 以下
  - `0b01`: 64 フレーム、128 KB 以下
  - `0b10`: 32 フレーム、40 KB 以下
  - `0b11`: 32 フレーム、4 KB 以下
- Q: 文字エンコード制限
  - `0b0`: 制限なし
  - `0b1`: ISO-8859-1 または UTF-8
- R: テキストの文字数制限
  1 フレームあたりの文字数が制限されます。
  - `0b00`: 制限なし
  - `0b01`: 1024 文字以下
  - `0b10`: 128 文字以下
  - `0b11`: 30 文字以下
- S: 画像エンコード制限
  - `0b0`: 制限なし
  - `0b1`: PNG または JPEG
- T: 画像サイズ制限
  - `0b00`: 制限なし
  - `0b01`: 256×256 ピクセル以下
  - `0b10`: 64×64 ピクセル以下
  - `0b11`: 64×64 ピクセルちょうど

# フッター

| size | name          | type         |
| ---: | ------------- | ------------ |
|    3 | tag footer    | `"3DI"`      |
|    1 | major version | int          |
|    1 | revision      | int          |
|    1 | flags         | flags        |
|    4 | size          | syncsafe int |

## tag footer

タグのフッターです。
必ず `"3DI"` (`0x33 44 49`)です。
ID3v2 タグが存在することを表します。

## major version

タグのメジャーバージョンです。
メジャーバージョンは `0xff` になりません。

- `0x02`: ID3v2.2
- `0x03`: ID3v2.3
- `0x04`: ID3v2.4

## revision

タグのリビジョンです。
リビジョンは `0xff` になりません。

## flags

タグのフラグです。
`0bABCD0000`

- A: 非同期 (2.2 2.3 2.4)
  すべてのフレームが非同期フレームであることを示します。
- B: 圧縮 (2.2)
  圧縮が使用されていることを示します。
- B: 拡張ヘッダー (2.3 2.4)
  ヘッダーの直後に拡張ヘッダーが存在することを示します。
- C: 実験的インジケータ (2.3 2.4)
  タグが実験段階であることを示します。
- D: フッター (2.4)
  タグの最後にフッターが存在することを示します。

## size

ヘッダーとフッターを除いたタグのサイズです。
同期安全整数を使用します。

# フレーム

# 固有ファイル識別子フレーム

固有ファイル識別子フレームは外部データベースでファイルを識別するための識別子を保存するフレームです。

## ID3v2.2 `"UFI"` フレーム

| size | name       | type    |
| ---: | ---------- | ------- |
|    3 | frame id   | `"UFI"` |
|    3 | frame size | int     |
|      | owner id   | str     |
| < 64 | id         | bytes   |

## owner id

データベースを示す URL または E-メールアドレスのヌル終端文字列です。
長さが 0 の場合はこのフレームは無視されます。
同じオーナー ID を持つ UFI フレームはファイルに一つだけです。

## id

データベース内のオーディオファイルの識別子です。

## ID3v2.3 `"UFID"` フレーム

| size | name       | type     |
| ---: | ---------- | -------- |
|    4 | frame id   | `"UFID"` |
|    4 | frame size | int      |
|    2 | frame flag | flag     |
|      | owner id   | str      |
| < 64 | id         | bytes    |

## owner id

データベースを示す URL または E-メールアドレスのヌル終端文字列です。
長さが 1 以上である必要があります。
同じオーナー ID を持つ UFID フレームはファイルに一つだけです。
`"http://www.id3.org/dummy/ufid.html"` はテストの時に使用されます。

## id

データベース内のオーディオファイルの識別子です。

## ID3v2.4

# Frame

## ID3v2.2 frame header

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |

- `frame id` は大文字 `A-Z` または数字 `0-9` の文字列です。
- `frame size` はヘッダー (6バイト) を除いたフレームのサイズです。
  フレームのサイズは1バイトより大きい必要があります。

# Unique file identifier

## ID3v2.2 `"UFI"`

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
|   | owner id | str null |
| < 64 | id | bytes |

- Unique file identifier フレームはデータベース内でオーディオファイルの情報の識別子を保存します。
- `frame id` は `"UFI"` です。
- `owner id` はデータベースの識別子です。
  長さが0の場合はこのフレームは無視されます。
  同じ `owner id` を持つ UFI フレームはファイルに一つだけです。
- `id` はデータベース内のオーディオファイルの識別子です。

# Text information

## ID3v2.2 `"T00" - "TZZ"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
| 1 | encoding | byte |
|   | information | encode str |

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
- `"TP1"` - リードアーティスト/リードパフォーマー/ソリスト/パフォーミンググループ
  `"/"` の文字で区切られます。
- `"TP2"` - バンド/オーケストラ/伴奏
- `"TP3"` - 指揮者
- `"TP4"` - 解釈/リミックス
- `"TCM"` - 作曲者
  `"/"` の文字で区切られます。
- `"TXT"` - 作詞者/テキストライター
  `"/"` の文字で区切られます。
- `"TLA"` - 言語コード ISO-639-2
- `"TCO"` - コンテンツタイプ
  `"("` と `")"` で囲ってID3v1.1のジャンルやID3v2のコンテンツタイプを参照できます。
  `"("` で開始する場合は `"(("` で開始します。
  - `"(RX)"` Remix
  - `"(CR)"` Cover
- `"TAL"` - アルバム/映画/番組タイトル
- `"TPA"` - セットの部分
  `"TAL"` フレームのどの部分から来たのかを説明します。
  `"/" 総数` で拡張できます。
- `"TRK"` - トラック番号/セット内の位置
  `"/" 総数` で拡張できます。
- `"TRC"` - 国際標準レコーディングコード(ISRC)
- `"TYE"` - 年 YYYY
  常に四文字です。
- `"TDA"` - 日付 MMDD
  常に四文字です。
- `"TIM"` - 時刻 HHMM
  常に四文字です。
- `"TRD"` - 記録日
- `"TMT"` - メディアタイプ
- `"TFT"` - ファイルタイプ
- `"TBP"` - BPM
- `"TCR"` - 著作権メッセージ
- `"TPB"` - 出版社
- `"TEN"` - エンコード者
- `"TSS"` - エンコードソフトウェア/ハードウェア/設定
- `"TOF"` - オリジナルファイル名
- `"TLE"` - 音楽の長さ
- `"TSI"` - タグを除いたファイルサイズ
- `"TDY"` - プレイリストディレイ
- `"TKE"` - 開始キー
- `"TOT"` - オリジナルアルバム/映画/番組タイトル
- `"TOA"` - オリジナルアーティスト/パフォーマー
- `"TOL"` - オリジナル作詞者/テキストライター
- `"TOR"` - オリジナルリリース年

# User defined text information

## ID3v2.2 `"TXX"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
| 1 | encoding | byte |
|   | description | encode str null |
|   | value | encode str |

- Text information フレームはテキスト情報を保存します。
- `frame id` は `"TXX"` です。
- `encoding` は文字列のエンコードです。
  - `0x00` の場合は `latin-1` です。
  - `0x01` の場合は `ucs-2` です。
- `description` はフレームの説明です。同じ説明のフレームはファイルに一つだけです。
- `value` はフレームの値です。

# URL link

## ID3v2.2 `"W00" - "WZZ"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
|   | url | encode str |

- URL link フレームはURLを保存します。
- `frame id` は `"W00" - "WZZ"` から `"WXX"` を除くいずれかです。
- `url` はURLです。

### 詳細

- `"WAF"` - オーディオファイル公式WEBページ
- `"WAR"` - アーティスト/パフォーマー公式WEBページ
- `"WAS"` - オーディオソース公式WEBページ
- `"WCM"` - コマーシャル情報WEBページ
- `"WCP"` - 著作権/法的情報WEBページ
- `"WPB"` - 出版社公式WEBページ

# User defined URL link

## ID3v2.2 `"WXX"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
| 1 | encoding | byte |
|   | description | encode str null |
|   | url | encode str |

- User defined URL link フレームはURLを保存します。
- `frame id` は `"WXX"` です。
- `encoding` は文字列のエンコードです。常に `0x00` で `latin-1` エンコードです。
- `description` はフレームの説明です。同じ説明のフレームはファイルに一つだけです。
- `url` はURLです。

# Involved people list

## ID3v2.2 `"IPL"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
| 1 | encoding | byte |
|   | people 1 | encode str null |
|   | people 2 | encode str null |
|   | ... | |
|   | people N | encode str |

- Involved people list フレームはURLを保存します。
- `frame id` は `"IPL"` です。
- `encoding` は文字列のエンコードです。
- `people` は関係者で、ヌル文字区切りのリストです。

# Music CD Identifier

## ID3v2.2 `"MCI"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
|  | cd toc | bytes |

- Music CD Identifier フレームはCDDBでCDを識別する情報を保存します。
- `frame id` は `"MCI"` です。
- `cd toc` CDからの目次です。

# Event timing codes

## ID3v2.2 `"ETC"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
| 1 | time stamp format | bytes |
| 1 | event type 1 | bytes |
| 4 | time stamp 1 | bytes |
| 1 | event type 2 | bytes |
| 4 | time stamp 2 | bytes |
|   | ... | |
| 1 | event type N | bytes |
| 4 | time stamp N | bytes |

- Event timing codes フレームは曲のキーイベントと同期します。
- `frame id` は `"ETC"` です。
- `time stamp format` はタイムスタンプのフォーマットです。
  - `0x01`の場合は32ビット、絶対時間、MPEGフレーム単位です。
  - `0x02`の場合は32ビット、絶対時間、ミリ秒単位です。
- `event type` はイベントのタイプです。
- `time stamp` はタイムスタンプです。
- イベントリストは時間順にソートされている必要があります。

# MPEG location lookup table

## ID3v2.2 `"MLL"` 

| size | name | type |
| ---: | --- | --- |
| 3 | frame id | str |
| 3 | frame size | int |
| 2 | MPEG frames between reference | int |
| 3 | bytes between reference | int |
| 3 | milliseconds between reference | int |
| 1 | bits for bytes deviation | int |
| 1 | bits for milliseconds deviation | int |
| b bits | deviation in bytes 1 | int |
| m bits | deviation in milliseconds 1 | int |
| | ... | |
| b bits | deviation in bytes N | int |
| m bits | deviation in milliseconds N | int |

- MPEG location lookup table フレームはMPEGフレームのバイト位置を保存します。
- `frame id` は `"MLL"` です。
- `MPEG frames between reference` は各参照間のフレーム数の差です。
- `bytes between reference` は各参照間のフレーム数の差です。
- `milliseconds between reference` は各参照間のフレーム数の差です。
- `bits for bytes deviation` は各参照間のフレーム数の差です。
- `bits for milliseconds deviation` は各参照間のフレーム数の差です。
- `deviation in bytes` は各参照間のフレーム数の差です。
- `deviation in milliseconds` は各参照間のフレーム数の差です。

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
