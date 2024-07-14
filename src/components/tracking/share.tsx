import React from 'react'
import { useLocation } from 'react-router-dom';
import { IoShareSocialSharp } from "react-icons/io5";
import toast from 'react-hot-toast';
import { MdCopyAll } from "react-icons/md";


type Props = {
    speed: number
    setSpeed: React.Dispatch<React.SetStateAction<number>>
    time: number
    setTime: React.Dispatch<React.SetStateAction<number>>
}

const Share = ({ speed, setSpeed, time, setTime }: Props) => {
    const location = useLocation();
    React.useEffect(() => {
        const params = new URLSearchParams(location.search);
        const speedParam = params.get('speed');
        const timeParam = params.get("time")
        console.log(location.search);
        if (speedParam && timeParam) {
            setSpeed(parseInt(speedParam, 10));
            setTime(parseInt(timeParam, 10))
        }
    }, [location.search, setSpeed, setTime]);
    const handleShare = () => {
        const newUrl = `${window.location.origin}${window.location.pathname}?speed=${speed}&time=${time}`;
        navigator.clipboard.writeText(newUrl);
        toast.success('URL copied to clipboard', {
            icon: <MdCopyAll className='text-orange-500 text-xl' />
        });
    };
    return (
        <>
            <IoShareSocialSharp className='text-2xl' onClick={handleShare} />
        </>
    )
}

export default Share