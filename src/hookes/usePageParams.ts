import { useSearchParams } from "react-router-dom"

export const usePageParams = () => {

    const [params, setParams] = useSearchParams();

    const query = params.get('query') ?? '';
    const page = params.get('page') ?? '1';

    const updatePage = (currentPage) => {
        params.set('page', currentPage.toString());
        setParams(params);
    }

    const updateQuery = (value) => {
        params.set('query', value);
        params.set('page', '1');
        setParams(params);
    }

    return {page, query, updatePage, updateQuery};
}