import slugify from "slugify";

function slugTransform(text) {
  return slugify(text, {
    lower: true,
    strict: true,
  });
}

export { slugTransform };
