import { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {

  const [bookmarks, setBookmarks] = useState(() => {

    const savedBookmarks = localStorage.getItem("webpulse-bookmarks");

    return savedBookmarks
      ? JSON.parse(savedBookmarks)
      : [];
  });


  useEffect(() => {

    localStorage.setItem(
      "webpulse-bookmarks",
      JSON.stringify(bookmarks)
    );

  }, [bookmarks]);


  const toggleBookmark = (post) => {

    const exists = bookmarks.some(
      (item) => item.id === post.id
    );

    if (exists) {

      setBookmarks(
        bookmarks.filter(
          (item) => item.id !== post.id
        )
      );

    } else {

      setBookmarks([
        ...bookmarks,
        post
      ]);

    }
  };


  const isBookmarked = (id) => {

    return bookmarks.some(
      (item) => item.id === id
    );

  };


  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}


export function useBookmarks() {

  return useContext(BookmarkContext);

}