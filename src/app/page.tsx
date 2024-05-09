
import  Block1  from "@/app/home/about_section";
import  Block2  from "@/app/home/our_services";
import  Block3  from "@/app/home/block3";
import About_section from "@/app/home/about_section";
import Our_services from "@/app/home/our_services";


export default function Home() {
  return (
    <div className="pb-7 w-full h-full ">
   <About_section />
   <Our_services />
    <Block3 />
    </div>
  );
}
