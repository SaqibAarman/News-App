import React from 'react'
import { categories } from '../constants';
import  fetchNews  from '../lib/fetchNews';

async function HomePage ()  {

  // Fetch News Data 
  // const news: NewsResponse = await fetchNews(categories.join(','))

  return (
    <div>Home Page</div>
  )
}

export default HomePage