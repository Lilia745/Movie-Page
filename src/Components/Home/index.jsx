import React from 'react'
import Button from '../Button'
import MovieList from '../MovieList'

function Home() {
    return (
        <div className="img">
            <div className="w-full h-[100vh] bg-[#00000071] flex justify-center items-center" >
                <div className="flex justify-center items-center flex-col">
                    <h1 className='title'>SPIDER-MAN</h1>
                    <h4 className="home-text ">No Way Home </h4>
                    <p className="text-gray-light">When a spell goes wrong, dangerous foes from other</p>
                    <p className="text-gray-light">worlds start to appear, forcing Peter to discover what it</p>
                    <p className="text-gray-light">truly means to be Spider-Man.</p>
                    <div className="mt-[30px] flex justify-center items-center">
                        <Button text="Watch Now"/>
                        <Button text="More Info" bg="rgba(255, 255, 255, 0.1)" color="white"/>
                    </div>
                </div>
            </div>
            <MovieList/>
        </div>

    )
}

export default Home