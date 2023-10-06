import Contacts from '@/components/contacts'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-center justify-between bg-gray-100"
    >
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  )
}
