import { useState } from 'react';

import { Feature, Loading, Preview, Search, Title } from './components';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState({ info: {}, records: [] });
  const [featuredResult, setFeaturedResult] = useState(null);

  return (
    <>
      <div className='App'>
        <Title />
        <Search
          setIsLoading={setIsLoading}
          setSearchResults={setSearchResults}
        />
        <Preview
          searchResults={searchResults}
          setIsLoading={setIsLoading}
          setSearchResults={setSearchResults}
          setFeaturedResult={setFeaturedResult}
        />
        <Feature
          featuredResult={featuredResult}
          setIsLoading={setIsLoading}
          setSearchResults={setSearchResults}
        />
      </div>
      <Loading isLoading={isLoading} />
    </>
  );
}

export default App;
