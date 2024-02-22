import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from '@/components/ui/container'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export const revalidate = 0;


const page = async () => {

      // copy the API from billboard CMS for my about picture
      const billboard = await getBillboard("0ccf8d4e-2c99-46f4-a327-3d258100fc3f");
  return (
    <Container>
    <div className="space-y-10 pb-10 pt-24">
      <Billboard data={billboard}/>
      <div className="flex flex-col sm:flex-row m-3 sm:m-7 p-3 rounded-lg border ">
          <div className="m-5">
          <Carousel className=" max-w-auto">
  <CarouselContent>
    <CarouselItem>
      <Image src="/sam.png" height={1500} width={1000} alt="image" className=" border rounded-md"/>
    </CarouselItem>
    <CarouselItem className=" items-center flex justify-center align-middle">
    <Image src="/frame.png" height={500} width={300} alt="image" />
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="left-3"/>
  <CarouselNext className="right-3"/>
</Carousel>          
</div>
            
          <div className="m-4">
            <p className=" text-justify">
            Hi, my name is Samuel, I am  
            committed to stay at the forefront of emerging web technologies, I actively engage in self-learning. 
            Additionally, I have hands-on experience in web hosting on platforms, deploying projects, and managing GitHub repositories, further enhancing my proficiency in web development.
            I've volunteered in an agile environment at Treiner, showcasing adaptability and teamwork. 
            Currently, I'm conducting my professional year, further refining my skills and staying current with industry trends.
            If you're seeking a results-driven marketer with a unique blend of skills and a passion for continuous learning "Kaizen".
            Feel free to message me with any inquiries or opportunities for collaboration. Let's explore how we can achieve success together!
            </p>
          </div>
      </div>  
    </div>
  </Container>

  )
}

export default page




// <div className="flex flex-col lg:flex-row lg:w-full justify-center align-middle items-center">
// <div className="">
// <Carousel className="w-auto">
//   <CarouselContent>
//     <CarouselItem>
//       <Image src="/sam.png" height={500} width={500} alt="image" className=" border rounded-md"/>
//     </CarouselItem>
//     <CarouselItem className=" items-center flex justify-center align-middle">
//     <Image src="/frame.png" height={300} width={300} alt="image" />
//     </CarouselItem>
//   </CarouselContent>
//   <CarouselPrevious />
//   <CarouselNext />
// </Carousel>
// </div>
// <div className="mb-4 mt-0 text-base font-light leading-relaxed p-11 w-auto">
//   <p>Committed to staying at the forefront of emerging web technologies, I actively engage in self-learning. 
//     Additionally, I have hands-on experience in web hosting on platforms, deploying projects, and managing GitHub repositories, further enhancing my proficiency in web development.
//     I've volunteered in an agile environment at Treiner, showcasing adaptability and teamwork. 
//     Currently, I'm conducting my professional year, further refining my skills and staying current with industry trends.
//     If you're seeking a results-driven marketer with a unique blend of skills and a passion for continuous learning "Kaizen".
//     Feel free to message me with any inquiries or opportunities for collaboration. Let's explore how we can achieve success together!
//   </p>


// </div>
// </div>