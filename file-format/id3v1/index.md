- [ID3v1.0](#id3v10)
- [ID3v1.1](#id3v11)
- [ID3v1.2](#id3v12)
- [ID3v1 Enhanced](#id3v1-enhanced)

# values

Text = "XXXX"\
Integers = $ xx xx xx xx\
Synchsafe integers = %0xxxxxxx 0xxxxxxx 0xxxxxxx 0xxxxxxx\
($ xx is hexa number, %xxxxxxxx is binary number)

# ID3v1.0

https://id3.org/ID3v1

![id3v1.0 format](id3v1-0.svg)

|start|end|length|name|value|info|
|----:|----:|----:|:----|:----|:----|
|1|3|3|header|"TAG"||
|4|33|30|title|Text||
|34|63|30|artist|Text||
|64|93|30|album|Text||
|94|97|4|year|Text|"yyyy"|
|98|127|30|comment|Text||
||128|1|genre|Integers|$ 00 - $ 80 (winamp $ 00 - $ BF)|
||||||end of file|

# ID3v1.1

https://id3.org/ID3v1

![id3v1.1 format](id3v1-1.svg)

|start|end|length|name|value|info|
|----:|----:|----:|:----|:----|:----|
|1|3|3|header|"TAG"||
|4|33|30|title|Text||
|34|63|30|artist|Text||
|64|93|30|album|Text||
|94|97|4|year|Text|"yyyy"|
|98|125|28|comment|Text||
||126|1|separator|$ 00||
||127|1|album track|Integers||
||128|1|genre|Integers|$ 00 - $ 80 (winamp $ 00 - $ BF)|
||||||end of file|

# ID3v1.2

https://www.birdcagesoft.com/ID3v12.txt

![id3v1.2 format](id3v1-2.svg)

|start|end|length|name|value|info|
|----:|----:|----:|:----|:----|:----|
|1|3|3|header|"EXT"||
|4|33|30|last half of title|Text||
|34|63|30|last half of artist|Text||
|64|93|30|last half of album|Text||
|94|108|15|last half of comment|Text||
|109|128|20|sub genre|Text||
||||||ID3v1.1 tag|
|129|131|3|header|"TAG"||
|132|161|30|first half of title|Text||
|162|191|30|first half of artist|Text||
|192|221|30|first half of album|Text||
|222|225|4|year|Text|"yyyy"|
|226|253|28|first half of comment|Text||
||254|1|separator|$ 00||
||255|1|album track|Integers||
||256|1|genre|Integers|$ 00 - $ 80 (winamp $ 00 - $ BF)|
||||||end of file|

# ID3v1 Enhanced

https://en.wikipedia.org/wiki/ID3#Enhanced_TAG[10]
https://web.archive.org/web/20120310015458/http://www.fortunecity.com/underworld/sonic/3/id3tag.html

![id3v1 enhanced format](id3v1-enhanced.svg)

|start|end|length|name|value|info|
|----:|----:|----:|:----|:----|:----|
|1|4|4|header|"TAG+"||
|5|64|60|title|Text||
|65|124|60|artist|Text||
|125|184|60|album|Text||
||185|1|speed|Integers|$ 00 = unset<br/>$ 01 = slow<br/>$ 02 = medium<br/>$ 03 = fast<br/>$ 04 = hardcore|
|186|215|30|genre|Text||
|216|221|6|start time|Text|"mmm:ss"|
|222|227|6|end time|Text|"mmm:ss"|
||||||ID3v1.1 tag|
|228|230|3|header|"TAG"||
|231|260|30|title|Text||
|261|290|30|artist|Text||
|291|320|30|album|Text||
|321|324|4|year|Text|"yyyy"|
|325|352|28|comment|Text||
||353|1|separator|$ 00||
||354|1|album track|Integers||
||355|1|genre|Integers|$ 00 - $ 80 (winamp $ 00 - $ BF)|
||||||end of file|
