import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
import ReviewBtn from "../../components/Button/ReviewBtn";
import RatingStars from "./RatingStars.jsx";
import FormField from "./FormField.jsx";

import {
  addReviewToStorage,
  getReviewByPostId,
} from "../../utils/reviewStorage.js";

import { FaRegCommentDots } from "react-icons/fa";
import { LiaGrinStarsSolid } from "react-icons/lia";

const postText = [
  {
    id: 1,
    title: "Del din oplevelse",
    text: " Giv mig feedback på dette indlæg.",
    titleClass: "font-semibold text-xl mb-2 text-review",
    textClass: "font-normal text-sm text-review",
  },
];

const ReviewModal = ({ postId }) => {
  const [postText, setPost] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!postId) return;
    const saved = getReviewByPostId(postId);
    setReviews(saved);
  }, [postId]);

  // Handle publish button click
  const handlePublish = () => {
    //if post is empty, do not proceed
    if (postText.trim() === "") return;
    // add the review to localStorage
    addReviewToStorage(postId, postText);
    setReviews((prew) => [...prew, postText]);
    // log the published review (for demonstration purposes)
    console.log("Published review:", postText);
    // clear the post after publishing
    setPost("");
  };

  // function to clear the post
  const handleCancel = () => {
    setPost("");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ReviewBtn>
          Giv din mening
          <FaRegCommentDots className="inline-block text-2xl group-hover:translate-x-1 transition-all" />
        </ReviewBtn>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className={clsx(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "bg-white p-6 rounded shadow-lg w-full max-w-md",
          )}
        >
          <Dialog.Title>
            <VisuallyHidden>Rate and review</VisuallyHidden>
          </Dialog.Title>
          <Dialog.Description>
            <VisuallyHidden>Giv mig feedback på dette indlæg.</VisuallyHidden>
          </Dialog.Description>
          <ModalItem items={postText} />

          <div className="flex flex-col gap-3">
            <div className="mb-4">
              <p className="font-semibold text-lg mb-2 text-review">
                Rate and review
              </p>
              <RatingStars />
            </div>
            <div className="">
              <FormField value={postText} onChange={setPost} />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <Dialog.Close asChild>
              <button
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handlePublish}
              >
                Publish
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ReviewModal;

const ModalItem = ({ items }) => {
  return (
    <>
      {postText.map((item) => (
        <div key={item.id} className="flex flex-col items-start mb-6">
          <h4 className={item.titleClass}>{item.title}</h4>
          <div className="flex items-center gap-2">
            <LiaGrinStarsSolid
              className={clsx("w-6 h-6", "text-icon-review")}
            />
            <p className={item.textClass}>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};
