# EBML

Extensible Binary Meta Language
拡張可能なバイナリーメタ言語

# 可変サイズ整数

可変サイズ整数
Variable-Size Integer
VINT

- __VINT_WIDTH__: (バイト数 - 1)個の0
- __VINT_MARKER__: 目印の1
- __VINT_DATA__: 整数データ

を並べることで整数をバイト列で表すもの。

| 可変サイズ整数 | バイト数 | データのビット数 |
| --- | ---: | ---: |
| `0b 1xxxxxxx` | 1 | 7 |
| `0b 01xxxxxx xxxxxxxx` | 2 | 14 |
| `0b 001xxxxx xxxxxxxx xxxxxxxx` | 3 | 21 |
| `0b 0001xxxx xxxxxxxx xxxxxxxx xxxxxxxx` | 4 | 28 |
| `0b 00001xxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx` | 5 | 35 |
| `0b 000001xx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx` | 6 | 42 |
| `0b 0000001x xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx` | 7 | 49 |
| `0b 00000001 xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx` | 8 | 56 |

## 例

| 可変サイズ整数 | 2進数データ | 10進数データ |
| --- | --- | --- |
| `0b 10110110` | 0b 00110110 | 54 |
| `0b 00110011 00110011 00110011` | 0b 00010011 00110011 00110011 | 1258291 |

# EBML要素

EBML要素
EBML Element

要素は

| 名前 | サイズ | データ型 |
| --- | --- | --- |
| ID | 1〜4 | 可変サイズ整数 |
| データサイズ | 1〜8 | 可変サイズ整数 |
| データ | データサイズ | バイト列 |

で構成される。

https://github.com/ietf-wg-cellar/ebml-specification/blob/master/specification.markdown
