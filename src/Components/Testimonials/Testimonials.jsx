import { Title } from "../Index"
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import User1 from '../../assets/user-1.png'
import User2 from '../../assets/user-2.png'
import User3 from '../../assets/user-3.png'
import User4 from '../../assets/user-4.png'
import { useState, useRef } from "react"


function Testimonials() {
    const arrowIconClasse = 'absolute top-1/2 right-0 -translate-y-1/2 p-3 md:p-4 w-8 md:w-12 rounded-full cursor-pointer bg-neutral-600 hover:bg-neutral-700 transition-colors duration-300 z-4 shadow-sm shadow-neutral-200 dark:shadow-neutral-400'

    const testimonialsData = [
        {
            id: 1,
            name: 'Jamie Thornton',
            location: 'North Carolina, Wesleyan',
            img: User1,
            message: 'I thrive at Thornton because all the teachers are really encouraging, all the people are nice and all of the lunches are really really yummy.  I love PE, singing, and English, and I’m part of running club and chamber choir.'
        },
        {
            id: 2,
            name: 'Valentina Broggi',
            location: 'New York, USA',
            img: User2,
            message: 'Wesleyan means diversity to me.  Coming from Argentina, the opportunity to study what I love and connect with people from different cultures was empowering. I met amazing people who helped me in my academic and personal journey.'
        },
        {
            id: 3,
            name: 'Sheila Johnson ',
            location: 'Lone Star, California',
            img: User3,
            message: 'Signing up for the Student Success Institute was the best thing for me after enrolling at LSC. The program lifted the weight of college stress from my shoulders. I could breathe with ease knowing someone cared about me and my dreams.'
        },
        {
            id: 4,
            name: 'Duda Formoso ',
            location: 'Ithaca, Miami',
            img: User4,
            message: 'Studying at IC was a big change from public school in Brazil, but I felt supported from day one.  My professors checked in on me personally, showed me campus resources, and helped me achieve Dean’s List honors. '
        }

    ]

    const slider = useRef()
    const [tx, setTx] = useState(0);

    const slideForward = () => {
        let newTx = tx;
        if (tx > -75) {
            newTx -= 25;
        }
        setTx(newTx);
        slider.current.style.transform = `translateX(${newTx}%)`;
    }

    const slideBackward = () => {
        let newTx = tx;
        if (tx < 0) {
            newTx += 25;
        }
        setTx(newTx);
        slider.current.style.transform = `translateX(${newTx}%)`;
    }


    return (
        <div name='testimonials' className="@container mx-auto px-5 dark:bg-neutral-800 dark:text-white">
            <Title title='Real Stories from Graduates' subTitle='Discover how students transform their future' wrapperClasses='text-center' />

            <div className="relative mx-auto">
                <img src={nextIcon} alt="Next" className={`${arrowIconClasse}`} onClick={slideForward} />
                <img src={backIcon} alt="Back" className={`${arrowIconClasse} right-auto left-0`} onClick={slideBackward} />
                <div className="slider overflow-hidden">
                    <ul ref={slider} className="flex w-[400%] lg:w-[200%] overflow-x-hidden transition-all duration-500 transform">
                        {testimonialsData.map((testimonialData) => (
                            <li key={testimonialData.id} className="w-1/2 px-10 md:px-20 my-4 md:my-6 py-6">
                                <div className="min-h-80 lg:min-h-100 slide shadow-lg/30 shadow-neutral-600 dark:shadow-neutral-200 hover:shadow-lg/50 transition-shadow duration-400 rounded-xl py-8 md:py-12 px-6 md:px-10 text-neutral-800 dark:text-white">
                                    <div className="pb-3 flex flex-col items-center justify-center tracking-widest">
                                        <img src={testimonialData.img} alt={testimonialData.name} className="w-12 md:w-18 rounded-full border-2 border-neutral-800 dark:border-white" />
                                        <div className="pt-2">
                                            <h3 className="text-center text-base md:text-lg lg:text-xl font-bold">
                                                {testimonialData.name}
                                            </h3>
                                            <span className="text-center text-xs md:text-sm font-semibold">
                                                {testimonialData.location}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-wider leading-6 xl:leading-7 text-justify">
                                        {testimonialData.message}
                                    </p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimonials