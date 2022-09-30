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
- crc data: CRC データ
  タグに含まれるフレームから計算された CRC-32 のデータです。

# ID3v2.4 拡張ヘッダー

| size | name | type |
| ---: | --- | --- |
| 4 | extended header size | int |
| 1 | extended flags size | int |
| 1 | extended flags | flag |
| 1 | tag is update size | option int |
| 1 | crc data size | option int |
| 5 | crc data | option bytes |
| 1 | tag restrictions size | option int |
| 1 | tag restrictions | option flag |

- extended header size: 拡張ヘッダーサイズ
  拡張ヘッダーのサイズです。
  同期安全整数を使用します。
  少なくとも `$06` 以上です
- extended flags size: 拡張フラグサイズ
  拡張フラグのサイズです。
  必ず `$01` です。
- extended flags: 拡張フラグ
  `%0bcd0000`
  - b: 更新タグ
    タグは前のタグの更新であることを示します。
  - c: CRC データ
    拡張ヘッダーに CRC データが含まれることを示します。
  - d: タグ制限
    拡張ヘッダーにタグ制限が含まれることを示します。
- tag is update size: 更新タグサイズ
  更新タグのサイズです。
  必ず `$00` です。
- crc data size: CRC データサイズ
  CRC データのサイズです。
  必ず `$05` です。
- crc data: CRC データ
  タグに含まれるフレームとパディングから計算された CRC-32 のデータです。
  35ビットの同期安全整数として保存します。
- tag restrictions size: タグ制限サイズ
  タグ制限のサイズです。
  必ず `$01` です。
- tag restrictions: タグ制限
  `%ppqrrstt`
