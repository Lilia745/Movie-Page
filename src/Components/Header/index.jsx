import React from 'react'

function Header() {
    const nav = [
        { id: 1, name: "Home" },
        { id: 1, name: "Movies" },
        { id: 1, name: "Series" },
        { id: 1, name: "Trending" },
        { id: 1, name: "Categories" },
    ]
    return (
        <header className="flex justify-between items-center w-full fixed p-[20px]">
            <div className="flex justify-center items-center">
                <div className="mr-[30px]">
                    <a href="" className="text">Stream </a><span className="text-[30px] text-[#c22a2a] font-extrabold">X</span>
                </div>
                <nav>
                    <ul className="flex justify-center items-center gap-[30px]">
                        {
                            nav.map((movie) => {
                                return (
                                    <li key={movie.id}>
                                        <a href="" className="text-[18px]">{movie.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className="flex justify-center items-center gap-[9px]">
            <form action="" className='relative '>
                <input type="text" placeholder='Search Movies,Series...' className="border rounded-2xl py-[10px] pl-[14px] pr-[100px]" />
                <div className="absolute top-[14px] right-[10px] text-gray cursor-pointer">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
            </form>
            <div className="w-[39px] h-[39px]">
                <img src="https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg" alt="" className="rounded-[50%] w-full h-full object-cover" />
            </div>
            </div>
        </header>
    )
}

export default Header