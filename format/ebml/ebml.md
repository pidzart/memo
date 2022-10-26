# EBML

Extensible Binary Meta Language
拡張可能なバイナリーメタ言語

# 可変サイズ整数

可変サイズ整数
Variable-Size Integer
VINT

- **VINT_WIDTH**: (バイト数 - 1)個の 0
- **VINT_MARKER**: 目印の 1
- **VINT_DATA**: ビッグエンディアン符号なし整数データ

を並べることで整数をバイト列で表すもの。

| 可変サイズ整数                                                               | バイト数 | データのビット数 |
| ---------------------------------------------------------------------------- | -------: | ---------------: |
| `0b 1xxxxxxx`                                                                |        1 |                7 |
| `0b 01xxxxxx xxxxxxxx`                                                       |        2 |               14 |
| `0b 001xxxxx xxxxxxxx xxxxxxxx`                                              |        3 |               21 |
| `0b 0001xxxx xxxxxxxx xxxxxxxx xxxxxxxx`                                     |        4 |               28 |
| `0b 00001xxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx`                            |        5 |               35 |
| `0b 000001xx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx`                   |        6 |               42 |
| `0b 0000001x xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx`          |        7 |               49 |
| `0b 00000001 xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx` |        8 |               56 |

## 例

| 可変サイズ整数                  | 2 進数データ                  | 10 進数データ |
| ------------------------------- | ----------------------------- | ------------- |
| `0b 10110110`                   | 0b 00110110                   | 54            |
| `0b 00110011 00110011 00110011` | 0b 00010011 00110011 00110011 | 1258291       |

# EBML 要素

EBML 要素
EBML Element

要素は

| 名前         | サイズ       | データ型       |
| ------------ | ------------ | -------------- |
| ID           | 1 ～ 4       | 可変サイズ整数 |
| データサイズ | 1 ～ 8       | 可変サイズ整数 |
| データ       | データサイズ | バイト列       |

で構成される。

## ID

EBML 要素 ID
EBML Element ID

EBML 要素を識別するための識別子。
以下の条件を満たす可変サイズ整数で表す。

- 最大のサイズは EBMLMaxIDLength で指定されている場合は EBMLMaxIDLength、指定されていない場合は 4 バイト。
- VINT_DATA 部分の全てのビットが 1 になってはいけない。
- ID の数を表す場合、最も短い VINT でなければならない。

| 悪い例                 | 悪い理由                              | 良い例                 |
| ---------------------- | ------------------------------------- | ---------------------- |
| `0b 11111111`          | VINT_DATA の全ビットが 1 になっている | `0b 01000000 01111111` |
| `0b 01000000 00110110` | より短い VINT の表現がある            | `0b 10110110`          |

## データサイズ

EBML 要素データサイズ
EBML Element Data Size

EBML 要素データのバイト長さを表す。
最大のサイズは EBMLMaxSizeLength で指定されている場合は EBMLMaxSizeLength、指定されていない場合は 8 バイト。
VINT_DATA 部分の全てのビットが 1 の場合はデータサイズが不明であることを表す。

データサイズが不明なデータは

- グローバル要素を除く、有効な親要素が出現する。
- グローバル要素を除く、有効な兄弟要素が出現する。
- グローバル要素を除く、有効なルート要素が出現する。
- 親要素のデータの終わりに到達する。
- EBML ドキュメントの終わりに到達する。

場合に終了する。

## データ

[EBML specification](https://github.com/ietf-wg-cellar/ebml-specification/blob/242ada684e31aa84b64dbaf99b68695844777a7c/specification.markdown)
