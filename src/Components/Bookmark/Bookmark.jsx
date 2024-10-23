import PropTypes from "prop-types";

PropTypes

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className="bg-white rounded-xl m-6 p-3">
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;