import { useState } from 'react';

import { Feature, Loading, Preview, Search, Title } from './components';
import { flushSync } from 'react-dom';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState('');

  return (
    <div className='App'>
      <Title />
      <Search setIsLoading={setIsLoading} setSearchResults={setSearchResults} />
      <Preview />
      <Feature />
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
