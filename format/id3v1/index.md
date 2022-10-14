# ID3v1

ID3v1 は MP3 ファイルの最後に固定長のメタデータを保存します。
`ID3v1.0` `ID3v1.1` と非公式の `ID3v1.2` `ID3v1 Enhanced` の4つのバージョンがあります。

# ID3v1.0

ID3v1.0 タグは MP3 ファイルの最後 128 バイトに保存されます。

| size | name | type |
| ---: | --- | --- |
| 3 | header | `"TAG"` |
| 30 | title | string |
| 30 | artist | string |
| 30 | album | string |
| 4 | year | string |
| 30 | comment | string |
| 1 | genre | byte |

## header

必ず `"TAG"` (`0x54 0x41 0x47`)です。
ID3v1.0 タグが存在することを表します。

## title

音楽のタイトルです。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## artist

音楽のアーティスト名です。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## album

音楽のアルバム名です。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## year

音楽の発表年です。
数字4文字で表します。

## comment

コメントです。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## genre

音楽のジャンルです。
[ジャンルリスト](#genres-list)からジャンル番号を保存します。

# ID3v1.1

ID3v1.1 タグはほとんどが ID3v1.0 タグと同じです。
ID3v1.1 タグは MP3 ファイルの最後 128 バイトに保存されます。

| size | name | type |
| ---: | --- | --- |
| 3 | header | `"TAG"` |
| 30 | title | string |
| 30 | artist | string |
| 30 | album | string |
| 4 | year | string |
| 28 | comment | string |
| 1 | separator | byte |
| 1 | album track | number |
| 1 | genre | byte |

## header

必ず `"TAG"` (`0x54 0x41 0x47`)です。
ID3v1.1 タグが存在することを表します。

## title

音楽のタイトルです。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## artist

音楽のアーティスト名です。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## album

音楽のアルバム名です。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## year

音楽の発表年です。
数字4文字で表します。

## comment

コメントです。
ID3v1.0 タグのコメントより2バイト短いです。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## separator

必ずNULLバイトで、コメントとアルバムトラックの境界を表します。

## album track

音楽のアルバムトラックです。

## genre

音楽のジャンルです。
[ジャンルリスト](#genres-list)からジャンル番号を保存します。

# ID3v1.2

ID3v1.2 タグは MP3 ファイルの最後 256 バイトに保存されます。
後半の 128 バイトは ID3v1.1 と同じです。

| size | name | type |
| ---: | --- | --- |
| 3 | extended header | `"EXT"` |
| 30 | extended title | string |
| 30 | extended artist | string |
| 30 | extended album | string |
| 15 | extended comment | string |
| 20 | subgenre | string |
| 3 | header | `"TAG"` |
| 30 | title | string |
| 30 | artist | string |
| 30 | album | string |
| 4 | year | string |
| 28 | comment | string |
| 1 | separator | byte |
| 1 | album track | number |
| 1 | genre | byte |

## extended header

必ず `"EXT"` (`0x45 0x58 0x54`)です。
ID3v1.2 タグが存在することを表します。

## extended title

音楽のタイトルです。
title に入りきらなかった情報を保存します。

## extended artist

音楽のアーティスト名です。
artist に入りきらなかった情報を保存します。

## extended album

音楽のアルバム名です。
album に入りきらなかった情報を保存します。

## extended comment

コメントです。
comment に入りきらなかった情報を保存します。

## subgenre

音楽のサブジャンルです。

## header

必ず `"TAG"` (`0x54 0x41 0x47`)です。
ID3v1.1 タグが存在することを表します。

## title

音楽のタイトルです。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。
文字列が長い場合は残りを extended title に保存します。

## artist

音楽のアーティスト名です。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。
文字列が長い場合は残りを extended artist に保存します。

## album

音楽のアルバム名です。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。
文字列が長い場合は残りを extended album に保存します。

## year

音楽の発表年です。
数字4文字で表します。

## comment

コメントです。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。
文字列が長い場合は残りを extended comment に保存します。

## separator

必ずNULLバイトで、コメントとアルバムトラックの境界を表します。

## album track

音楽のアルバムトラックです。

## genre

音楽のジャンルです。
[ジャンルリスト](#genres-list)からジャンル番号を保存します。

# ID3v1 Enhanced

ID3v1 Enhanced タグは MP3 ファイルの最後 355 バイトに保存されます。
後半の 128 バイトは ID3v1.0 と同じです。

| size | name | type |
| ---: | --- | --- |
| 4 | enhanced header | `"TAG+"` |
| 60 | enhanced title | string |
| 60 | enhanced artist | string |
| 60 | enhanced album | string |
| 1 | speed | byte |
| 30 | genre | string |
| 6 | start time | string |
| 6 | end time | string |
| 3 | header | `"TAG"` |
| 30 | title | string |
| 30 | artist | string |
| 30 | album | string |
| 4 | year | string |
| 30 | comment | string |
| 1 | genre | byte |

## enhanced header

必ず `"TAG+"` (`0x54 0x41 0x47 0x2B`)で、 ID3v1 Enhanced タグが存在することを表します。

##enhanced title

音楽のタイトルです。
title に入りきらなかった情報を保存します。

##enhanced artist

音楽のアーティスト名です。
artist に入りきらなかった情報を保存します。

##enhanced album

音楽のアルバム名です。
album に入りきらなかった情報を保存します。

## speed

音楽の速さを表す数字です。

- 1: 遅い
- 2: 普通
- 3: 速い
- 4: ハードコア

を表します。

## genre

音楽のジャンルです。
文字列で保存します。

## start time

音楽ファイルの音楽が始まる時間です。
mmm 分 ss 秒を `"mmm:ss"` という文字列で表します。
`"001:23"` の場合は1分23秒から音楽が始まります。

## end time

音楽ファイルの音楽が終わる時間です。
mmm 分 ss 秒を `"mmm:ss"` という文字列で表します。
`"003:21"` の場合は3分21秒で音楽が終わります。

## header

必ず `"TAG"` (`0x54 0x41 0x47`)です。
ID3v1.0 タグが存在することを表します。

## title

音楽のタイトルです。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## artist

音楽のアーティスト名です。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## album

音楽のアルバム名です。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## year

音楽の発表年です。
数字4文字で表します。

## comment

コメントです。
文字列が短い場合は残りを NULL バイト (`0x00`) で埋めます。

## genre

音楽のジャンルです。
[ジャンルリスト](#genres-list)からジャンル番号を保存します。

# Genres list

| id  | genre             |
| --- | ----------------- |
| 00  | Blues             |
| 01  | Classic Rock      |
| 02  | Country           |
| 03  | Dance             |
| 04  | Disco             |
| 05  | Funk              |
| 06  | Grunge            |
| 07  | Hip-Hop           |
| 08  | Jazz              |
| 09  | Metal             |
| 10  | New Age           |
| 11  | Oldies            |
| 12  | Other             |
| 13  | Pop               |
| 14  | Rhythm and Blues  |
| 15  | Rap               |
| 16  | Reggae            |
| 17  | Rock              |
| 18  | Techno            |
| 19  | Industrial        |
| 20  | Alternative       |
| 21  | Ska               |
| 22  | Death Metal       |
| 23  | Pranks            |
| 24  | Soundtrack        |
| 25  | Euro-Techno       |
| 26  | Ambient           |
| 27  | Trip-Hop          |
| 28  | Vocal             |
| 29  | Jazz & Funk       |
| 30  | Fusion            |
| 31  | Trance            |
| 32  | Classical         |
| 33  | Instrumental      |
| 34  | Acid              |
| 35  | House             |
| 36  | Game              |
| 37  | Sound clip        |
| 38  | Gospel            |
| 39  | Noise             |
| 40  | Alternative Rock  |
| 41  | Bass              |
| 42  | Soul              |
| 43  | Punk              |
| 44  | Space             |
| 45  | Meditative        |
| 46  | Instrumental Pop  |
| 47  | Instrumental Rock |
| 48  | Ethnic            |
| 49  | Gothic            |
| 50  | Darkwave          |
| 51  | Techno-Industrial |
| 52  | Electronic        |
| 53  | Pop-Folk          |
| 54  | Eurodance         |
| 55  | Dream             |
| 56  | Southern Rock     |
| 57  | Comedy            |
| 58  | Cult              |
| 59  | Gangsta           |
| 60  | Top 40            |
| 61  | Christian Rap     |
| 62  | Pop/Funk          |
| 63  | Jungle music      |
| 64  | Native US         |
| 65  | Cabaret           |
| 66  | New Wave          |
| 67  | Psychedelic       |
| 68  | Rave              |
| 69  | Showtunes         |
| 70  | Trailer           |
| 71  | Lo-Fi             |
| 72  | Tribal            |
| 73  | Acid Punk         |
| 74  | Acid Jazz         |
| 75  | Polka             |
| 76  | Retro             |
| 77  | Musical           |
| 78  | Rock ’n’ Roll     |
| 79  | Hard Rock         |

## Winamp extention genres list

| id  | genre                  |
| --- | ---------------------- |
| 80  | Folk                   |
| 81  | Folk-Rock              |
| 82  | National Folk          |
| 83  | Swing                  |
| 84  | Fast Fusion            |
| 85  | Bebop                  |
| 86  | Latin                  |
| 87  | Revival                |
| 88  | Celtic                 |
| 89  | Bluegrass              |
| 90  | Avantgarde             |
| 91  | Gothic Rock            |
| 92  | Progressive Rock       |
| 93  | Psychedelic Rock       |
| 94  | Symphonic Rock         |
| 95  | Slow Rock              |
| 96  | Big Band               |
| 97  | Chorus                 |
| 98  | Easy Listening         |
| 99  | Acoustic               |
| 100 | Humour                 |
| 101 | Speech                 |
| 102 | Chanson                |
| 103 | Opera                  |
| 104 | Chamber Music          |
| 105 | Sonata                 |
| 106 | Symphony               |
| 107 | Booty Bass             |
| 108 | Primus                 |
| 109 | Porn Groove            |
| 110 | Satire                 |
| 111 | Slow Jam               |
| 112 | Club                   |
| 113 | Tango                  |
| 114 | Samba                  |
| 115 | Folklore               |
| 116 | Ballad                 |
| 117 | Power Ballad           |
| 118 | Rhythmic Soul          |
| 119 | Freestyle              |
| 120 | Duet                   |
| 121 | Punk Rock              |
| 122 | Drum Solo              |
| 123 | A cappella             |
| 124 | Euro-House             |
| 125 | Dance Hall             |
| 126 | Goa music              |
| 127 | Drum & Bass            |
| 128 | Club-House             |
| 129 | Hardcore Techno        |
| 130 | Terror                 |
| 131 | Indie                  |
| 132 | BritPop                |
| 133 | Negerpunk              |
| 134 | Polsk Punk             |
| 135 | Beat                   |
| 136 | Christian Gangsta Rap  |
| 137 | Heavy Metal            |
| 138 | Black Metal            |
| 139 | Crossover              |
| 140 | Contemporary Christian |
| 141 | Christian Rock         |
| 142 | Merengue               |
| 143 | Salsa                  |
| 144 | Thrash Metal           |
| 145 | Anime                  |
| 146 | Jpop                   |
| 147 | Synthpop               |
| 148 | Abstract               |
| 149 | Art Rock               |
| 150 | Baroque                |
| 151 | Bhangra                |
| 152 | Big beat               |
| 153 | Breakbeat              |
| 154 | Chillout               |
| 155 | Downtempo              |
| 156 | Dub                    |
| 157 | EBM                    |
| 158 | Eclectic               |
| 159 | Electro                |
| 160 | Electroclash           |
| 161 | Emo                    |
| 162 | Experimental           |
| 163 | Garage                 |
| 164 | Global                 |
| 165 | IDM                    |
| 166 | Illbient               |
| 167 | Industro-Goth          |
| 168 | Jam Band               |
| 169 | Krautrock              |
| 170 | Leftfield              |
| 171 | Lounge                 |
| 172 | Math Rock              |
| 173 | New Romantic           |
| 174 | Nu-Breakz              |
| 175 | Post-Punk              |
| 176 | Post-Rock              |
| 177 | Psytrance              |
| 178 | Shoegaze               |
| 179 | Space Rock             |
| 180 | Trop Rock              |
| 181 | World Music            |
| 182 | Neoclassical           |
| 183 | Audiobook              |
| 184 | Audio Theatre          |
| 185 | Neue Deutsche Welle    |
| 186 | Podcast                |
| 187 | Indie-Rock             |
| 188 | G-Funk                 |
| 189 | Dubstep                |
| 190 | Garage Rock            |
| 191 | Psybient               |

# References

- [ID3v1](https://id3.org/ID3v1)
- [ID3v1.0 definision](https://www.ne.jp/asahi/techno/ostra/id3doc/ID3.html)
- [ID3v1.2 format](https://www.birdcagesoft.com/ID3v12.txt)
- [ID3v1 Enhanced specification](http://www.fortunecity.com/underworld/sonic/3/id3tag.html)
- [ID3v1 Enhanced specification (web archive)](https://web.archive.org/web/20120310015458/http://www.fortunecity.com/underworld/sonic/3/id3tag.html)
- [wikipedia ID3](https://en.wikipedia.org/wiki/ID3)
