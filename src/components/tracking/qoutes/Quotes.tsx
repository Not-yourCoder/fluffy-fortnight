import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { Quote } from './quote.types';
import { LineWave } from 'react-loader-spinner';
import { colors } from '../../../constants/color';


const Quotes = () => {
    const [url] = React.useState("https://famous-quotes4.p.rapidapi.com/random?category=all&count=2")

    const options: RequestInit = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2c293c8850mshc3191b83972276ep1baaf7jsnee0d29c864df',
            'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
        }
    };
    const { data, isLoading, error, refetch } = useFetch({ url, options })

    React.useEffect(() => {
        const interval = setInterval(() => {
            refetch(); 
        }, 5000);

        return () => clearInterval(interval);
    }, [refetch]);
    if (isLoading) {
        return <LineWave
            visible={true}
            height="100"
            width="100"
            color={colors.orange}
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass="m-4"
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
        />;
    }

    if (error) {
        return <div className='text-red-600 font-medium text-lg m-4'>Failed to load quotes</div>;
    }
    return (
        <div className='border absolute  bg-white bottom-10 rounded-md mx-4 p-2 text-sm'>{data.slice(1).map((quote: Quote) => (
            <div key={quote.id} >
                <div >{quote.text}</div>
                <div className='flex justify-between mt-4'>
                    <div className='bg-green-400 px-2 rounded-full'>{quote.category}</div>
                    <div className='font-light text-right'>-{quote.author}</div>
                </div>
            </div>
        ))
        }</div>
    )
}

export default Quotes