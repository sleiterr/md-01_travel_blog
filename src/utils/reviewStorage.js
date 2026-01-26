const REWIEWS_KEY = "reviews";

export function getReviewsFromStorage() {
  try {
    const reviews = localStorage.getItem(REWIEWS_KEY);
    return reviews ? JSON.parse(reviews) : {};
  } catch (e) {
    console.error("Could not fetch reviews from storage", e);
    return {};
  }
}

export function getReviewByPostId(postId) {
  const allReviews = getReviewsFromStorage();
  return allReviews[postId] || [];
}

export function saveReviewToStorage(reviews) {
  try {
    localStorage.setItem(REWIEWS_KEY, JSON.stringify(reviews));
  } catch (e) {
    // log error if any issue occurs
    console.error("Could not save reviews to storage", e);
  }
}

export function addReviewToStorage(postId, review) {
  if (!review || review.trim() === "") return;

  const allReviews = getReviewsFromStorage();
  const postReviews = allReviews[postId] || [];

  const updated = {
    ...allReviews,
    [postId]: [...postReviews, review],
  };

  saveReviewToStorage(updated);
}
