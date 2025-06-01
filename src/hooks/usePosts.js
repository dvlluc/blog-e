import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  return useMemo(() => {
    return sort
      ? [...posts].sort((post1, post2) =>
          post1[sort].localeCompare(post2[sort])
        )
      : posts;
  }, [sort, posts]);
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  return useMemo(() => {
    return [...sortedPosts].filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);
};
