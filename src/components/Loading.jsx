const Loading = ({ isLoading }) => {
  return (
    <div id='loading' className={isLoading ? 'active' : ''}>
      <h2 className='message'>Searching...</h2>
    </div>
  );
};

export default Loading;
