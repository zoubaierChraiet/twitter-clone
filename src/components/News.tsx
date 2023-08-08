"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (...args: any) => {
  return fetch(args[0]).then((res) => res.json());
};

interface IProps {}

const News: React.FC<IProps> = (props) => {
  const [articlesCount, setArticlesCount] = useState(3);
  const { data } = useSWR(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json",
    fetcher
  );

  if (data?.status !== "ok") return <div>Error...</div>;

  return (
    <div className="widget-container max-w-[300px]">
      <h2 className="text-xl font-bold mb-2">Whats happening</h2>
      <div>
        {data.articles?.slice(0, articlesCount).map((each: any) => (
          <NewComponent
            key={each?.publishedAt}
            title={each.title}
            url={each.url}
            urlToImage={each.urlToImage}
            author={each.author}
          />
        ))}
      </div>
      {articlesCount < data?.totalResults ? (
        <button
          onClick={() => setArticlesCount(articlesCount + 3)}
          className="text-gray-700 font-semibold mt-4"
        >
          Show more...
        </button>
      ) : null}
    </div>
  );
};

interface INew {
  title: string;
  urlToImage: string;
  url: string;
  author: string;
}

const NewComponent: React.FC<INew> = ({ title, url, urlToImage, author }) => {
  return (
    <Link href={url} target="_blank">
      <div className="flex items-start">
        <p className="text-sm font-bold">{title}</p>
        <Image
          src={urlToImage}
          alt="urlToImage"
          width={50}
          height={50}
          className="object-cover rounded-md"
        />
      </div>
      <small className="text-gray-400">{author}</small>
    </Link>
  );
};

export default News;
