import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"
import {formatDistanceToNow, format} from 'date-fns'

export const getPostSlugs = () => {
    const files = fs.readdirSync("_posts");
    const slugs = files.map(filename => filename.replace(".md", ""));

    return slugs;
}

export const getPostBySlug = (slug: string) => {
    const file = fs.readFileSync(path.join("_posts", `${slug}.md`)).toString();
    const { content, data } = matter(file);
    const htmlString = marked.parse(content);

    return {
        data,
        htmlString
    }
}

export const getPosts = (fields: string[]) => {
    const slugs = getPostSlugs();
    const posts = slugs.map(slug => getPost(slug, fields));
    return posts;
}

export const getPost = (slug: string, fields: string[]) => {
    const { data, htmlString } = getPostBySlug(slug);
    const post = {};

    data.date = formatDistanceToNow(1618201918979, {
        addSuffix: true
    })

    fields.forEach(field => {
        if(field === "slug") {
            post["slug"] = slug;
        }else if(field === "html") {
            post["html"] = htmlString
        } else if(data[field]) {
            post[field] = data[field];
        }
    });

    return post;
}