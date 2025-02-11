import { BsFillPersonFill } from 'react-icons/bs'
import Image from 'next/image'

function Coach({ src, name, title, blurb }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full border-2 p-1 h-32 w-32">
        {src ? (
          <img src={src} className="rounded-full bg-cover" />
        ) : (
          <BsFillPersonFill className="w-28 h-28" />
        )}
      </div>
      <h2 className="font-bold text-periwinkle text-lg text-center">
        {name || 'Name'}
      </h2>
      <p className="text-md text-center">{title || 'Title'}</p>
      <p className="text-sm text-center">{blurb || 'Blurb'}</p>
    </div>
  )
}

export default Coach
