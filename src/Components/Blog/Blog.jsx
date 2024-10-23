import PropTypes from 'prop-types';
import { PiBookmarkSimpleLight } from "react-icons/pi";


const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { cover, title, author_img, author, reading_time, hashtags, post_date } = blog;

    return (
        <div>
            <img src={cover} alt="" />
            <div className="flex justify-between items-center mt-7">
                <div>
                    <div className="flex items-center gap-4 ">
                        <img className="h-14 w-14" src={author_img} alt="" />
                        <div>
                            <p className="font-bold text-2xl">{author}</p>
                            <p className='text-gray-600'>{post_date}</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 '>
                    <p>{reading_time} min read</p>
                    <button className='text-2xl text-fuchsia-800' onClick={() => handleAddToBookmarks(blog)}><PiBookmarkSimpleLight></PiBookmarkSimpleLight></button>
                </div>

            </div>
            <h1 className='mt-4 text-4xl font-bold'>{title}</h1>
            <div className='flex items-center gap-3 text-gray-600 my-4'>
                {
                    hashtags.map((hash, idx) => <p key={idx}>{hash}</p>)
                }
            </div>
            <button
            onClick={()=>handleMarkAsRead(reading_time)} 
            className=' font-semibold underline pb-3 text-[#6047EC]' >Mark as read
            </button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func
   
}
Blog.propTypes ={
    handleMarkAsRead: PropTypes.func
}

export default Blog;
