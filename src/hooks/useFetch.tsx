import { useQuery, QueryFunctionContext } from 'react-query';

type Props = {
    url: string;
    options?: RequestInit;
};

const fetchData = async ({ queryKey }: QueryFunctionContext<[string, string, RequestInit | undefined]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_key, url, options] = queryKey;
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const useFetch = ({ url, options }: Props) => {
    const { data, isLoading, error, refetch } = useQuery(['fetchData', url, options], fetchData);

    return { data, isLoading, error, refetch };
};

export default useFetch;
