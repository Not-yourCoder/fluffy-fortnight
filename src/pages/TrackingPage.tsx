import Clock from '../components/tracking/clock/clock'
import SlideIn from '../components/wrappers/SlideIn'
import useWindowWidth from '../hooks/useWindowWidth'


const TrackingPage = () => {
    const windowWidth = useWindowWidth()
    return (
        <SlideIn>
            {windowWidth > 430 &&
                <p className='text-center m-4 bg-red-500 text-white font-medium rounded-sm'>For best experience, switch to mobile view.</p>
            }
            <Clock />
        </SlideIn>
    )
}

export default TrackingPage