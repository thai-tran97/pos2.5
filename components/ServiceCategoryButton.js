'use client'

export default function ServiceCategoryButton({ name, onClick }) {
    return (
        <div
            className="w-24 h-24 rounded-md bg-red-900 flex items-center justify-center align-center cursor-pointer"
            onClick={() => onClick()}
        >
            <p1
                className="text-sm text-center text-white"
            >
                {name}
            </p1>
        </div>
    )
}