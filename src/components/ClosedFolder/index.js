import { Stamp } from "../Stamp";

export function ClosedFolder() {
  return (
    <div className="relative">
      <Stamp />
      <div className="-z-[1] absolute top-[0%] left-[3%] h-[28rem] md:h-[46.875rem] w-[18rem] md:w-[31.25rem] overflow-hidden rounded-md bg-yellow-300" />
      <div className="-z-[1] absolute top-[36mm] left-[103%] md:left-[98%] -translate-x-1/2 -translate-y-1/2 h-32 md:h-36 w-5 md:w-20 overflow-hidden rounded-md bg-yellow-300" />
      <div className="h-[28rem] md:h-[46.875rem] w-[18rem] md:w-[31.25rem] overflow-hidden rounded-md bg-yellow-200">
        <div className="h-full flex-1 flex flex-col justify-center items-center -translate-y-36 gap-2 md:gap-4">
          <span className="font-sans font-bold text-6xl">SICE</span>
          <p className="font-sans text-xs">
            Sistema Interno de Casos Esoterrorista
          </p>
        </div>
      </div>
    </div>
  );
}