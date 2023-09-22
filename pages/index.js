import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/react-toastify.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/tailwindcss'
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'slick-slider/slick/slick'
// import 'slick-slider/slick/fonts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;1,500&family=Josefin+Sans:wght@100;300;400&family=Merriweather:wght@300&family=Oswald:wght@200&family=Tinos&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        Home page
      </main>
    </>
  )
}
