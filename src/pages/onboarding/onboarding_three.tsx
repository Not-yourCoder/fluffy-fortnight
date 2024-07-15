import MessageBox from '../../components/ui/MessageBox'
import SlideIn from '../../components/wrappers/SlideIn'
import { message3 } from '../../constants/data'
import { images } from '../../constants/images'


const OnboardingPageThree = () => {
    return (
        <SlideIn className='h-screen flex items-center justify-center' style={{ backgroundImage: `url(${images.obg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <MessageBox className="text-white mt-[400px]" message={message3} />
        </SlideIn>
    )
}

export default OnboardingPageThree
