
import  Block1  from "@/components/home/about_section";
import  Block2  from "@/components/home/our_services";
import  Block3  from "@/components/home/block3";
import About_section from "@/components/home/about_section";
import Our_services from "@/components/home/our_services";


export default function Home() {
  return (
    <div className="pb-7 w-full h-full ">
   <About_section />
   <Our_services />
    <Block3 />
    </div>
  );
}
