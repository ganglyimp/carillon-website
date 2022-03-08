import { React, useState} from 'react';
import Timeline from './Timeline';

//import earliestCarillonneur from '../images/Earliest_Carillonneur_Picture.png';

import '../stylesheets/CarillonHistory.css';
import 'react-vertical-timeline-component/style.min.css';

function CarillonHistory() {
  const [currTime, setCurrTime] = useState(0);
  const dateList = ['1400', '1482', '1530', '1644', '1750', '1892', '1904', '1914', '1923', '1936', '1950', '1970'];

  return (
    <div className='CarillonHistory'>
      <br/> <br/>

      <Timeline time={currTime} setTime={setCurrTime} dates={dateList} />

      <div className='history-content'>
        { currTime === 0 &&
          <div>
            <h3>1400s</h3>
            <p>
              Since medieval times, swinging bells have been attached to towers or churches throughout Europe.
              These bells are attached to a pivot and were rang by pulling a rope. Bell towers were used to
              signal time or the start of church service as well as to alert townspeople of fires, storms,
              or wars.
            </p>
          </div>
        }
        { currTime === 1 &&
          <div>
            <h3>1482</h3>
            <p>
              The earliest record of bells being played using a crude keyboard is found in the archives of the 
              Antwerp Cathedral in Flanders, Belgium. The archives note that this instrument consisted of a small
              set of 8-10 bells connected to an "arrangement of ropes and sticks". 
            </p>
          </div>
        }
        { currTime === 2 &&
          <div>
            <h3>1530</h3>
            <p>
              Bell towers became increasingly popular in the Southern Netherlands and Flanders. Towns were competitive
              with each other, trying to install the most elaborate clock chimes in their clock towers. Revolving
              cylinders with movable pins were also used for automated bell playing.
            </p>
          </div>
        }
        { currTime === 3 &&
          <div>
            <h3>1644</h3>
            <p>
              It wasn't until 1644 that the first tuned carillon was created. This carillon was a collaboration
              between bellfounders Pieter Hemony and Fronçois Hemony and blind musician Jacob van Eyck. Eyck
              developed a technique to identify the five main undertones of the bell. The partial tones of a bell
              could be tuned to better harmonize with other bells by carefully adjusting the thickness of the bell.
              The carillon was installed in Zutphen's Wijnhuistoren tower. Initially, only 19 bells were commissioned,
              but the results were so impressive that the carillon was expanded to include 23 bells, or about two full
              octaves. Today, a bell tower is formally defined as a carillon if it has 23 or more bells. The Hemony
              brothers were the first to make chromatic carillons, making the carillon more viable as a musical 
              instrument. From 1646 to 1680, the Hemony brothers created around 50 carillons in the Low Countries.
            </p>
          </div>
        }
        { currTime === 4 &&
          <div>
            <h3>1750 — End of 19th Century</h3>
            <p>
              During the French Revolutionary Wars, many carillons were melted down for their copper or bronze. 
              The majority of carillons in Europe were dismantled and scrapped for metals for cannons. As pocket
              watches and home clocks became more commonplace, bell towers weren't necessary to keep time anymore.
              Music of the Romantic period featured more chromaticism, which did not pair well with the bells, tuned
              in meantone temperament. As different tuning techniques were being experimented with, carillons struggled
              to keep up. While it may be trivial to retune a piano or a violin, retuning the bells was a difficult
              and expensive process. Demand for carillons reduced greatly during this period, and the Hemonys' tuning
              techniques were soon forgotten. However, carillons never completely died out in Holland and Flanders.
              Many towns there still kept a municipal carillonneur on staff.
            </p>
          </div>
        }
        { currTime === 5 &&
          <div>
            <h3>1892</h3>
            <p>
              Jef Denyn was the municipal carillonneur in the city of Mechelen. During his tenure, he was able to
              make significant advancements to the carillon both artistically and functionally. Denyn developed a 
              tumbler rack system of transmission cables, which allowed for better control over dynamic variations,
              and made it easier to perform faster phrases and tremolos on the carillon. He also developed the 
              "Flemish style" of carillon playing, which involved using tremeloes to mask the lack of resonance in 
              treble bells.
            </p>
            <p>
              On August 1, 1892, Denyn began the first carillon concert series. Before, carillonneurs would play
              during busy market hours, providing a backing track to the rhythm of commerce. Denyn's weekly Monday
              night concerts brought carillons to the foreground. His concerts drew large crowds from out of town. 
              These concerts helped the carillon to be seen as a legitimate concert instrument and brought about the
              20th century revival of the instrument.
            </p>
          </div>
        }
        { currTime === 6 &&
          <div>
            <h3>1904</h3>
            <p>
              Instead of carillons, British bell towers were dominated by swinging bells and their unique style of
              change-ringing. Arthur Simpson was an English change ringer and clergyman. The poor condition of English
              bells inspired him to publish a series of articles on bell tuning in the 1890s. These articles caught the
              attention of John William Taylor, who was already attempting to replicate the Hemony brothers' lost tuning
              techniques. The two men collaborated to found the first tuned bells (with all five partials in tune) in
              over a century. They created what can be considered the first "modern" carillon. This carillon was a 40-bell
              instrument tuned in equal temperament. The instrument was installed at their works. Their rediscovery of
              lost bell tuning techniques would soon spark a revival in carillon building.
            </p>
          </div>
        }
        { currTime === 7 &&
          <div>
            <h3>1914</h3>
            <p>
              William Gorham Rice, an American politician and carillon enthusiast, published the book 
              <i>Carillons of Belgium and Holland</i>. This book was inspired by his trips to Belgium and conversations
              he had with Jef Denyn. The book romanticized carillons and the region. Rice's book resonated with the
              American public and was highly successful. Afterwards, Rice became an authority on carillons in North
              America. He would go on to write two more books on the subject, give 35 lectures in assorted cities, and 
              speak on radio programs.
            </p>
          </div>
        }
        { currTime === 8 &&
          <div>
            <h3>1922</h3>
            <p>
              William Gorham Rice was able to convince Herbert Hoover and John D. Rockefeller Jr. to provide financial
              support to establish a carillon school in Mechelen. Jef Denyn was appointed as its first director. The 
              Royal Carillon Carillon School "Jef Denyn" is the first and largest carillon school in the world.
            </p>
          </div>
        }
        { currTime === 9 &&
          <div>
            <h3>1922 — 1940</h3>
            <p>
              During the period of 1922 to 1940, 43 carillons were installed in the US and Canada. This expansion of
              carillons in North America can be attributed to William Gorham Rice's advocacy for the instrument and 
              the popularity of the books he wrote on the subject.
            </p>
          </div>
        }
        { currTime === 10 &&
          <div>
            <h3>1936</h3>
            <p>
              In 1936, the Guild of Carillonneurs in North America (GCNA) was founded in Ottawa, Canada. The GCNA existed
              to promote and standardize carillons in North America.
            </p>
          </div>
        }
        { currTime === 11 &&
          <div>
            <h3>1950s — 1960s</h3>
            <p>
              During this period, a distinct North American style of carillon music emerged from the University of Kansas.
              Ronald Barnes, the university carillonneur, began an extensive campaign to bring more talented composers to 
              the carillon. He was able to recruit several of his peers to help expand American carillon literature. Of note 
              is Roy Hamlin Johnson's <i>Summer Fanfares</i>, published in 1956. Johnson composed music that uniquely works 
              on the carillon, using octatonic scales that highlights the bells' minor third partials.
            </p>
          </div>
        }
        { currTime === 12 &&
          <div>
            <h3>1970s</h3>
            <p>
              In the 1970s, the World Carillon Federation was founded.
            </p>
          </div>
        }
      </div>
    </div>
  );
}

export default CarillonHistory;