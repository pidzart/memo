var ar = (length) =>
  Array.from(
    {
      length,
    },
    (_, i) => i
  );
var hx = (n, p = 0) => n.toString(16).padStart(p, "0").toUpperCase();
var w = 0x10;
var h = 0x100;

var md = (m) => `# U+${hx(m, 4)} - ${hx(m + 0xfff, 4)}
  
  [Home](../../index.md)
  
  |      | ${ar(w)
    .map((n) => hx(n))
    .join(" | ")} |
  | ----: | ${ar(w)
    .map((n) => "---")
    .join(" | ")} |
  ${ar(0x11)
    .map(
      (i) =>
        `|U+${hx(i)}XXXX|${ar(w)
          .map((j) => i * w + j)
          .map((n) => hx(n, 3))
          .map((s) => `[${s}](./U+${s}000-${s}FFF.md)`)
          .join("|")}|`
    )
    .join("\n")}
  
  |      | ${ar(w)
    .map((n) => hx(n))
    .join(" | ")} |
  | ---- | ${ar(w)
    .map((n) => "---")
    .join(" | ")} |
  ${ar(h)
    .map(
      (i) =>
        `|U+${hx((m + i * w) / w, 3)}X|${ar(w)
          .map((j) => m + i * w + j)
          .map((n) => `&#x${hx(n)};`)
          .join("|")}|`
    )
    .join("\n")}`;

const fs = require("fs");

for (let i = 0; i < 0x110; i++) {
  // 書き込むデータ準備
  const data = md(i * 0x1000);

  // 書き込み
  fs.writeFile(`U+${hx(i, 3)}000-${hx(i, 3)}FFF.md`, data, (err) => {
    if (err) throw err;
    console.log("正常に書き込みが完了しました");
  });
}
