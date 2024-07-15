import MessageBox from '../../components/ui/MessageBox'
import SlideIn from '../../components/wrappers/SlideIn'
import { message1 } from '../../constants/data'
import { images } from '../../constants/images'


const OnboardingPageOne = () => {
    return (
        <SlideIn className='h-screen flex items-center justify-center' style={{ backgroundImage: `url(${images.obg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <MessageBox className="text-white mt-[400px]" message={message1} />
        </SlideIn>
    )
}

export default OnboardingPageOne
