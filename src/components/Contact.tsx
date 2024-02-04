const Contact = () => {
    return (
        <div className="w-[70%] mx-auto h-auto">
            <h1 className="uppercase tracking-widest font-semibold text-4xl text-slate-100 text-center border-b-2">contact</h1>
            <br />
            <p className="text-slate-100 font-semibold font-lg">These are the technologies I've worked with</p>
            <br />
            <div className="flex justify-center">
                <form className="flex flex-col w-full gap-4 lg:w-6/12" action="https://getform.io/f/8904d217-2f6a-4311-a35c-3d56ae444fe9" method="POST">
                    <input className="bg-transparent border-2 p-3 rounded-xl text-slate-100" type="text" name="name" placeholder='Enter your name'/>
                    <input className="bg-transparent border-2 p-3 rounded-xl text-slate-100" type="text" name="email" placeholder='Enter your email'/>
                    <textarea className="bg-transparent border-2 p-3 rounded-xl text-slate-100" name="message" placeholder="Enter your message" id="input" cols={30} rows={10}></textarea>
                    <button className="bg-transparent border-2 p-3 rounded-xl text-slate-100 w-full font-black text-lg mx-auto md:w-6/12">Let's talk</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
