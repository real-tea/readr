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
  "World",
  "Me"
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

        <meta property="og:title" content="Curated quality long reading" />

        <meta
          property="og:description"
          content="Rich long form essays, articles & blogs curated with care."
        />

        <meta property="og:image" content="" />
      </Head>

      <div className = "mt-40 w-3/4 flex flex-col mx-auto sm:ml-32">
        <div className="pb-6">
          {/* <Image/> */}
          <div className="font-spectral font-medium text-2xl sm:text-3xl text-mygrey mt-4 leading-6 tracking-tight w-4/5 md:w-1/2">
            Poignant 
            <span className="font-italics">Essays , Articles & Blogs</span> curated with love and care. 
          </div>
        </div>
      </div>

      <div className="font-spectral pl-[12.5%] pr-[12.5%] sm:ml-32 sm:pl-0 font-medium flex flex-row gap-4 mt-12 overflow-x-scroll no-scrollbar text-mygrey">
      {categories.map((cat, i) => (
          <div
            className={`text-lg md:text-xl cursor-pointer transition-all ease-linear ${
              category === i ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => {
              setCategory(i);
            }}
            key={i}
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="w-3/4 flex flex-col mx-auto sm:ml-32">
        <div className="mt-10 flex flex-col gap-9 mb-12 text-mygrey">
              {/* {links.map((link:any)=>(
                <PostCard/>
                ))} */}
        </div>

      </div>

    </div>
    )
}
