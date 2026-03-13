import { Title } from '../Index'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import whiteArrow from '../../assets/white-arrow.png';
import { Button } from '../Index';


function Campus() {
    const galleryImages = [
        {
            id: 1,
            alt: 'Gallery 1',
            img: gallery1
        },
        {
            id: 2,
            alt: 'Gallery 2',
            img: gallery2
        },
        {
            id: 3,
            alt: 'Gallery 3',
            img: gallery3
        },
        {
            id: 4,
            alt: 'Gallery 4',
            img: gallery4
        },
    ]
    return (
        <div name='campus' className='@container mx-auto px-5 dark:bg-neutral-800 dark:text-white'>
            <Title title='Gallery' subTitle='Campus Photos' wrapperClasses='text-center' />

            <div className='mt-6 md:mt-8 lg:mt-10 mb-8 lg:mb-12 w-full text-center'>
                <div className="grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                    {galleryImages.map((img) => (
                        <img key={img.id} src={img.img} alt={img.alt} className='rounded-xl' />
                    ))}
                </div>

                <Button text='See More Here' classes='bg-neutral-600 text-white hover:bg-neutral-700' imgName={whiteArrow} />

            </div>

        </div>
    )
}

export default Campus