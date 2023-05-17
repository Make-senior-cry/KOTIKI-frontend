import { useSearchParams } from 'react-router-dom';

const parseIntOrDefault = (stringValue, defaultValue) => {
  const parsed = parseInt(stringValue, 10);
  return Number.isNaN(parsed) ? defaultValue : parsed;
};

export default function usePaginationParams() {
  const [params, setParams] = useSearchParams();
  const skip = parseIntOrDefault(params.get('skip'), 0);
  const limit = parseIntOrDefault(params.get('limit'), 5);

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
