import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight, ChevronRight, FileCode, Palette } from 'lucide-react'

const CardsSection = () => {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4 text-left mx-auto">
      <div className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-red-500/30 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src={"/images/html.png"}
              alt='html'
              width={100}
              height={100}
              className='object-cover object-center'
            />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base">
              HTML5 Foundations
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
              Understand the structure of the web.
            </p>
          </div>
        </div>
        <Button variant="ghost" className="shrink-0 h-9 px-3 border border-white/10 rounded-lg text-white hover:bg-white/90 text-xs sm:text-sm">
          Start <ChevronRight size={14} />
        </Button>
      </div>

      <div className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-red-500/30 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src={"/images/css.png"}
              alt='html'
              width={100}
              height={100}
              className='object-cover object-center'
            />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base">
              CSS3 Styling & Layouts
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
              Learn Flexbox, Grid, and responsive design.
            </p>
          </div>
        </div>
        <Button variant="ghost" className="shrink-0 h-9 px-3 border border-white/10 rounded-lg text-white hover:bg-white/90 text-xs sm:text-sm">
          Start <ChevronRight size={14} />
        </Button>
      </div>
    </div>
  )
}

export default CardsSection