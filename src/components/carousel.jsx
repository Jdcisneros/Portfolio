export default function Carousel({children: PROYECTOS}){
    return (
        <div className="overflow-hidden relative">
            <div className="flex">{PROYECTOS}</div>
            <div>
                <button>
                    next
                </button>
                <button>
                    prev
                </button>
            </div>
        </div>
    )
}