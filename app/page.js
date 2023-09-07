import Image from 'next/image'
import ImageButton from '@/components/ImageButton'

export default function Home() {

  var date = new Date().toLocaleString();

  return (
    <div
      className="h-screen w-screen"
    >
      <img className="z-[-1] absolute h-full w-full" src="c.jpg"/>
      <div
        className="h-full w-full flex align-center items-center justify-center"
      >
        <div className='date-time-banner' 
            style={{position:"absolute", top:"50px", backgroundColor:"black", color: "white", border:"solid 2px black"}}
        >
            <h1>{date}</h1>
        </div>
        <div
          className="bg-gray-300 h-[28rem] w-[40rem] rounded-lg flex flex-col items-center"
        >
          <h1
            className="text-3xl mt-6 mb-6"
          >
            Dashboard
          </h1>
          <div className="mx-10 grid grid-cols-3 gap-10">
            <ImageButton image="cas.png" imageName="cashier" name="Checkout" link="checkout"/>
            <ImageButton image="cale.png" imageName="calendar" name="Calendar" link="calendar"/>
            <ImageButton image="clock.png" imageName="clock" name="Clock-in" link="clockin"/>
            <ImageButton image="em.png" imageName="employee" name="Employee" link="employee"/>
            <ImageButton image="ad.png" imageName="admin" name="Admin" link="admin"/>
            <ImageButton image="se.png" imageName="setting" name="Setting" link="setting"/>

          </div>
        </div>
      </div>
    </div>

  )
}
