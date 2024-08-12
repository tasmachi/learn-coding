import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="Posts linked to Pogramming world" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const AllPosts = getAllPosts();

  return {
    props: {
      posts: AllPosts,
    },
  };
}

export default AllPostsPage;
