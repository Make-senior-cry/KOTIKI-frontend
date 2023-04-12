import { useSearchParams } from 'react-router-dom';

export default function usePaginationParams() {
  const [params, setParams] = useSearchParams();
  const skip = parseInt(params.get('skip'), 10);
  const limit = parseInt(params.get('limit'), 10);

  function navigateNextPage() {
    const updatedParams = new URLSearchParams(params);
    updatedParams.set('skip', skip + limit);
    setParams(updatedParams);
  }

  function navigatePrevPage() {
    const updatedParams = new URLSearchParams(params);
    const newSkip = Math.max(skip - limit, 0);
    updatedParams.set('skip', newSkip);
    setParams(updatedParams);
  }

  return {
    skip, limit, navigateNextPage, navigatePrevPage,
  };
}
