import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="bg-white border-t">
        <div className="mx-auto py-10 flex flex-col items-center">
            <p className="text-center text-xs text-black flex items-center">
            &copy; 2024
            <Image
                src="/favicon.ico"
                width={12}
                height={12}
                alt="logo"
                className="ml-1 mr-1" // Add margin to the left
            />  QR Store, Inc. All rights reserved.
            </p>
            <p className="text-center text-xs text-black">
            <Link href="https://samuelng.vercel.app/" target="blank">
                Visit
                <span className="text-cyan-700"> Samuel </span> website for more
            </Link>
            </p>
        </div>
        </footer>
    )
}

export default Footer