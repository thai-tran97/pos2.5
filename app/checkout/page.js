
import ServiceCategoryButton from '@/components/ServiceCategoryButton'
import 'react'

export default function Checkout() {
    return (
        <div className="flex flex-col text-5xl my-8 justify-center items-center">
            <h1>Checkout</h1>
            <div
                className="mt-10 bg-gray-500 w-screen h-[40rem] flex flex-row"
            >
                <div
                    className="bg-red-400 h-full w-full"
                >
                    <div>
                        <div
                            className="grid grid-cols-7 gap-10 p-4"
                        >
                            <ServiceCategoryButton name='Spa Pedicure'/>
                            <ServiceCategoryButton name='Natural Manicure'/>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-blue-400 h-full w-full"
                >

                </div>
            </div>
        </div>
    )
}