import Image from 'next/image'
import React from 'react'

const NavbarAdds = () => {
  return (
    <div className="bg-black py-10 px-5 w-full ">
      <div className="flex  items-center justify-center flex-wrap">
        <div className="flex gap-10 flex-wrap justify-center items-center space-x-8">
          <Image src="/bannerLog.png" alt="logo" width={120} height={60} className="object-contain" />
          <Image src="/bannerLogo1.png" alt="logo" width={120} height={60} className="object-contain" />
          <Image src="/bannerLogo2.png" alt="logo" width={120} height={60} className="object-contain" />
          <Image src="/bannerLogo3.png" alt="logo" width={120} height={60} className="object-contain" />
          <Image src="/bannerLogo4.png" alt="logo" width={120} height={60} className="object-contain" />
        </div>
      </div>
    </div>
  )
}

export default NavbarAdds
