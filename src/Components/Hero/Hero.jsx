import heroImg from '../../assets/hero.png';
import darkArrow from '../../assets/dark-arrow.png';
import { Button } from '../Index';

function Hero() {
    return (
        <div name='hero'
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(99, 99, 99, 0.5), rgba(4, 5, 8, 0.6)), url(${heroImg})`
            }}
        >
            <div className='mx-auto px-5 text-center max-w-200'>
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
                    Empower Your Future with Quality Education
                </h1>
                <p className='max-w-175 mt-8 mb-6 mx-auto font-semibold text-sm md:text-base lg:text-lg tracking-widest leading-6 lg:leading-7'>
                    Your journey to excellence starts here. Discover top-rated programs and flexible learning paths tailored for you. Master the skills that matter
                </p>
                <Button text='Get Started Today' classes='bg-white text-neutral-600 hover:bg-neutral-300' imgName={darkArrow} />
            </div>
        </div>
    );
}

export default Hero;