import { fetchQueryResultsFromTermAndValue } from '../api';

const Searchable = ({
  setIsLoading,
  searchTerm,
  searchValue,
  setSearchResults,
}) => {
  return (
    <span className='content'>
      <a
        href='#'
        onClick={async (event) => {
          event.preventDefault();
          setIsLoading(true);
          try {
            const result = await fetchQueryResultsFromTermAndValue(
              searchTerm,
              searchValue
            );
            setSearchResults(result);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {searchValue}
      </a>
    </span>
  );
};

export default Searchable;
