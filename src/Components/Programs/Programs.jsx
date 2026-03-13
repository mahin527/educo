import { Title } from '../Index'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program4 from '../../assets/program-4.png'
import program5 from '../../assets/program-5.png'
import program6 from '../../assets/program-6.png'

import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'
import programIcon4 from '../../assets/program-icon-4.png'
import programIcon5 from '../../assets/program-icon-5.png'
import programIcon6 from '../../assets/program-icon-6.png'


function Programs() {

    const programData = [
        { img: program1, icon: programIcon1, text: "Undergraduate Program" },
        { img: program2, icon: programIcon2, text: "Professional Certification" },
        { img: program3, icon: programIcon3, text: "Post Graduation" },
        { img: program4, icon: programIcon4, text: "Graduation Degree" },
        { img: program5, icon: programIcon5, text: "Master Degree" },
        { img: program6, icon: programIcon6, text: "Executive Education" }
    ];

    const programsClasses = '@container mx-auto px-5 mt-6 md:mt-8 lg:mt-10 pb-12 md:pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8'
    const programClasses = 'relative'
    const programsImgClasses = 'w-full rounded-xl block'
    const captionClasses = 'absolute top-0 bottom-0 left-0 right-0 rounded-xl bg-[linear-gradient(to_right,rgba(99,99,99,0.5),rgba(4,5,8,0.6))] flex items-center justify-center flex-col text-white font-semibold cursor-pointer opacity-0 pt-[30%] hover:opacity-100 hover:pt-0 transition-all duration-500'
    const captionImgClasses = 'w-15 mt-8'
    return (
        <div name='program' className='dark:bg-neutral-800 dark:text-white py-8 lg:py-10'>
            <Title title='What We Offer' subTitle='Our Programs' wrapperClasses='text-center' />
            <div className={programsClasses}>
                {programData.map((item, index) => (
                    <div key={index} className={programClasses}>
                        <img src={item.img} alt={item.text} className={programsImgClasses} />
                        <div className={captionClasses}>
                            <img src={item.icon} alt="icon" className={captionImgClasses} />
                            <p className='pt-1 lg:pt-2 font-bold tracking-wider text-base lg:text-xl'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs