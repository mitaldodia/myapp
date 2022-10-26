import Container from 'react-bootstrap/Container';
import Buttons from '../share-components/Button';


export default function banner() {
  return (
    <>  
        <div className="banner-contains">
            <div className="banner-details">
                    <div className="banner-txt">
                        <div className="banner-up-txt">
                            <Container>
                            <h1>Communication is the key <br/>for any Global Business</h1>
                            <div className="banner-btns">
                                <div className='no-bg-btn me-4'>
                                    <Buttons value="about us"/>
                                </div>
                                <Buttons value="our services"/>
                            </div>
                            </Container>
                        </div>
                        <div className='banner-bottom'>
                        <Container>
                        <div className='banner-bottom-txt'>
                            <div className="banner-left-txt">
                                <h3>Would you like to speak to one of our financial advisers?</h3>
                                <p>Just submit your contact details and we’ll be in touch shortly.</p>
                            </div>
                            <div className="banner-right-btn">
                                <div className="btn-details">
                                    <Buttons className='first-dem-btn' value="GET A QUOTE"/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                    </div>
                
                
            </div>
        </div>
       
        
    </>
    
  )
}

