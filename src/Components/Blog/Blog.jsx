import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { cover, tittle, author_img, author, reading_time, hashtags, post_date } = blog;

    return (
        <div className="mt-">
            <img src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex justify-center items-center gap-4">
                        <img className="h-14 w-14" src={author_img} alt="" />
                        <div className="font-bold text-2xl">
                            {author}
                            
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;