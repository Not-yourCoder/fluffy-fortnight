import { Watch } from 'react-loader-spinner';
import { colors } from '../../constants/color';

const Loader = () => {
    return (
        <div className='flex flex-col items-center justify-center border-4 h-screen'>
            <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color={colors.orange}
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=" w-fit mx-auto"
            />
            <p className='text-lg font-medium text-orange-500 mt-4'>Loading...</p>
        </div>
    );
}

export default Loader;
