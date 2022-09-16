var cache = cache || { q: "", result: [] };
(async () => {
  let q = "keywords:eslintplugin";
  let size = 250;

  if (cache.q !== q) {
    let f = async (obj) => {
      let promise = await fetch(
        "https://api.npms.io/v2/search?" +
          Object.entries(obj)
            .map(([k, v]) => k + "=" + v)
            .join("&")
      );
      return promise.json();
    };

    let fetched = await f({ q, size });
    let total = fetched.total;
    let result = fetched.results;
    for (let from = size; from < total; from += size) {
      fetched = await f({ q, size, from });
      result = result.concat(fetched.results);
    }
    result.sort((f, s) => s.score.final - f.score.final);
    cache.q = q;
    cache.result = result;
    console.log("result: ", cache.result.length);
  }

  let result = cache.result
    .filter((o) => o.score.final > 0.0)
    .map((o) => o.package)
    .filter((p) => !p.name.startsWith("@types/"))
    .filter((p) => p.name.includes("eslint-plugin"))
    .filter((p) => p.date)
    .map(({ name, version, date }) => JSON.stringify({ name, version, date }))
    .join(",\n  ");

  console.log("[ " + result + "]");
})();
