export default function (eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "CV-Updated.pdf": "CV-Updated.pdf" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  eleventyConfig.addFilter("readableDate", date => new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
  }).format(new Date(date)));
  eleventyConfig.addFilter("isoDate", date => new Date(date).toISOString().slice(0, 10));
  eleventyConfig.addFilter("inSeries", (posts, id) => posts.filter(post => post.data.series === id));
  eleventyConfig.addCollection("posts", collection => collection
    .getFilteredByGlob("src/writing/posts/*.md")
    .filter(post => !post.data.draft)
    .sort((a, b) => b.date - a.date));
  eleventyConfig.addPreprocessor("drafts", "md,njk,html", data => {
    if (data.draft) return false;
  });
  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
