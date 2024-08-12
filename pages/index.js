import Hero from "@/components/Home-page/Hero";
import FeaturedPosts from "@/components/Home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          name="description"
          content="Posts about programming and again programming"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}

export default HomePage;
