export const calculateStatus = (posts) => {
  const totalPosts = posts.length; // generate total posts
  const countriesVisited = [...new Set(posts.map((post) => post.country))]
    .length; // total unique countries visited
  const totalLikes = posts.reduce((acc, post) => acc + post.likes, 0); // total likes
  const totalComments = posts.reduce(
    (acc, post) => acc + post.commentsCount,
    0,
  ); // total likes

  // calculate categories count, acc[post.category] - if category exists, increment by 1, else initialize to 1
  // acc[post.category] however many times the category has appeared so far
  // (acc[post.category] || 0) + 1 means if acc[post.category] is undefined, use 0
  const categoriesCount = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  const totalRating = posts.reduce((acc, post) => acc + (post.rating || 0), 0);
  const averageRating = posts.length
    ? (totalRating / posts.length).toFixed(1)
    : 0;

  return {
    totalPosts,
    countriesVisited,
    totalLikes,
    totalComments,
    categoriesCount,
    totalRating,
    averageRating,
  };
};
