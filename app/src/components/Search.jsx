'use client';

import React, { useState } from 'react'

const Search = ({ setSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  }
  
  return (
    <form onSubmit={handleSubmit} className='mt-20 text-center p-10'>
      <h2 className='text-3xl font-semibold  mb-10'>
        Breathtaking, copyright-free images to elevate your projects.
      </h2>
      <input value={query} onChange={e => setQuery(e.target.value)} className='p-2 h-[50px] text-xl max-w-[500px] bg-transparent border w-full' />
    </form>
  )
}

export default Search;
