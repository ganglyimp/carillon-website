import '../stylesheets/References.css';

import CTSunset from '../images/EZ_20130314_UF_Century_Tower_0010.jpg';
import CTNight from '../images/2016-06-16_Century_Tower_Rainbow_Colors-0300.jpg';
import vanEyckHemony from '../images/Jacob_van_Eyck_met_de_Hemony_broers.jpg';

function References() {
  return (
    <div className='References'>
      <div className='ref-text-citations'>
        <h3>Carillon History Resources</h3>
        <p>Gouwens, John. <i>Playing the Carillon: An Introductory Method</i>. 4th edition. GCNA Music Publications, 2017. </p>

        <p>
          <a href='http://www.essentialvermeer.com/music/carillon/carillon_a.html'>EssentialVermeer.com</a>
        </p>

        <p>
          <a href='https://www.thediapason.com/content/carillon-news-28'>Carillon Repertory: Early Carillon Music.</a>
        </p>

        <p>
          <a href='http://www.allegrofuoco.com/media/SWAGER.I.U.Document.1993.pdf'>History of Carillon by Brian Swager</a>
        </p>

        <h3>Century Tower Resources</h3>
        <p>
          <a href='https://arts.ufl.edu/sites/carillon-studio/welcome/'>UFL Carillon Studio</a>
        </p>
      </div>

      <div className='ref-image-citations'>
        <h3>Image Sources</h3>

        <a href='https://ufphotography.photoshelter.com/search/result/I0000XL0.U7iT5A8?terms=&'>
          <div className='image-card'>
            <img src={CTSunset} />
            <br />
            <b>Century Tower at Sunset</b>
          </div>
        </a>

        <a href='https://ufphotography.photoshelter.com/search/result/I0000N6w5TxrpfxU?terms=century&'>
          <div className='image-card'>
            <img src={CTNight} />
            <br />
            <b>Century Tower Rainbow Lights</b>
          </div>
        </a>

        <a href='https://ufphotography.photoshelter.com/search/result/I0000N6w5TxrpfxU?terms=century&'>
          <div className='image-card'>
            <img src={vanEyckHemony} />
            <br />
            <b>Portrait of Hemony Brothers with van Eyck</b>
          </div>
        </a>
        
      </div>
    </div>
  );
}

export default References;

