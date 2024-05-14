import Image from "next/image";

// Define an array with data for each block
const serviceBlocks = [
  {
    title: "Web Design & Development",
    iconSrc: "/code.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!",
  },
  {
    title: "App Design & Development",
    iconSrc: "/code.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!",
  },
  {
    title: "Dashboard or CRM",
    iconSrc: "/code.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!",
  },
  {
    title: "Server Management",
    iconSrc: "/code.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!",
  },
  {
    title: "Logo Designing",
    iconSrc: "/code.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!",
  },
  {
    title: "Graphics Designing",
    iconSrc: "/code.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!",
  },
];

// Create a component that maps over the array and renders each block
const ServiceGrid = () => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-8  lg:mx-5">
      {serviceBlocks.map((block, index) => (
        <div
          key={index}
          className="flex hover:bg-[#0C487B] hover:text-white sm:w-[496px] sm:h-[386px] md:w-[386px] flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] hover:border-[#335c80d4] rounded-[14px] p-4 my-4"
        >
          <div className="flex">
            <div className="border-2 border-red-500 rounded-full p-2">
              <div className="rounded-full overflow-hidden">
                <Image src={block.iconSrc} alt={block.title} width={24.3} height={24.3} />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-[16px]">{block.title}</h1>
          <p>{block.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
