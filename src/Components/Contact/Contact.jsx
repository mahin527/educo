import { Title } from "../Index"
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import locationIcon from '../../assets/location-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import whiteArrow from '../../assets/white-arrow.png';
import { useState } from "react"
import { Button } from '../Index'

function Contact() {
    const fieldClasses = 'block w-full bg-neutral-500 dark:bg-neutral-600 text-white font-medium px-3 md:px-5 py-3 md:py-4 border-none rounded-xl outline-none mt-2 md:mt-4 mb-4 md:mb-6 resize-none'
    const labelClasses = 'font-bold'

    // Web3 form functions
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "99d01b2b-ce20-435b-b5e0-458479fe9f64");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div name='contact' className="@container mx-auto px-5 py-4 lg:py-8 dark:bg-neutral-800 dark:text-white">
            <Title title='Contact Us' subTitle='Get in Touch' wrapperClasses='text-center' />

            <div className="py-6 lg:py-10 w-full flex flex-col md:flex-row gap-y-5 justify-between">
                <div className="basis-full md:basis-[48%] text-neutral-800 dark:text-white tracking-wider">
                    <h3 className="py-4 text-lg md:text-xl font-bold inline-flex gap-4 items-center justify-center">
                        Send us a message
                        <img src={msgIcon} alt="message icon" className="size-10 dark:bg-white dark:p-2 dark:rounded-lg" />
                    </h3>
                    <p className="font-semibold text-sm md:text-base lg:text-lg tracking-wider leading-6 xl:leading-7 text-justify pb-4">Please feel free to reach out to us. Don’t hesitate to contact us. Sometimes you need a little help from your friends. Or a tutor's support. Don’t worry… we’re here for you.</p>

                    <ul className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wider leading-6 xl:leading-7 font-medium text-justify space-y-3">
                        <li className="flex gap-3">
                            <img src={mailIcon} alt="Mail Icon" className='size-8 dark:bg-white dark:p-2 dark:rounded-lg' />
                            Example@gmail.com
                        </li>

                        <li className="flex gap-3">
                            <img src={phoneIcon} alt="Phone icon" className="size-8 dark:bg-white dark:p-2 dark:rounded-lg" />
                            +1 1234 3245 432
                        </li>

                        <li className="flex gap-3">
                            <img src={locationIcon} alt="" className="size-8 dark:bg-white dark:p-2 dark:rounded-lg" />
                            4400 Massachusetts Ave NW, Washington, PC 20067
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-[48%] text-neutral-800 dark:text-white tracking-wider">
                    <form onSubmit={onSubmit} className="text-xs sm:text-sm md:text-base tracking-wider leading-6 xl:leading-7 font-medium text-justify">
                        <label htmlFor="name" className={`${labelClasses}`}>Your Name</label>
                        <input id="name" name="name" type="text" placeholder="Enter your name " className={`${fieldClasses}`} required />
                        <label htmlFor="mobileNumber" className={`${labelClasses}`}>Mobile Number</label>
                        <input id="mobileNumber" name="phone" type="tel" placeholder="Enter your phone number " className={`${fieldClasses}`} required />
                        <label htmlFor="message" className={`${labelClasses}`}>Write your message here</label>
                        <textarea name="message" id="message" rows={6} placeholder="Enter your message here... " className={`${fieldClasses}`} required></textarea>
                        <Button type="submit" text='Submit Now' classes='bg-neutral-600 text-white hover:bg-neutral-700' imgName={whiteArrow} />
                    </form>
                    <span className="block pt-3 px-5 font-bold text-green-500">
                        {result}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact