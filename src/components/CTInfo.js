import '../stylesheets/CTInfo.css';

function CTInfo() {
  return (
    <div className='CTInfo'>
      <iframe 
        title='Century Tower Lobby'
        src="https://www.google.com/maps/embed?pb=!4v1643963782222!6m8!1m7!1sCAoSLEFGMVFpcE40REpUS0FRQnBURWkzNW5ZWEg3bWQtc0dsUms0ZE9NdVFrUTAz!2m2!1d29.64879174414177!2d-82.34330344945192!3f179.54688!4f0!5f0.7820865974627469" 
        style={{border: '0', width: '100vw', height: '500px'}} 
        allowfullscreen="" 
        loading="lazy">
      </iframe>

      {
        /*
          TO DO:
          Buttons to quick jump to key locations (lobby, console, belfry, exterior)
          Background history below (link to active locations?)
        */
      }
    </div>
  );
}

export default CTInfo;

