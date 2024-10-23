import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);

  }
  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex mt-14 gap-3'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks
        readingTime={readingTime}
         bookmarks = {bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
