import { React, useState} from 'react';
import '../stylesheets/CTInfo.css';

function CTInfo() {
  const [towerLocation, setTowerLocation] = useState(0);
  const towerSrc = [/*EXTERIOR*/ 'https://www.google.com/maps/embed?pb=!4v1647054515109!6m8!1m7!1sCAoSLEFGMVFpcFBpQ2NQQXdFVFZIek5HMVhfX0dqQXVNY3V2YWpzSklCVXc4bUJv!2m2!1d29.6487096!2d-82.3433469!3f1.5771482964415782!4f37.69256536192319!5f0.4000000000000002',
                    /*LOBBY*/ 'https://www.google.com/maps/embed?pb=!4v1643963782222!6m8!1m7!1sCAoSLEFGMVFpcE40REpUS0FRQnBURWkzNW5ZWEg3bWQtc0dsUms0ZE9NdVFrUTAz!2m2!1d29.64879174414177!2d-82.34330344945192!3f179.54688!4f0!5f0.7820865974627469',
                    /*10TH FLOOR*/ 'https://www.google.com/maps/embed?pb=!4v1647054434120!6m8!1m7!1sCAoSLEFGMVFpcFBPck9uY0NzMjFCZEoyWGlKbzg4SzVhMkc4QThtSWdlYjhnNG5Z!2m2!1d29.64880398209092!2d-82.34334401786327!3f39.32864772274894!4f-10.03371054964093!5f0.4000000000000002',
                    /*CONSOLE*/ 'https://www.google.com/maps/embed?pb=!4v1647054228799!6m8!1m7!1sCAoSLEFGMVFpcE1ya1A1ZVg2NGNqTHhzWmJvNFJTYm5fbUpsMXJ0WnlMbXdxTlA1!2m2!1d29.64878475102729!2d-82.34323907643557!3f275.41684311465946!4f-9.665880027565876!5f0.7820865974627469',
                    /*BELFRY*/ 'https://www.google.com/maps/embed?pb=!4v1647054336654!6m8!1m7!1sCAoSLEFGMVFpcE1iR1ZoVGM5Z1FUT1ZzV2hRZkdqNHdMWGtHdzUtcktsZ2Z2VmJI!2m2!1d29.64878358550817!2d-82.34327360987663!3f59.23381880905013!4f28.510102852611894!5f0.4000000000000002'];
        
  return (
    <div className='CTInfo'>
      <br /> <br />
      <div className='CT-streetview'>
        <iframe 
          title='Century Tower Lobby'
          src={towerSrc[towerLocation]} 
          allowFullScreen='' 
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'>
        </iframe>
      </div>

      <div className='CT-buttons'>
        <button className={towerLocation === 0 ? 'active-butt' : ''} type='button' onClick={() => setTowerLocation(0)}>Exterior</button>
        <button className={towerLocation === 1 ? 'active-butt' : ''} type='button' onClick={() => setTowerLocation(1)}>Lobby</button>
        <button className={towerLocation === 2 ? 'active-butt' : ''} type='button' onClick={() => setTowerLocation(2)}>10th Floor</button>
        <button className={towerLocation === 3 ? 'active-butt' : ''} type='button' onClick={() => setTowerLocation(3)}>Console Room</button>
        <button className={towerLocation === 4 ? 'active-butt' : ''} type='button' onClick={() => setTowerLocation(4)}>Belfry</button>
      </div>

      <div className='CT-content'>
        { towerLocation === 0 &&
          /* EXTERIOR */
          <div className='CT-item'>
            <p>
              Century Tower was commissioned in 1953 to commemorate the 100-year anniversary of the 
              founding of the East Florida Seminary of Ocala. This seminary moved to Gainesville 
              during the Civil War and eventually became the University of Florida. The 157 foot tall 
              (13 stories) tower also served as a memorial to students who died during World Wars I 
              and II. The carillon itself was purchased for about $200,000 from several generations of 
              student activities funds and unanimously endorsed by the Student Senate. 
            </p>
          </div>
        }
        { towerLocation === 1 &&
          /* LOBBY */
          <div className='CT-item'>
            <p>
              The lobby contains a tone-bar practice console and the old clavier made for the original 
              49-bell carillon. An additional electronic practice clavier is located in the University 
              Auditorium. 
            </p>
          </div>
        }
        { towerLocation === 2 &&
          /* 10TH FLOOR */
          <div className='CT-item'>
            <p>
              University of Florida students enrolled in the university’s carillon studio play twice-daily 
              recitals in between class periods. The daily recital series usually last around 15 minutes 
              and are only active during the Fall and Spring semesters. The studio as a whole will also 
              host hour-long monthly recitals, usually scheduled near the end of the month or during special 
              holidays. 
            </p>
          </div>
        }
        { towerLocation === 3 &&
          /* CONSOLE ROOM */
          <div className='CT-item'>
            <p>
              There are a total of 193 steps to get to the console room, located on the 11 ½ floor. The bells 
              are controlled by a clavier made of batons and foot pedals. Carillonneurs use both their hands 
              and feet to activate the bells. Each baton is directly connected to a single bell. In total, 
              the clavier spans approximately five octaves, with only the lowest C-sharp omitted.
            </p>
          </div>
        }
        { towerLocation === 4 &&
          /* BELFRY */
          <div className='CT-item'>
            <p>
              Century Tower originally had an automated electric console that played “Swanee River” every 15 
              minutes over large speakers. In 1979, the electric console was replaced by a 49-bell traditional 
              carillon. In 2003, the instrument was renovated and expanded to include 61 finely-tuned, bronze bells. 
              Both the bells and the playing mechanism came from the Royal Eijsbouts Bell Foundry of Asten, Netherlands. 
              The largest bell, known as the bourdon, is five feet tall, five feet wide, and weighs 3.5 tons, tuned to 
              a low B-flat. The bells in the carillon will never need to be retuned. 
            </p>
          </div>
        }
      </div>
    </div>
  );
}

export default CTInfo;

