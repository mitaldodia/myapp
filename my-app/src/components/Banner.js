import Container from 'react-bootstrap/Container';
import Buttons from '../share-components/Button';


export default function banner() {
  return (
    <>  
        <div className="banner-contains">
            <div className="banner-details">
                <Container>
                    <div className="banner-txt">
                        <div className="banner-up-txt">
                            <h1>Communication is the key <br/>for any Global Business</h1>
                            <div className="banner-btns">
                                <div className='no-bg-btn me-4'>
                                    <Buttons value="about us"/>
                                </div>
                                <Buttons value="our services"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
       
        
    </>
    
  )
}

