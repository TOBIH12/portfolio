
import Image from "next/image"
import { works } from "./assests"

const Works = () => {
  
  return (
    <div className="items-center justify-between container mx-auto pt-25 md:pt-15 md:px-20 md:mt-28 px-5 lg:px-28 w-full mb-10">
      <h1 className="text-6xl font-bold text-[rgb(235,224,74)]">works.</h1>

      <p className="my-9 md:text-left md:w-2/3 text-[#03045E]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, molestiae. Obcaecati ducimus, iusto iste, laudantium reiciendis exercitationem neque quis omnis totam hic laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure quis harum deserunt ea officiis, sunt aut repudiandae cumque voluptates, ex temporibus eum.</p>

      <div className="w-full max-h-sm flex flex-col md:flex-row gap-4 items-center md:justify-start">
      {
        works.map((work) => (
          <a href="#" className="flex flex-col w-full h-full md:w-1/3 p-2 rounded-lg shadow-md overflow-hidden hover:scale-102 transition-transform duration-300 ease-in-out" key={work.id}>
            <Image src={work.image} alt={work.title} className="w-full" />
            <div className="text-[#03045E] flex flex-col gap-3">
              <p className="font-semibold text-lg ">{work.title}</p>
              <p>{work.description}</p>
            </div>
          </a>
        ))
      }
      
      </div>

     <a href="https://github.com/TOBIH12" className="flex items-center w-fit p-4 my-8 rounded-xl bg-gray-900 text-white shadow-sm hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer">View more on my Github</a>
      
    </div>
  )
}

export default Works
