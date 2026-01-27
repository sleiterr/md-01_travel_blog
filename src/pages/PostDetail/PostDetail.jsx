import React, { useState, useEffect } from "react";
import { fetchLatestPosts } from "../../utils/api.js";
import { useParams } from "react-router-dom";
import SectionPost from "../../components/Section/SectionPost.jsx";
import PostNav from "./postNav.jsx";
import ScrollLink from "./ScrollLink.jsx";
import ReviewModal from "./ReviewModal.jsx";
import BlurText from "../../components/animation/BlurText.jsx";

import clsx from "clsx";

const PostDetail = ({ index }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetchLatestPosts();
        const foundPost = res.find((post) => post.id === Number(id));

        if (!foundPost) {
          throw new Error("Post not found");
        }

        setPost(foundPost);
      } catch (error) {
        setError("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800 text-center">
        Loading list...
      </p>
    );

  if (error)
    return (
      <p className="font-normal text-2xl text-red-500 text-center">{error}</p>
    );

  return (
    <SectionPost
      style={{
        backgroundImage: `url(${post?.images[1]})`,
        backgroundPosition: "center center",
      }}
    >
      <div
        className={clsx(
          "cols-span-2 bg-post-overlay bg-opacity-80",
          "flex flex-col",
          "w-full h-screen",
          "pb-12",
        )}
      >
        <PostNav />
        <div
          className={clsx(
            "flex-1 px-12 py-12",
            "flex flex-col items-start justify-center",
          )}
        >
          <h2 className="font-semibold text-4xl text-secondary mb-4">
            {post.title}
          </h2>
          <BlurText
            as="p"
            direction="top"
            duration={0.8}
            delay={index * 0.15}
            className={clsx(
              "font-light text-lg/7 text-secondary tracking-wide",
              "w-2xl",
            )}
          >
            {post.content}
          </BlurText>
        </div>
        <div
          className={clsx(
            "flex justify-between items-center w-full",
            "mt-auto px-12",
          )}
        >
          <ReviewModal postId={post.id} />
          <ScrollLink />
        </div>
      </div>
    </SectionPost>
  );
};

export default PostDetail;
