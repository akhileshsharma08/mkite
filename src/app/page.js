import Image from 'next/image'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ZoomSection from './components/ZoomSection'

export default function Home() {
  return (
    <main className="  ">
      <Hero/>
      <Experience/>
      <Contact/>
      {/* <ZoomSection/> */}
     
      
    </main>
  )
}
