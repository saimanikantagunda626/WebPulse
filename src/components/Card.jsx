import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function Card({ post }) {

  const {
    toggleBookmark,
    isBookmarked
  } = useBookmarks();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between gap-4">

        <h2 className="text-xl font-bold capitalize">
          {post.title}
        </h2>

        <button
          onClick={() => toggleBookmark(post)}
          className="text-2xl"
        >
          {isBookmarked(post.id) ? "❤️" : "🤍"}
        </button>

      </div>

      <p className="text-gray-600 mt-4">
        {post.body}
      </p>

      <Link
        to={`/details/${post.id}`}
        className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        View Details
      </Link>

    </div>
  );
}

export default Card;