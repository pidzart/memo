# 拡張ヘッダー

拡張ヘッダーは、タグの構造についての必須ではない情報を含みます。
拡張ヘッダーは非同期化の影響を受けます。

# ID3v2.3 拡張ヘッダー

| size | name | type |
| ---: | --- | --- |
| 4 | extended header size | int |
| 2 | extended flags | flag |
| 4 | padding size | int |
| 4 | crc data | option bytes |

## extended header size

拡張ヘッダーサイズを除いた拡張ヘッダーのサイズです。
拡張ヘッダーは拡張フラグとパディングサイズ、
オプションでCRCデータを含むため、
サイズは 6 または 10 です。

## extended flags

`%a0000000 00000000`

- a: CRC データ
  拡張ヘッダーに CRC データが含まれることを示します。

## padding size

タグからヘッダーとフレームを除いたサイズです。

## crc data

タグに含まれるフレームから計算された CRC-32 のデータです。

# ID3v2.4 拡張ヘッダー

| size | name | type |
| ---: | --- | --- |
| 4 | extended header size | syncsafe int |
| 1 | extended flags size | int |
| 1 | extended flags | flag |
| 1 | tag is update size | option int |
| 0 | tag is update | option bytes |
| 1 | crc data size | option int |
| 5 | crc data | option bytes |
| 1 | tag restrictions size | option int |
| 1 | tag restrictions | option flag |

## extended header size

拡張ヘッダーのサイズを32ビット同期安全整数で保存します。
拡張ヘッダーは拡張ヘッダーサイズと拡張フラグを含むため、
少なくとも `$06` 以上です

拡張ヘッダーの各データは8ビット同期安全整数のサイズと指定したバイト数のデータで構成されます。

## extended flags

サイズ: `$01`

データ: `%0bcd0000`

拡張ヘッダーにデータが含まれることを示すフラグです。

データは上位ビットで示されたものから順番に格納されます。

- b: 更新タグ
  タグは前のタグの更新であることを示します。
- c: CRC データ
  拡張ヘッダーに CRC データが含まれることを示します。
- d: タグ制限
  拡張ヘッダーにタグ制限が含まれることを示します。

## tag is update

サイズ: `$00`

データ: なし

このタグはファイルで以前に見つかったタグの更新です。 
以前のタグのデータを上書きします。

## crc data size

CRC データのサイズです。
必ず `$05` です。

## crc data

サイズ: `$05`

データ: CRC-32

タグに含まれるフレームとパディングのデータから計算された CRC-32 のデータです。
40ビット同期安全整数として保存します。

## tag restrictions

サイズ: `$01`

データ: `%ppqrrstt`

フラグによってタグのエンコードを制限します

- p: タグサイズ制限
  - `%00`: 128 フレーム、1 MB 以下
  - `%01`: 64 フレーム、128 KB 以下
  - `%10`: 32 フレーム、40 KB 以下
  - `%11`: 32 フレーム、4 KB 以下
- q: 文字エンコード制限
  - `%0`: 制限なし
  - `%1`: ISO-8859-1 または UTF-8
- r: テキストの文字数制限
  1フレームあたりの文字数が制限されます。
  - `%00`: 制限なし
  - `%01`: 1024文字以下
  - `%10`: 128文字以下
  - `%11`: 30文字以下
- s: 画像エンコード制限
  - `%0`: 制限なし
  - `%1`: PNG または JPEG
- t: 画像サイズ制限
  - `%00`: 制限なし
  - `%01`: 256×256ピクセル以下
  - `%10`: 64×64ピクセル以下
  - `%11`: 64×64ピクセルちょうど
