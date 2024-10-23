import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (

        <div className="bg-[#1111110d] rounded-xl">
            <div className="rounded-xl mb-8 border-2 border-indigo-800 bg-[#1111110d]">
                <h3 className="font-bold text-xl p-4 text-indigo-700">Spent time on read: {readingTime} min</h3>
            </div>
            <h2 className="text-2xl font-bold py-4 px-14 ">Bokmark Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array

}

export default Bookmarks;