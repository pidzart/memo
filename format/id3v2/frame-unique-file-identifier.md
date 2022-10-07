# 固有ファイル識別子フレーム

固有ファイル識別子フレームは外部データベースでファイルを識別するための識別子を保存するフレームです。

## ID3v2.2 `"UFI"`

| size | name       | type    |
| ---: | ---------- | ------- |
|    3 | frame id   | `"UFI"` |
|    3 | frame size | int     |
|      | owner id   | str     |
| < 64 | id         | bytes   |

- ID は `"UFI"` です。
- `owner id` はデータベースを示す URL または E-メールアドレスのヌル終端文字列です。
  長さが 0 の場合はこのフレームは無視されます。
  同じ `owner id` を持つ UFI フレームはファイルに一つだけです。
- `id` はデータベース内のオーディオファイルの識別子です。

## ID3v2.3

| size | name       | type     |
| ---: | ---------- | -------- |
|    4 | frame id   | `"UFID"` |
|    4 | frame size | int      |
|    2 | frame flag | flag     |
|      | owner id   | str      |
| < 64 | id         | bytes    |

- ID は `"UFID"` です。
- `owner id` はデータベースを示す URL または E-メールアドレスのヌル終端文字列です。
  長さが 1 以上である必要があります。
  同じ `owner id` を持つ UFI フレームはファイルに一つだけです。
  `"http://www.id3.org/dummy/ufid.html"` はテストの時に使用されます。
- `id` はデータベース内のオーディオファイルの識別子です。

## ID3v2.4
