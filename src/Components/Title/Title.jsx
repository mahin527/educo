
function Title({title, subTitle, wrapperClasses}) {
  const titleDivClasses = '@container mx-auto pt-12 pb-4'
  const titleParaClasses = 'text-neutral-600 dark:text-white text-sm md:text-base lg:text-lg font-semibold tracking-wide'
  const titleHeaderClasses = 'text-neutral-800 dark:text-white text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider'

    return (
    <div className={`${titleDivClasses} ${wrapperClasses}`}>
        <p className={`${titleParaClasses}`}>{title}</p>
        <h2 className={`${titleHeaderClasses}`}>{subTitle}</h2>
    </div>
  )
}

export default Title