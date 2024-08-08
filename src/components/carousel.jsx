/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export default function Carousel({ children: PROYECTOS }) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? PROYECTOS.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === PROYECTOS.length - 1 ? 0 : curr + 1));

    return (
        <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {PROYECTOS}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-2">
                <button onClick={prev} className="p-2 rounded-full shadow bg-white/20 text-gray-800 hover:bg-white">
                    <p className="text-2xl text-stone-900 font-bold"><GrFormPrevious /></p>
                </button>
                <button onClick={next} className="p-2 rounded-full shadow bg-white/20 text-gray-800 hover:bg-white">
                    <p className="text-2xl text-stone-900 font-bold"><MdNavigateNext /></p>
                </button>
            </div>
        </div>
    );
}