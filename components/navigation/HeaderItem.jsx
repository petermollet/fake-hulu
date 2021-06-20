
const HeaderItem = ({ Icon, title }) => {
    return (
        <div className="flex flex-col justify-between items-center group 
        cursor-pointer w-12 sm:w-20 hover:text-white active:text-green-500">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className='tracking-widest opacity-0 group-hover:opacity-100 
            transform ease duration-700'>
                {title}
            </p>
        </div>
    )
}

export default HeaderItem
