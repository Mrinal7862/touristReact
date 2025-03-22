import React, { useState } from "react";
import { Link } from "react-router-dom";

import {SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function Header() {
    const [active, setActive] = useState(false);
    const toggle = ()=>{
        setActive(!active)
        console.log("tapped")
    }
  return (
    <div className="relative flex justify-between items-center w-full bg-transparent py-6 px-4">
        <div className="w-full">
            <svg
            width="140"
            height="28"
            viewBox="0 0 140 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <g clip-path="url(#clip0_64_67)">
                <path
                d="M36.2349 7.59674V23.6674H33.2077V7.59674H28.2599V5.02441H41.1574V7.59674H36.2349Z"
                fill="white"
                />
                <path
                d="M43.8667 13.5184C44.1635 12.7204 44.5535 12.1304 45.0369 11.7483C45.5287 11.3663 46.135 11.1753 46.8557 11.1753C47.2458 11.1753 47.6274 11.222 48.0005 11.3154C48.3821 11.4088 48.7552 11.5446 49.1198 11.7229L48.1277 14.066C47.8902 13.8962 47.6316 13.7731 47.3518 13.6967C47.0804 13.6118 46.7752 13.5694 46.436 13.5694C45.5202 13.5694 44.8631 13.9387 44.4645 14.6773C44.066 15.4074 43.8667 16.6383 43.8667 18.3702V23.6677H41.1066V11.5701H43.8667V13.5184Z"
                fill="white"
                />
                <path
                d="M62.0427 23.6677H59.2825V22.1013C58.7907 22.7975 58.2141 23.3154 57.5527 23.6549C56.8997 23.9945 56.1493 24.1643 55.3013 24.1643C53.5969 24.1643 52.2529 23.5828 51.2693 22.4197C50.2941 21.2482 49.8065 19.6479 49.8065 17.6189C49.8065 15.6917 50.3069 14.1381 51.3074 12.9581C52.308 11.7696 53.6139 11.1753 55.225 11.1753C56.2086 11.1753 57.0482 11.3833 57.7434 11.7993C58.4473 12.2068 58.9603 12.7968 59.2825 13.5694V11.5955H62.0427V23.6677ZM59.3588 17.5934C59.3588 16.3454 59.0663 15.3734 58.4812 14.6773C57.9046 13.9811 57.0948 13.6331 56.0518 13.6331C55.0088 13.6331 54.1862 13.9938 53.5842 14.7154C52.9906 15.4286 52.6939 16.4219 52.6939 17.6953C52.6939 18.9772 52.9822 19.9662 53.5588 20.6624C54.1354 21.3585 54.9494 21.7066 56.0009 21.7066C56.993 21.7066 57.7986 21.3288 58.4176 20.5732C59.0451 19.8177 59.3588 18.8244 59.3588 17.5934Z"
                fill="white"
                />
                <path
                d="M70.0939 24.3937L63.7723 11.5957H66.7871L69.4196 17.67C69.5046 17.8568 69.6063 18.1369 69.7253 18.5104C69.8438 18.884 69.967 19.3297 70.0939 19.8476C70.1788 19.4825 70.2764 19.1217 70.3864 18.7651C70.5055 18.4001 70.6449 18.035 70.8064 17.67L73.4264 11.5957H76.4286L70.0939 24.3937Z"
                fill="white"
                />
                <path
                d="M89.7837 18.0391H80.1423C80.2105 19.1682 80.5455 20.0511 81.1474 20.6879C81.7493 21.3161 82.5504 21.6302 83.5513 21.6302C84.4416 21.6302 85.1835 21.4434 85.777 21.0699C86.3705 20.6963 86.888 20.0936 87.3289 19.2616L89.6563 20.5605C88.9784 21.7745 88.139 22.6786 87.1381 23.2729C86.1377 23.8672 84.9633 24.1643 83.6147 24.1643C81.6817 24.1643 80.1423 23.5743 78.9977 22.3943C77.8532 21.2142 77.2806 19.6394 77.2806 17.6698C77.2806 15.7766 77.8699 14.223 79.0486 13.0091C80.2356 11.7866 81.7576 11.1753 83.6147 11.1753C85.5568 11.1753 87.0705 11.7314 88.1558 12.8435C89.2411 13.9557 89.7837 15.5135 89.7837 17.517V18.0391ZM86.9221 16.1799C86.8114 15.314 86.4811 14.656 85.9295 14.2061C85.3785 13.7476 84.6241 13.5184 83.6656 13.5184C82.7586 13.5184 82.0293 13.7391 81.4782 14.1806C80.9266 14.622 80.5407 15.2885 80.3206 16.1799H86.9221Z"
                fill="white"
                />
                <path
                d="M92.7985 23.6679V3.92969H95.5584V23.6679H92.7985Z"
                fill="white"
                />
                <path
                d="M99.6411 23.6679V3.92969H102.402V23.6679H99.6411Z"
                fill="white"
                />
                <path
                d="M106.115 6.37441C106.115 5.90748 106.285 5.50423 106.624 5.16465C106.972 4.82507 107.383 4.65527 107.858 4.65527C108.35 4.65527 108.757 4.82082 109.079 5.15191C109.41 5.47452 109.575 5.88201 109.575 6.37441C109.575 6.86681 109.41 7.2828 109.079 7.62239C108.748 7.95348 108.341 8.11903 107.858 8.11903C107.383 8.11903 106.972 7.94923 106.624 7.60964C106.285 7.26156 106.115 6.84982 106.115 6.37441ZM106.484 23.6676V11.5955H109.244V23.6676H106.484Z"
                fill="white"
                />
                <path
                d="M124.546 23.6677H121.786V22.1013C121.294 22.7975 120.717 23.3154 120.056 23.6549C119.403 23.9945 118.652 24.1643 117.805 24.1643C116.1 24.1643 114.756 23.5828 113.773 22.4197C112.798 21.2482 112.31 19.6479 112.31 17.6189C112.31 15.6917 112.81 14.1381 113.811 12.9581C114.811 11.7696 116.117 11.1753 117.728 11.1753C118.712 11.1753 119.552 11.3833 120.247 11.7993C120.95 12.2068 121.464 12.7968 121.786 13.5694V11.5955H124.546V23.6677ZM121.862 17.5934C121.862 16.3454 121.57 15.3734 120.985 14.6773C120.408 13.9811 119.598 13.6331 118.555 13.6331C117.512 13.6331 116.689 13.9938 116.088 14.7154C115.494 15.4286 115.197 16.4219 115.197 17.6953C115.197 18.9772 115.486 19.9662 116.062 20.6624C116.639 21.3585 117.453 21.7066 118.504 21.7066C119.497 21.7066 120.302 21.3288 120.921 20.5732C121.548 19.8177 121.862 18.8244 121.862 17.5934Z"
                fill="white"
                />
                <path
                d="M128.361 23.6677V11.5955H130.956V13.5694C131.508 12.7374 132.156 12.1304 132.902 11.7483C133.649 11.3663 134.556 11.1753 135.625 11.1753C136.523 11.1753 137.287 11.3197 137.914 11.6083C138.55 11.8885 139.046 12.3087 139.402 12.869C139.614 13.2001 139.767 13.5863 139.86 14.0278C139.953 14.4692 140 15.2418 140 16.3454V23.6677H137.214V17.4661C137.214 15.8785 137.019 14.8258 136.629 14.3079C136.248 13.7816 135.565 13.5184 134.581 13.5184C133.937 13.5184 133.361 13.6373 132.852 13.875C132.351 14.1127 131.957 14.4481 131.669 14.881C131.465 15.1697 131.321 15.5432 131.236 16.0016C131.16 16.4516 131.122 17.1732 131.122 18.1664V23.6677H128.361Z"
                fill="white"
                />
                <path
                d="M8.64111 20.1308L12.181 23.6205L15.7208 20.1308L12.181 16.6413L8.64111 20.1308ZM12.181 3.19536V3.2006C11.1678 3.2006 10.1547 3.58192 9.38281 4.34281L9.37928 4.33932C8.60916 5.10021 8.22237 6.10073 8.22237 7.10127C8.22237 8.10353 8.60743 9.10232 9.37569 9.85969H9.38102L12.181 12.6182L14.9792 9.85969H14.9845C15.7581 9.09705 16.1449 8.09827 16.1449 7.10127H16.1395C16.1395 6.10249 15.7528 5.10371 14.9809 4.34281C14.2037 3.57842 13.1906 3.19536 12.181 3.19536ZM17.7613 22.1424L13.2012 26.6378L12.181 27.6436L11.1607 26.6378L6.60064 22.1424L2.04051 26.6378L0 24.6262L10.1422 14.6297L7.34408 11.8713L7.34761 11.8678C6.00797 10.5489 5.33904 8.82244 5.33904 7.10127C5.33904 5.37833 6.00797 3.65364 7.34408 2.33651V2.33301C8.68018 1.01589 10.4314 0.356445 12.181 0.356445V0.361693C13.9341 0.361693 15.6871 1.01938 17.0196 2.33301C18.3557 3.65014 19.0229 5.37658 19.0229 7.10301H19.0176C19.0176 8.8277 18.3504 10.5524 17.0161 11.8695L17.0196 11.873L14.2215 14.6297L24.362 24.6262L22.3214 26.6378L17.7613 22.1424Z"
                fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_64_67">
                <rect
                    width="140"
                    height="27.5214"
                    fill="white"
                    transform="translate(0 0.239258)"
                />
                </clipPath>
            </defs>
            </svg>
        </div>
      
        <div onClick={toggle} className="flex flex-col space-y-1 p-4 justify-between hover:cursor-pointer md:hidden z-10">
              <span className={`block w-8 h-[3px] bg-white transition-transform duration-150 ${active ? 'rotate-45 translate-y-[7px]': ''} `}></span>
              <span className={`block w-8 h-[3px] transition-transform duration-150 ${active ? '-rotate-45': ''} bg-white`}></span>
              {/* <span className="block w-6 h-1 bg-white"></span> */}
        </div>

        <div className={`absolute h-screen top-0 left-0 w-full   backdrop-blur-lg transition-opacity duration-300 ${active ? 'opacity-100' : 'hidden'} md:opacity-100 md:backdrop-blur-none md:h-auto md:relative md:w-full md:flex md:flex-row md:space-x-4 md:items-center md:justify-end`}>
            <ul className="flex  flex-col md:flex-row items-center justify-center h-full w-full space-y-4 md:space-y-0 text-white px-5 gap-20 text-lg">
                <Link to={'/home'} className="">
                    <li 
                    className="
                        Capitalize 
                        relative  
                        cursor-pointer 
                        transition-all 
                        duration-100 
                        before:content-[''] 
                        before:absolute 
                        before:bottom-0 
                        before:left-0
                        before:w-0
                        before:h-[3px]
                        before:round-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-orange-500
                        hover:before:w-full
                        hover:before:opacity-100
                        ">
                        Home
                        {/* <div className="hover:bg-orange-600 h-1 w-full translate-x-0 hover:translate-x-100 transition-transform  */}
                        {/* //    duration-150"></div> */}
                    </li>
                </Link>

                <Link to={'/About'}>
                    <li
                        className="
                        Capitalize 
                        relative  
                        cursor-pointer 
                        transition-all 
                        duration-100 
                        before:content-[''] 
                        before:absolute 
                        before:bottom-0 
                        before:left-0
                        before:w-0
                        before:h-[3px]
                        before:round-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-orange-500
                        hover:before:w-full
                        hover:before:opacity-100
                        "
                    >About</li>
                </Link>

                <Link to={'/blog'}>
                    <li
                    className="
                        Capitalize 
                        relative  
                        cursor-pointer 
                        transition-all 
                        duration-100 
                        before:content-[''] 
                        before:absolute 
                        before:bottom-0 
                        before:left-0
                        before:w-0
                        before:h-[3px]
                        before:round-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-orange-500
                        hover:before:w-full
                        hover:before:opacity-100
                        ">Blog</li>
                </Link>

                <Link tp={'/contact'}>
                    <li
                    className="
                        Capitalize 
                        relative  
                        cursor-pointer 
                        transition-all 
                        duration-100 
                        before:content-[''] 
                        before:absolute 
                        before:bottom-0 
                        before:left-0
                        before:w-0
                        before:h-[3px]
                        before:round-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-orange-500
                        hover:before:w-full
                        hover:before:opacity-100
                        ">Contact</li>
                </Link>
                <div className="signLog flex flex-row space-x-4  w-full  justify-center md:justify-end">
                    <Link to={'/signup'}>
                        <button className="bg-orange-500 py-2 text-white rounded-lg">Sign Up</button>
                    </Link>
                    <Link to={'/signin'}>
                        <button className="bg-white py-2  text-orange-500 rounded-lg">Sign-in</button>
                    </Link>
                </div>
            </ul>
            
        </div>


    </div>
  );
}

export default Header;
