function Contact(){
    return <div>
        <h1 className="text-4xl  text-white">Contact</h1>
        <div className=" my-8 w-full lg:w-[440px]">
        <img className=" rounded-2xl" src="/public/phone.jpeg" />
        </div>
        <div className="my-8 text-white">
            <h1 className="text-4xl ">Email 📬</h1>
            <p className="italic"><a href="mailto:sougataghar47@gmail.com">sougataghar47@gmail.com</a></p>
        </div>
        <div className="text-white">
            <h1 className="text-4xl ">Phone Number 📲</h1>
            <p  className="italic"><a href="tel:+918777859897">+91 8777859897</a></p>
        </div>
    </div>
}
export default Contact;