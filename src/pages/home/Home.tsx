import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'
import { images } from '../../constants/images';
import { colors } from '../../constants/color';
import { logOut } from '../../utils/helpers';
import SlideIn from '../../components/wrappers/SlideIn';


const Home = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    await logOut(navigate);
  };


  if (!auth.currentUser) {
    navigate("/login", {
      replace: true
    })
    return null
  }
  return (
    <SlideIn className='h-screen relative' style={{ backgroundImage: `url(${images.obg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='w-full bg-white  absolute bottom-0 rounded-t-[20px]'>
        <div className='flex flex-col items-center m-6'>
          <img src={images.loginSuccess} className='w-[200px] mx-auto my-6' />
          <p className='text-center font-semibold text-2xl'>Login Successful</p>
          <button onClick={() => navigate("/tracking")} className="p-4 w-80 my-6 rounded-3xl text-sm text-white" style={{ background: colors.orange }}>
            Go to Tracking Screen
          </button>
          <p onClick={handleLogout} className='text-gray-400 mb-12 text-sm font-medium'>Logout</p>
        </div>
      </div>
    </SlideIn>
  )
}

export default Home