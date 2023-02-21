import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const categories : string[] = [
  "All" ,  
  "Relationships" , 
  "Wealth" , 
  "Self" , 
  "Mind" , 
  "Health" , 
  "World"
]

export default function Home({posts} : any) {

  const [category , setCategory] = useState(0);
  // const links = useCategories(posts , categories , category);

  return (
    <div className="min-h-full bg-main-grad">
      <Head>
        <title>Readr</title>

        <meta
          name="description"
          content="Rich long from essays articles and blogs"
          key="desc"/>
      </Head>

    </div>
    )
}
