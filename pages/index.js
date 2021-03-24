import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Carousel from '../Components/Carousel'
import Subscribe from '../Components/Subscribe'




export default function Home() {
  return (
    <>
   <Navbar />
   <Banner />
   <Carousel />
   <Subscribe />
   </>
  )
}
