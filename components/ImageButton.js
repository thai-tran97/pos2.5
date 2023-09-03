'use client'
import 'react'
import { useRouter } from 'next/navigation'

export default function ImageButton({ image, imageName, name, link }) {
    const router = useRouter()

    return (
        <div
            className="h-32 w-32 bg-white rounded-md flex flex-col items-center hover:bg-red-100"
            onClick={() => router.push(link)}
        >
            <img className="h-20 w-20 mt-3" src={image} alt={imageName} />
            {name}
        </div>
    )
}