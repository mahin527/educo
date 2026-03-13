function Button({ text, classes, imgName }) {
    return (
        <button className={`${classes} font-semibold lg:font-bold text-xs sm:text-sm md:text-base px-4 py-3 sm:px-6 md:px-8 md:py-4 rounded-full inline-flex items-center justify-center gap-2 md:gap-3 cursor-pointer transition-colors duration-400`}>
            {text} <img src={imgName} alt={imgName} className='w-4 md:w-6' />
        </button>
    )
}

export default Button