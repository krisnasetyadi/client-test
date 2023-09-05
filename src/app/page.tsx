import Image from 'next/image'
import ButtonUpload from '../component/button-upload'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ButtonUpload />
    </main>
  )
}
