import React from "react";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold py-10 text-center md:text-left">
          Articles
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 pb-40">
          {posts?.map((post, idx) => (
            <PostCard post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PostCard = ({ post, index }) => {
  return (
    <Link
      href={"/blog/" + post.slug}
      passHref
      key={index}
      className="font-semibold group flex flex-row space-x-2 w-full items-center"
    >
      <div className="github-repo shadow hover:bg-gray-200 dark:hover:bg-gray-700 p-10 rounded-lg cursor-pointer">
        <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
          {post.frontMatter.title}
        </h1>
        <p className="text-base font-normal my-4 text-gray-500">
          {post.frontMatter.description}
        </p>
        <button
          type="button"
          className="hover:bg-gray-900 rounded-md px-2 py-1  hover:text-gray-50"
        >
          Read More
        </button>
      </div>
    </Link>
  );
};

export { PostCard };
