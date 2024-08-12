import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostFiles(){
  return fs.readdirSync(postDirectory)
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const fullPath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContent);
  
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles=getPostFiles()

  const postsData = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = postsData.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}
