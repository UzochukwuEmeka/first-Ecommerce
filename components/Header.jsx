import Cover from '../public/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-black z-50 shadow'>
            <Link href={'/'}>
                <Image src={Cover} width={150} height={150} alt='Logo' />
            </Link><div className="flex items-center space-x-2 5 tetx-sm">
                <button className=" button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-white">
                    Log in
                </button>
                <button className="button bg-transparent border-blue-600  text-white hover:border-blue-600 hover:bg-blue-500 hover:border-transparent hover:text-white">
                    Log in
                </button>
            </div>



        </header>
    )
}

export default Header
