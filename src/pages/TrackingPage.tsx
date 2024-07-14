import Clock from '../components/tracking/clock/clock'
import useWindowWidth from '../hooks/useWindowWidth'


const TrackingPage = () => {
    const windowWidth = useWindowWidth()
    return (
        <div>
            {windowWidth > 430 &&
                <p className='text-center m-4 bg-red-500 text-white font-medium rounded-sm'>For best experience, switch to mobile view.</p>
            }
            <Clock />
        </div>
    )
}

export default TrackingPage