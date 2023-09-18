"use client";
import ServiceButton from "@/components/ServiceButton";
import ServiceCategoryButton from "@/components/ServiceCategoryButton";
import { useState } from "react";

const services = {
  "Spa Predicure": {
    "Regular Predicure": 30,
    "Spa Gel Predicure": 45,
    "Deluxe Spa Predicure": 50,
    "Hot Signature Spa Predicure": 50,
    "Hot Deluxe Spa Predicure": 50,
  },
  "Natural Manicure": {
    Name: 12,
    "Another name": 18,
    "Yet another name": 22,
  },
};

export default function Checkout() {
  const [section, setSection] = useState("");

  const [currentServices, setCurrentServices] = useState([]);
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <div className="flex flex-col text-5xl my-8 justify-center items-center">
      <h1>Checkout</h1>
      <div className="mt-10 bg-gray-500 w-screen h-[48rem] flex flex-row">
        <div className="bg-red-400 h-full w-full">
          <div>
            <div className="grid grid-cols-7 gap-10 p-4">
              {Object.keys(services).map((section) => (
                <ServiceCategoryButton
                  name={section}
                  onClick={() => {
                    setSection(section);
                    console.log(section);
                  }}
                />
              ))}
            </div>
            <div className="grid grid-cols-7 gap-10 p-4">
              {services[section] !== undefined &&
                Object.keys(services[section]).map((service) => (
                  <ServiceButton
                    name={service}
                    onClick={() =>
                      setCurrentServices([
                        ...currentServices,
                        { name: service, price: services[section][service] },
                      ])
                    }
                  />
                ))}
            </div>
          </div>
          <div></div>
        </div>
        <div className="bg-blue-400 h-full w-full flex flex-col items-center">
          <h1 className="text-white text-center my-10">Receipt</h1>
          <div className="bg-white w-[28rem] h-[30rem] border-solid border-[10px] border-pink-700 px-10 py-8">
            <div className="h-[90%] overflow-y-scroll">
              <div className="flex flex-row">
                <div className="w-[70%]">
                  <p className="text-center text-lg">Name</p>
                </div>
                <div className="w-[20%]">
                  <p className="text-center text-lg">Price</p>
                </div>
                <div className="w-[10%]">
                  <p className="text-center text-lg"></p>
                </div>
              </div>
              <hr className="text-black border-black" />
              {currentServices.map((service, index) => (
                <div className="flex flex-row my-2">
                  <div className="w-[70%]">
                    <p className=" text-lg">{service.name}</p>
                  </div>
                  <div className="w-[20%]">
                    <p className="text-center text-lg">
                      ${service.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-[10%]">
                    <p
                      className="text-center text-lg text-red-700 cursor-pointer"
                      onClick={() => {
                        setCurrentServices(
                          currentServices
                            .slice(0, index)
                            .concat(currentServices.slice(index + 1))
                        );
                      }}
                    >
                      x
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-[10%]">
              <div className="">
                <hr className="text-black border-black" />
                <div className="flex flex-row">
                  <div className="w-[70%] font-bold">
                    <p className="text-2xl text-weight-700">Total</p>
                  </div>
                  <div className="w-[20%] font-bold">
                    <p className="text-center text-2xl">
                      $
                      {currentServices
                        .reduce((a, b) => a + b.price, 0)
                        .toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button 
            className="mt-10 text-lg bg-green-800 rounded-md px-8 py-3 text-gray-200 hover:bg-green-600"
            onClick={() =>setIsConfirming(true)}
          >Checkout</button>
        </div>
      </div>
      {isConfirming && (
        <div 
          className="absolute w-screen h-screen"
          
        >
          <div
            className="w-full h-full bg-gray-400 opacity-70"
          >
          </div>
          <div
            className="absolute left-1/4 right-1/4 top-1/4 bottom-1/4 bg-white opacity-100"
          >
            <p
              className="absolute top-1 right-3 text-red-600 cursor-pointer"
              onClickCapture={() => setIsConfirming(false)}
            >x</p>
            <h1
              className="text-center mt-20"
            >
            Total: ${currentServices.reduce((a, b) => a + b.price, 0).toFixed(2)}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
