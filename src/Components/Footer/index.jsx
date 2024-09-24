import React from 'react'

function Footer() {
    return (
        <footer className="w-full p-[10px] bg-black flex justify-between items-center border">
            <div className="flex justify-center items-center gap-[40px]">
                <h4 className="text-[16px] text-gray">© 2023 STREAM X. All Rights Reserved.</h4>
                <p className="text-[16px] text-gray">Terms Of Use </p>
                <p className="text-[16px] text-gray">Privacy Policy</p>
                <p className="text-[16px] text-gray">FAQ</p>
            </div>
            <div className="mr-[30px]">
                <a href="" className="text">STREAM </a><span className="text-[30px] text-[#c22a2a] font-extrabold">X</span>
            </div>
        </footer>
    )
}

export default Footer