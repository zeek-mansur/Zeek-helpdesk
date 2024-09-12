import Image from 'next/image'
import Link from 'next/link'
import Logo from './zeek-logo.png'

export default function navbar() {
  return (
    <main>
          <nav>
            <Image 
            src = {Logo}
            alt = 'Zeek Helpdesk logo'
            width = {70}
            qaulity={100}
            placeholder = 'blur'
            />
          <h1>Zeek Helpdesk</h1>
          <Link href = "/">Dashboard</Link>
          <Link href = "/tickets">Tickets</Link>
        </nav>
    </main>
  )
}
