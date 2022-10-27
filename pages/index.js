import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import  Image from 'next/image';
import deved from "../public/dev-ed-wave.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={ darkMode ? 'dark' : '' }>
      <Head>
        <title>Alex</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className=' bg-white px-10 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' text-5xl font-ComforterBrush  dark:text-white'>AlexDev</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
              <li><a href="https://drive.google.com/file/d/1otAZOqpmjDidMIkvzY-IeEymIXpqWD1f/view?usp=sharing" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Mi CV</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Alex Mendoza</h2>
            <h3 className='text-2xl py-2 md:text-3xl  dark:text-white'>Trainee React Developer </h3>
          <div className='text-3xl flex justify-center gap-16 py-3 dark:text-white'>
            <a href="https://www.linkedin.com/in/alexgmendoza/" target='_blank' rel="noreferrer" alt="linkedin"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/un_alex1/" target='_blank' rel="noreferrer" alt="instagram"><AiFillInstagram /></a>
            <a href="https://github.com/AlexMG13" target='_blank' rel="noreferrer" alt="github"><AiFillGithub /></a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          </div>
        </section>
        <section>
          <div className='text-center p-10'>
            <h3 className='text-3xl py-1  dark:text-white'>Resumen</h3>
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>Soy estudiante de Ingenieria Informatica y me capacito como desarrollador web con el objetivo de ser desarrollador FullStack. </p>
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>Un listado de herramientas con las que trabajo usualmente:</p>
            <p className='py-1 text-gray-800 dark:text-white'>html, css y javascript</p>
            <p className='py-1 text-gray-800 dark:text-white'>React y Angular</p>
            <p className='py-1 text-gray-800 dark:text-white'>Bootstrap y Tailwind</p>
            <p className='py-1 text-gray-800 dark:text-white'>Java y Springboot</p>
            <p className='py-1 text-gray-800 dark:text-white'>Postman</p>
            <p className='py-1 text-gray-800 dark:text-white'>Python y C++</p>
          </div>
        </section>
      </main>

    </div>
  )
}
