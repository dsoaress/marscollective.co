export const indexTeamQuery = `
  *[_type == "team"] | order(name) {
    _id,
    image,
    name,
    position
  }
`

export const indexBlogListQuery = `
  *[_type == "blog"] | order(date desc)  | [0...3] {
    _id,
    coverImage,
    date,
    slug,
    title
  }
`

export const blogItemQuery = `
  *[_type == "blog" && slug[$locale].current == $slug] | order(_updatedAt desc) | [0] {
    _id,
    "author": author->{bio, image, name, social},
    content,
    coverImage,
    date,
    description,
    slug,
    title
  }
`

export const blogSlugsQuery = `
  *[_type == "blog"] { slug }
`
