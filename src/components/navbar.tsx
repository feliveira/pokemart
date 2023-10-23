// import CartButton from "./cart-button"

function Navbar( ) {
  return (
    <nav className="bg-white w-full px-8 lg:px-40 py-4  sticky top-0 z-50 shadow-xl">
        <div className="w-full max-w-[1200px] flex items-center justify-between mx-auto">
            <p className="text-[#E6B13D] font-extrabold text-lg font-pixelated">Pokemart</p>
            {/* <CartButton /> */}
        </div>
    </nav>
    )
}

export default Navbar