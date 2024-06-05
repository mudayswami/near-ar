const { default: Home } = require("@/app/page")

const Home_page = () => {
    return (<div className="flex justify-center items-center my-12 md:my-48">
    <video autoPlay="autoPlay" loop="loop" muted playsInline className="w-3/4 z-0 rounded-3xl">
        <source src="/mov1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>)
}

export default Home_page;