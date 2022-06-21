import './Header.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaReddit } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
// import { setSearchTermReddit } from '../../store/RedditSlice.js'

export const Header = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    //Use useSelector to access reddit search term slice and save it to searchTermReddit

    const handleChange = ({ target }) => {
      const { value } = target;
      setSearchTerm(value);
    }

    useEffect(() => {
        setSearchTerm(searchTerm)
    }, [searchTerm])

    const handleSubmit = (e) => {
      e.preventDefault();
    //   dispatch(setSearchTermReddit(searchTerm));
    }

    return (
       <header>
           {/* <FontAwesomeIcon icon="fa-solid fa-book-bookmark" /> */}
           <a href="">
               <h3>BookMarked Posts</h3> {/* Replace a tag with link tag */}
           </a>
           <FaReddit />
           <h1>TopReddit</h1> {/*Add span to make Reddit text red?*/}
           <form onSubmit={handleSubmit}>
               <input
                 type="text"
                 name="search"
                 placeholder="Search Top Reddit!"
                 onChange={handleChange}
               />
           </form>
       </header>
    )
}