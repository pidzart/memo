# 拡張ヘッダー

# ID3v2.3 拡張ヘッダー

| size | name | type |
| ---: | --- | --- |
| 4 | extended header size | int |
| 2 | extended flags | flag |
| 4 | padding size | int |
| 4 | crc data | option bytes |

- extended header size: 拡張ヘッダーサイズ
  拡張ヘッダーサイズを除いた拡張ヘッダーのサイズです。
  `$06` または `$10` です。
- extended flags: 拡張フラグ
  `%a0000000 00000000`
  - a: CRC データ
    拡張ヘッダーに CRC データが含まれることを示します。
- padding size: パディング・サイズ
  タグからヘッダーとフレームを除いたサイズです。
- crc data: CRCデータ
  タグに含まれるフレームから計算された CRC-32 のデータです。

# ID3v2.4 拡張ヘッダー

| size | name | type |
| ---: | --- | --- |
| 4 | extended header size | int |
| 1 | flags byte | int |
| 1 | flags | flag |
| 1 | tag is update size | option int |
| 1 | crc data size | option int |
| 5 | crc data | option int |
| 1 | tag restrictions size | option int |
| 1 | tag restrictions | option int |
