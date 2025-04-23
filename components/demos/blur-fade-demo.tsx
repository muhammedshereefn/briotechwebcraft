import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/loviz.png",
    title: "LOVIZ CLOTH'S",
    link: "https://loviz.in",
  },

  {
    background: "bg-gray-200",
    imageUrl: "/images/6xoo.png",
    title: "6XO BAGS STORE",
    link: "https://6xobags.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/a2z.png",
    title: "A2Z JUICES",
    link: "https://a2z-juices.onrender.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/kvm.png",
    title: "KVM AQUATICS",
    link: "https://kvmaqua.onrender.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/rust.png",
    title: "Therustdoor Artist",
    link: "https://therustdoor.onrender.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/bafkhana.png",
    title: "Bafkhana Cuisine",
    link: "https://bafkhana.vercel.app/",
  },
];
export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}