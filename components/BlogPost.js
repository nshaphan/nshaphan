import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPost({ title, mdxSource, date, tags }) {
  return (
    <section className="bg-white dark:bg-gray-800">
      {/* <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold py-18 text-center">
          {title}
        </h1>
      </div> */}
      <Post title={title} mdxSource={mdxSource} date={date} tags={tags} />
    </section>
  );
}

const Post = ({ title, mdxSource, date, tags }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <article className="flex flex-col my-4">
          <div className="flex flex-col justify-start p-6">
            <div className="py-2">
              {tags.map((tag, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="text-blue-700 text-sm font-bold uppercase bg-gray-300 dark:bg-gray-900 p-1 rounded-sm mr-2"
                >
                  {tag}
                </a>
              ))}
            </div>
            <a href="#" className="text-3xl font-bold pb-4">
              {title}
            </a>
            <p href="#" className="text-sm pb-8">
              By{" "}
              <a href="#" className="font-semibold hover:text-gray-800">
                Shaphan
              </a>
              , Published on {date}
            </p>
            <div className="text-slate-500">
              <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
