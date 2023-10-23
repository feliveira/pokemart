function Hero() {
  return (
    <div className="w-[96%] max-w-[1200px] mt-8 mx-auto rounded-xl px-8 lg:px-40 py-16 lg:py-32 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-900">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between max-w-[1024px] mx-auto">
            <div className="text-center mx-auto">
                <h1 className="text-4xl xl:text-6xl text-white font-bold font-pixelated mb-8">Pokemart</h1>
                <p className="text-sm xl:text-base text-[#E5E5E5] font-bold">A qualidade que você conhece,<br/>agora no conforto da sua casa</p>
            </div>
        </div>
    </div>
  )
}

export default Hero