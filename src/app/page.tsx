import MaxWidthWrapper from "../components/MaxWidthWrap";
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl"> Proyecto final de Estadística <span className="bg-green-600 px-2 text-white">inferencial</span>
              </h1>
              <p className="text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Probabilidad haciendo uso de la <span className="font-semibold">IA</span> en pruebas ICFES.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex justify-center lg:justify-end items-center lg:items-start px-6 pt-14 lg:px-0">
            <div className="relative w-full">
              <img className="w-full " src="/logo.png" alt="Imagen" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className='pb-5'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center '>
              <h2 className='order-1 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 pb-4'>
                ¿Qué ejercicio quieres resolver?{' '}
              </h2>
            </div>
            <Textarea placeholder="Escribe tu mensaje aquí." />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}