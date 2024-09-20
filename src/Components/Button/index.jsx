import React from 'react'

function Button(props) {
    return (
        <div className='relative flex justify-center items-center'>
            <div className="text-[20px] cursor-pointer absolute bottom-[7px] left-[20px]">
                <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <button className="bg-[rgba(255,255,255,0.99)] mr-[20px] py-[10px] pr-[30px] pl-[60px] rounded-2xl text-[20px] border" style={{backgroundColor: props.bg, color:props.color}}>{props.text}</button>
        </div>
    )
}

export default Button