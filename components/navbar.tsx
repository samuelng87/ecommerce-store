import  Container  from "@/components/ui/container"
import Link from "next/link"
import MainNav from "@/components/main-nav"
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image"

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
          px-4 
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
            <MainNav data={categories}/>
            <NavbarActions />
          </div>
    </Container>
  </div>

  )
}

export default Navbar