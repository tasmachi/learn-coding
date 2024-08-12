import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "@/lib/posts-util";
import Head from "next/head";

function PostDetailPage({ singlePost }) {
  return (
    <>
      <Head>
        <title>{singlePost.title}</title>
        <meta name="description" content={singlePost.excerpt} />
      </Head>
      <PostContent post={singlePost} />
    </>
  );
}

export function getStaticPaths() {
  const fileNames = getPostFiles();
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const postSlug=params.slug;
  const singlePost = getPostData(postSlug);

  return {
    props: {
      singlePost,
    },
    revalidate: 3600,
  };
}
export default PostDetailPage;
