'use client'
import React, {useState, useEffect} from 'react'
import PromptCard from './PromptCard';
import PromptCardList from './PromptCardList';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(`/api/prompt`);
      const data = await resp.json();

      setPosts(data);
    }

    fetchPosts();
  }, [])


  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='text' 
          placeholder='Search for a tag or username' 
          value={searchText} 
          onChange={handleSearchChange} 
          required className='search_input peer'/>
      </form>
      <PromptCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed