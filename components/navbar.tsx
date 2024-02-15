import Container  from "@/components/ui/container"
import Link from "next/link"
import MainNav from "@/components/main-nav"
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (

    
  <div className="border-b">
        <Container>
          <div className=" 
          inset-0 
          z-10
          fixed 
          bg-white 
          shadow-lg 
          px-2 
          sm:px-6 
          lg:px-8 
          flex h-16 
          items-center 
          w-full
          "
          >
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <Image src="/favicon.ico" height={100} width={100} alt="icon" className="sm:w-7 w-6"/>
              <p className="font-bold text-sm sm:text-xl">
                QR-STORE</p>
            </Link>
            <Link href="/about" className="flex lg:ml-0 gap-x-2 space-x-4 lg:space-x-6 mx-0 sm:mx-6
">
              <p className="text-sm sm:text-lg ml-3 sm:ml-6 hidden">
                About</p>
            </Link>
              <div className="hidden sm:block">
              <MainNav data={categories}/>
              </div>
              <div className="ml-4 block sm:hidden">
              <Select>
                <SelectTrigger className="w-[100px] h-[30px]">
                  <SelectValue placeholder="Select" className=""/>
                </SelectTrigger>
                <SelectContent className="mt-4 flex">
                    <div className="w-0 mx-4">
                    <MainNav data={categories}/>
                    </div>
                </SelectContent>
              </Select>
              </div>
            <NavbarActions />
          </div>

    </Container>

  </div>

  )
}

export default Navbar