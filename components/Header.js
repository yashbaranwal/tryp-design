import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
            <header>
                <div className='grid grid-cols-2 md:grid-cols-3 pt-10 py-5 px-12 md:px-32 text-white bg-[#050d35]'>
                    <div className='text-2xl cursor-pointer font-bold flex items-center justify-start'>TRYP.COM</div>
                    <div className='hidden md:flex items-center space-x-12 text-sm text-gray-500 
                        justify-center font-semibold'>
                        <Link href="/">
                            <a className='hover:text-white'>Home</a>
                        </Link>
                        <Link href="/">
                            <a className='hover:text-white'>Features</a>
                        </Link>
                        <Link href="/">
                            <a className='text-white'>Pricing</a>
                        </Link>
                        <Link href="/">
                            <a className='hover:text-white'>Story</a>
                        </Link>
                    </div>
                    <div className='flex items-center justify-end'>
                        <div className='hidden md:inline text-right text-sm'>
                            <p className='text-white'>Hi, Jay</p>
                            <p className='text-gray-500'>How&apos;re you doing?!</p>
                        </div>
                        <div className='relative h-10 w-10 md:mx-4'>
                            <Image 
                                className='rounded-full cursor-pointer'
                                alt="avatar"
                                src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
};

export default Header;
