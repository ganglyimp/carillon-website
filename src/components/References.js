import '../stylesheets/References.css';

import CTSunset from '../images/EZ_20130314_UF_Century_Tower_0010.jpg';
import CTBrick from '../images/Century_Tower_L9A8874.jpg';
import vanEyckHemony from '../images/Jacob_van_Eyck_met_de_Hemony_broers.jpg';

function References() {
  const imgInfo = [ {
                      imgSrc: vanEyckHemony,
                      imgLink: 'https://commons.wikimedia.org/wiki/File:Van_Eyck_and_Hemony_Brothers_1875_Drawing.png',
                      imgAlt: 'Hemony Brothers with van Eyck'
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Die_Gartenlaube_%281873%29_b_101.jpg',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:Die_Gartenlaube_(1873)_b_101.jpg',
                      imgAlt: 'Die Gartenlaube (1873)'
                    },
                    { 
                      imgSrc: CTSunset,
                      imgLink: 'https://ufphotography.photoshelter.com/search/result/I0000XL0.U7iT5A8?terms=&',
                      imgAlt: 'Century Tower at Sunset'
                    },
                    {
                      imgSrc: CTBrick,
                      imgLink: 'https://ufphotography.photoshelter.com/search/result/I0000L_3MXQQsdtE?terms=century&',
                      imgAlt: 'Century Tower from Marston'
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Antwerp_Cathedral_SAAM-1962.13.8_1.jpg',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:Antwerp_Cathedral_SAAM-1962.13.8_1.jpg',
                      imgAlt: 'Antwerp Cathedral Painting'
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Bruges_Belgium_Carillon-01.jpg',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:Bruges_Belgium_Carillon-01.jpg',
                      imgAlt: 'Bruges Belgium Carillon Drum'
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Die_Gartenlaube_%281869%29_b_413.jpg',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:Die_Gartenlaube_%281869%29_b_413.jpg',
                      imgAlt: 'Die Gartenlaube (1869)'
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/St_Rombouts_Cathedral_from_the_Church_of_Our_Lady_across_the_Dijle_01.JPG',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:St_Rombouts_Cathedral_from_the_Church_of_Our_Lady_across_the_Dijle_01.JPG',
                      imgAlt: 'St. Rombouts Cathedral'
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Taylor%27s_Bell_Foundry%2C_Freehold_Street%2C_Loughborough_-_geograph.org.uk_-_2736850.jpg',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:Taylor%27s_Bell_Foundry%2C_Freehold_Street%2C_Loughborough_-_geograph.org.uk_-_2736850.jpg',
                      imgAlt: 'Taylor Bell Foundry'
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/William_Gorham_Rice-1910.jpg',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:William_Gorham_Rice-1910.jpg',
                      imgAlt: 'William Gorham Rice'
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Koninklijke_Beiaardschool_Jef_Denyn_Mechelen_20-3-2018.jpg',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:Koninklijke_Beiaardschool_Jef_Denyn_Mechelen_20-3-2018.jpg',
                      imgAlt: 'Koninklijke Beiaardschool'
                    },
                    {
                      imgSrc: 'https://www.gcna.org/resources/Pictures/congress-1936-Ottawa.jpg',
                      imgLink: 'https://www.gcna.org/congresses',
                      imgAlt: 'GCNA 1936 Congress',
                    },
                    {
                      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/KUCampanileDec2007.jpg',
                      imgLink: 'https://commons.wikimedia.org/wiki/File:KUCampanileDec2007.jpg',
                      imgAlt: 'KU Campanile'
                    }
                  ]

  return (
    <div className='References'>
      <div className='ref-text-citations'>
        <div className='ref-text-col'>
          <h1>Carillon History Resources</h1>
          <p>
            Gouwens, John. <i>Playing the Carillon: An Introductory Method</i>.<br />
            4th edition. GCNA Music Publications, 2017. 
          </p>

          <p>
            <a href='http://www.essentialvermeer.com/music/carillon/carillon_a.html'>EssentialVermeer.com</a>
          </p>

          <p>
            <a href='https://www.thediapason.com/content/carillon-news-28'>Carillon Repertory: Early Carillon Music.</a>
          </p>

          <p>
            <a href='http://www.allegrofuoco.com/media/SWAGER.I.U.Document.1993.pdf'>History of Carillon by Brian Swager</a>
          </p>
        </div>

        <div className='ref-text-col'>
          <h1>Century Tower Resources</h1>
          <p>
            <a href='https://arts.ufl.edu/sites/carillon-studio/welcome/'>UFL Carillon Studio</a>
          </p>
        </div>
      </div>

      <div className='ref-image-citations'>
        <h1>Image Sources</h1>

        <div className='image-grid'>
          { imgInfo && imgInfo.map((item, index) => {
            return(
              <a href={item.imgLink}>
                <div className='image-card'>
                  <img src={item.imgSrc} alt={item.imgAlt} />
                  <br />
                  <b>{item.imgAlt}</b>
                </div>
              </a>
            )
          })
          }
        </div>
        
      </div>
    </div>
  );
}

export default References;

