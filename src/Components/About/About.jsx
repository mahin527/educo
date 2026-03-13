import aboutImg from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'
import { Title } from '../Index'

function About({ setPlayState }) {
    const aboutClasses = ''
    const aboutLeftClasses = ''
    const aboutRightClasses = ''

    return (
        <div name='about' className="@container mx-auto px-5 py-8 flex flex-col md:flex-row md:gap-8 items-center justify-between dark:bg-neutral-800 dark:text-white">
            <div className="basis-[40%] md:basis-full order-2 md:order-1 relative">
                <img src={aboutImg} alt="About Image" className='w-full rounded-xl' />
                <img src={playIcon} alt="Play Icon" onClick={() => setPlayState(true)} className='w-15 absolute inset-1/2 place-self-center cursor-pointer animate-pulse' />

            </div>
            <div className="basis-[56%] md:basis-full order-1 md:order-2 pb-8 md:pb-0">
                <div>
                    <Title title='About Our Institute' subTitle='Transforming Potential into Excellence' wrapperClasses='text-center md:text-left' />
                </div>

                <div className='space-y-2 text-xs sm:text-sm md:text-base lg:text-lg tracking-wider leading-6 xl:leading-7 font-medium text-justify'>
                    <p>
                        Embark on a transformative educational journey with our university's comprehensive academic programs. Our state-of-the-art curriculum is designed to provide students with the knowledge, skills, and experiences needed to excel in the dynamic field of modern education.
                    </p>
                    <p>
                        With a focus on innovation, research, and hands-on learning, we empower our students to become critical thinkers and global problem solvers. Our distinguished faculty members are dedicated mentors who guide you through every step of your academic and professional development.
                    </p>
                    <p>
                        Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and make a meaningful impact in the world of education.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About