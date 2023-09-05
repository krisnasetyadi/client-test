"use client"

import React, {  useState } from "react"
import { navRoute } from "@/constants/navbar-constants"
import Link from "next/link"
import Image from "next/image";

function NavbarComponent() {
  const [currentRoute, setCurrentRoute] = useState('')
  const [isMobileDimension] = useState<boolean>(false)


    return (
      <div className={`absolute w-full ${isMobileDimension ? 'px-1': 'px-20'}`}>
        <nav className={`${isMobileDimension ? 'h-10' : 'h-12'} bg-white flex justify-between items-center px-5 border-b-solid border-2 border-gray-300 rounded-lg`}>
         <div />
          {!isMobileDimension && (
            <div className="flex p-10">
              {navRoute.map(route => {
                   return (
                     <Link key={route.route} href={`${route.route}`} onClick={() => setCurrentRoute(route.route)} className={`${currentRoute === route.route ? 'text-blue-600' : ''} p-2 font-semibold text-sm`}>
                       {route.name}
                     </Link>
                   )
               })}
              
            </div>
          ) }
        </nav>
      </div>
    )
}

export default NavbarComponent