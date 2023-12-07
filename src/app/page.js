import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
     <div className='grid grid-cols-12'>
      <div className='col-span-8'>
        <h1 className='text-2xl border-b-2 border-b-red-500 inline-block'>National News</h1>
        {/* Post Content */}
        <div className='card'>

        </div>
      
      </div>
      <div className='sidebar col-span-4'>
      <h1 className='text-2xl border-b-2 border-b-red-500 inline-block'>Dhaka</h1>
        {/* Sidebar Content */}
      </div>
     </div>
    </main>
  )
}
