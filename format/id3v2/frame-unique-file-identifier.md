# Unique file identifier フレーム

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
