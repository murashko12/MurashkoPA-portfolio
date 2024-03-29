import { useState } from "react"

const Contact = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    return (
        <div id="contact" className="w-[70%] max-w-[1000px]  mx-auto h-auto">
            <h1 className="uppercase tracking-widest font-semibold text-4xl text-slate-100 text-center border-b-2">contact</h1>
            <br />
            <p className="text-justify text-slate-100 font-semibold text-lg">Submit the form below to get touch with me</p>
            <br />
            <div className="flex justify-center">
                <form className="flex flex-col w-full gap-4 lg:w-6/12" action="https://getform.io/f/8904d217-2f6a-4311-a35c-3d56ae444fe9" method="POST">
                    <input 
                        className="bg-transparent border-2 p-3 rounded-xl text-slate-100" 
                        type="text" 
                        name="name" 
                        placeholder='Enter your name'
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        className="bg-transparent border-2 p-3 rounded-xl text-slate-100" 
                        type="text" 
                        name="email" 
                        placeholder='Enter your email'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <textarea 
                        className="bg-transparent border-2 p-3 rounded-xl text-slate-100" 
                        name="message" 
                        placeholder="Enter your message" 
                        id="input" 
                        cols={30} 
                        rows={10}
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    />
                    <button 
                        className="text-[#288499] bg-slate-100 p-3 rounded-xl w-full font-black text-lg mx-auto md:w-6/12"
                        disabled={!name || !email || !message}
                    >
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
