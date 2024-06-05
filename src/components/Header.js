import Image from "next/image";

const Header = () => {
    return (<div className="flex items-center py-3 md:py-1 lg:py-10 px-4 md:px-2 lg:px-12 md:justify-start ">
        <img src="/logo.png" width={100} height={100} alt="logo"></img>
        <h1 className="text-4xl font-semibold">NEAR</h1>
    </div>)
}


export default Header