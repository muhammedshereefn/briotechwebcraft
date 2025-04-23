import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import WordFadeIn from "@/components/ui/word-fade-in";

const Showcase = () => {
  return (
    <div
      className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] 
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
      bg-[size:14px_24px]"
    >
      <ShowcaseNavbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20"
            words="Have a look at some of our recent works"
          />
        </div>

        

        <BlurFadeDemo />

        <LetsMakeThingsHappenSection/>
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
           
          </h1>
          <p className="text-left  text-lg  text-gray-500">+91 7591902596</p>
          <p className="text-left  text-lg  text-gray-500">
            fedgixtechnologies@gmail.com
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Fedgix Technologies. All Rights Reserved.
          
        </div>
      </footer>
      
    </div>
  );
};

export default Showcase;
