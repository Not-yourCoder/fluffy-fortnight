import MessageBox from '../../components/ui/MessageBox'
import { message2 } from '../../constants/data'
import { images } from '../../constants/images'


const OnboardingPageTwo = () => {
    return (
        <div className='h-screen flex items-center justify-center' style={{ backgroundImage: `url(${images.obg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <MessageBox className="text-white mt-[400px]" message={message2}/>
        </div>
    )
}

export default OnboardingPageTwo
