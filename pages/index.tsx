import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>BUNNIEZ ALTAR</title>
        <meta name='description' content='Just a simple Asset Manager/Suite in the Solana Blockchain. Coded in the Shadows | 👻 The Shady Class Buidl' />
        <link rel='icon' href='/shsd2.ico' />
      </Head>



      <main className={styles.main}>
        {/* <h1 className={styles.title}>

        <br/>SHADOW INSTRUMENTS
        </h1>
        <br/> */}
                {/* <div className={styles.pic}>

          </div> */}
          {/* <br/>
          <Navbar  /> */}
          {/* <div className='pl-20 mt-2 w-9/12 md:w-3/12 sm:w-3/12 xs:w-3/12 rounded-none justify-center'>
              <img src='/arc.png' />
          </div> */}
          {/* <div className='mt-12 lg:w-1/6 w-4/6 rounded-xl align-items-center justify-center'>
              <img src='/vessel.gif' />
          </div> */}
        {/* <p className={styles.description}>
          Get started by checking out our tools below<br/>
        </p> */}

          <div className='grid grid-col-2 text-xs mb-10'>
          <a href="bulktransfer" className={styles.card} >
            <h4 className='font-bold text-lg '><b className='bg-gray-700 rounded-full p-0.5'>🔥</b> Send your Shadies to the altar..</h4>
            <br/>
            <h6 className='text-gray-600 text-sm'>  The offering for Bunniez begins...</h6>
          </a>



          
          <br/>
        </div>
        <div className={styles.pic}>
          <div className='w-6/6 lg:w-3/6 mt-4'>
              <img src='/porrtals.png' />
              </div>
          </div>

          {/* <div className='text-xs mt-8 justify-center text-center w-3/6 lg:w-3/12 p-4 border-4 border-violet-700 bg-gray-900 rounded-xl'>
          <a href="https://mint.theshadyclass.xyz/" className='text-lg mt-20 justify-center text-center text-black' >
            <h4 className='font-bold '>The vesseLs are here!</h4>
            <p className='text-black '>🧬VESSEL MINTING EVENT!🧬</p>
            <p className='text-black '>2000 Supply  ▪  2.5% Royalty</p>
            <p className='text-black '>0.1 ◉ Whitelist  ▪ 0.25 ◉ Public</p>
            <p className='text-black font-bold text-xl'>MINT HERE</p>
          </a>
          <div className={styles.pic}>
          <div className='w-3/6 lg:w-12/12 mt-4'>
              <img src='/meden.png' />
              </div>
          </div>
        </div> */}
        

        <div className='text-xl mt-8 justify-center text-center'>
          {/* <a  className='text-lg justify-center text-center text-gray-700' >
            <h4 className='font-bold'>OHBONES TOWN</h4>
          </a> */}

        </div>
        <div className='grid grid-col-2 text-sm w-5/6 lg:w-4/12'>
          <a
            href='altar'
            className={styles.code} >
            <h4 className='font-bold md:pl-12'>ALTAR 🔥</h4>
            <p className='text-amber-300 md:pl-12'>Sacrifice your Shadies to the altar.</p>

          </a>

          <br />
          <a
            href='sacrifice'
            className={styles.code} >
            <h4 className='font-bold md:pl-12'>SACRIFICE BOARD 🪧</h4>
            <p className='text-amber-300 md:pl-12'>Check if your Bunniez are ready.</p>

          </a>
          <br />
          <br />
 
        </div>

        

        <br/>
        <br/>





        <br/>
          <br/>
        <a href="https://discord.gg/7SrNbVyHDD">
        <h2 className='font-bold mb-6 text-xs lg:text-xs pt-1 pb-1 text-gray-600 text-center w-full mb-12 rounded-box'>          
        Coded in the Shadows | 👻 SHADIES x STUDIOS<br/><br/><b>Solana 2023</b></h2>
        </a>
        {/* <div className={styles.pic}>
          <div className='w-3/6 lg:w-3/12 mb-2'>
              <img src='/shad.png' />
              </div>
          </div> */}
          {/* <div className={styles.pic}>
          <div className='w-4/12 lg:w-1/12 mt-2'>
              <img src='/solwyt2.png' />
              </div>
          </div>
          <div className='lg:mx-96 mb-4 mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2'>
          <div className={styles.pic2}>
          <div className='ml-32 w-10 h-10 lg:w-12 lg:h-12 lg:ml-80 mb-2'>
          <a href="https://discord.gg/7SrNbVyHDD">
              <img src='/dc.png' /> 
              </a>
              </div>
              
              </div>
          <div className={styles.pic2}>
          <div className='mr-32 w-10 h-10 lg:w-12 lg:h-12 lg:mr-80 mb-2'>
          <a href="https://twitter.com/shadies_NFT">
              <img src='/twt.png' />
              </a>
          </div>
          
          </div>
          </div> */}
      </main>
      {/* <div className='pl-auto text-center bg-none w-full'>
        <a href="https://discord.gg/b39NXR6">
        <h2 className='text-xs pt-2 pb-2 text-black bg-red-700 rounded-box w-6/12'>          
        Coded in the Shadows | 👻 TSC Buidl | CLICK HERE TO JOIN OUR DISCORD</h2>
        </a>
        </div> */}
    </div>
  )
}

export default Home
