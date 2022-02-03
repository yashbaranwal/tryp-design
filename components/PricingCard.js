import Image from 'next/image';
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const PricingCard = ({ plantype, price, unit, buttonlabel, services, size }) => {
  return (
            <div className='rounded-[42px] bg-white px-8 shadow-xl min-w-fit min-h-min'>
                <div className='flex items-center space-x-8 border-b pt-5 pb-8 border-gray-200'>
                    <div className='relative h-20 w-20'>
                        <Image 
                            className='rounded-full'
                            alt="icon"
                            src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-[#050d35]'>{plantype}</p>
                        <p className='text-md text-gray-400'><span className='text-4xl text-[#050d35] 
                        font-bold'>
                        {price}</span>/{unit}</p>
                    </div>
                </div>
                <div className='pt-4 space-y-2'>
                    {services?.map((value) => (
                            <div className='flex text-md items-center justify-between text-[#050d35]' 
                            key={value.item}>
                                <p>{value.item}</p>
                                <CheckCircleIcon className="h-7 w-7"/>
                            </div> 
                        ))}
                </div>
                {buttonlabel==="Get Started" ?
                    <div className='py-4 my-auto'>
                            <button className='px-auto w-full text-md py-2 whitespace-nowrap bg-gray-100 
                            font-semibold cursor-pointer hover:shadow-lg rounded-full'>{buttonlabel}</button>
                    </div>
                 :
                    <div className='py-4'>
                            <button className='px-auto w-full text-md py-2 whitespace-nowrap text-white bg-[#356dc8]
                            font-semibold cursor-pointer hover:shadow-lg rounded-full'>{buttonlabel}</button>
                    </div>
                 }
            </div>
        );
};

export default PricingCard;
