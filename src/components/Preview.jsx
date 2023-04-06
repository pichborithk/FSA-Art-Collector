import { fetchQueryResultsFromURL } from '../api';

const Preview = ({
  searchResults,
  setIsLoading,
  setSearchResults,
  setFeaturedResult,
}) => {
  async function fetchPage(pageUrl) {
    setIsLoading(true);

    try {
      const results = await fetchQueryResultsFromURL(pageUrl);
      console.log(results);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <aside id='preview'>
      <header className='pagination'>
        {/* This button should be disabled if nothing is set in info.prev, and should call fetchPage with info.prev when clicked */}
        <button
          disabled={!searchResults.info.prev && true}
          className='previous'
          onClick={() => fetchPage(searchResults.info.prev)}
        >
          Previous
        </button>
        {/* This button should be disabled if nothing is set in info.next, and should call fetchPage with info.next when clicked */}
        <button
          disabled={!searchResults.info.next && true}
          className='next'
          onClick={() => fetchPage(searchResults.info.next)}
        >
          Next
        </button>
      </header>
      <section className='results'>
        {searchResults.records.map((record, index) => {
          return (
            <div
              key={index}
              className='object-preview'
              onClick={(event) => {
                event.preventDefault();
                setFeaturedResult(record);
              }}
            >
              {record.primaryimageurl && (
                <img src={record.primaryimageurl} alt={record.description} />
              )}
              {record.title ? <h3>{record.title}</h3> : <h3>MISSING INFO</h3>}
            </div>
          );
        })}
        {/* Here we should map over the records, and render something like this for each one:
        
        <div  
          key={ index }
          className="object-preview"
          onClick={(event) => {
            // prevent the default
            // set the featured result to be this record, using setFeaturedResult
          }}>
          { 
            // if the record.primaryimageurl exists, show this: <img src={ record.primaryimageurl } alt={ record.description } />, otherwise show nothing 
          }
          {
            // if the record.title exists, add this: <h3>{ record.title }</h3>, otherwise show this: <h3>MISSING INFO</h3>
          }
        </div>
      */}
      </section>
    </aside>
  );
};

export default Preview;
