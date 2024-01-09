'use client'
import React, {useState, useEffect} from 'react'
import PromptCard from './PromptCard';
import PromptCardList from './PromptCardList';

const Feed = () => {

  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {

  }


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
        data={[]}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed