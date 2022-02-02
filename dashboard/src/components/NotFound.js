import react from 'react';
import notFound from '../img/notFound.jpg';


function NotFound() {
  return (
    <div>
        <img src={notFound} alt='error404' style={{width: 30 +'rem'}} />
    </div>
  );
}

export default NotFound;