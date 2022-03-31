import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPost from "@components/BlogPost";
import ContainerBlock from "@components/ContainerBlock";

const PostPage = ({ frontMatter: { title, date, tags }, mdxSource }) => {
  return (
    <ContainerBlock title={`${title} - Blog`}>
      <BlogPost title={title} date={date} tags={tags} mdxSource={mdxSource} />
    </ContainerBlock>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };

export default PostPage;
