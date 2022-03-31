import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import LatestPosts from "@components/LatestPosts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ posts }) {
  return (
    <ContainerBlock
      title="Shaphan - Software Engineer, Tech Enthusiast"
      description="I am a software engineer, tech enthusiast, and a self-taught developer. I am currently working on a few projects and learning new things everyday."
    >
      <Hero />
      <LatestPosts posts={posts}/>
    </ContainerBlock>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};