import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const page = async () => {
  // copy the API from billboard CMS for my about picture
  const billboard = await getBillboard("0ccf8d4e-2c99-46f4-a327-3d258100fc3f");
  return (
    <Container>
      <div className="space-y-10 pb-10 pt-24">
        <Billboard data={billboard} />
        <div className="flex flex-col sm:flex-row m-3 sm:m-7 p-3 rounded-lg border ">
          <div className="m-5">
            <Carousel className=" max-w-auto">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/samuel.png"
                    height={1500}
                    width={1000}
                    alt="image"
                    className=" border rounded-md"
                  />
                </CarouselItem>
                <CarouselItem className=" items-center flex justify-center align-middle">
                  <Image
                    src="/frame.png"
                    height={500}
                    width={300}
                    alt="image"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-3" />
              <CarouselNext className="right-3" />
            </Carousel>
          </div>

          <div className="m-4 flex justify-center align-middle flex-col">
            <h1 className="p-1 text-[30px] mb-5 text">Samuel</h1>
            <p className="p-1 font-thin italic text-slate-900 text-xs">
              Committed to staying at the forefront of emerging web technologies
            </p>
            <p className="text-justify p-1">
            This is my Gig marketplace. I am selling some products while working on Uber and DIDI to test the feasibility of this concept. Additionally, I aim to present my project from an enterprise-level perspective and showcase it to my fellow gig workers.
            </p>
            <p className="text-justify p-1">
              I have some New and used products at the store, please feel free
              to ask me any questions.
            </p>
            <p className="text-justify p-1">
              Thank you for checking out my store.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
