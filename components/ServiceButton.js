'use client'

export default function ServiceButton({ name, onClick}) {
    return (
        <div
            className="w-24 h-24 rounded-md bg-gray-500 flex items-center justify-center align-center cursor-pointer"
            onClick={() => onClick()}
        >
            <p1
                className="text-sm text-center text-white cursor-pointer"
            >
                {name}
            </p1>
        </div>
    )
}