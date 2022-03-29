import './Header.css';
import { Link } from 'react-router-dom';
import $ from 'jquery'  
$( document ).ready(function() {
  $('body').on('click', "button.slideRightMenu",function() { 
    $(".canvas-menu").toggleClass("open");
  $(".main-overlay").toggleClass("active");
  });  
  $('body').on('click', "button.btn-close, .main-overlay",function() { 
    $(".canvas-menu").removeClass("open");
    $(".main-overlay").removeClass("active");
  });  
});  
function CanvaMenu() {
  return ( 
    <>      
    <div className="canvas-menu d-flex align-items-end flex-column">
          {/* close button */}
          <button type="button" className="btn-close" aria-label="Close" /> 
          {/* menu */}
          <nav>
            <ul className="vertical-menu">
              <li>
                <Link to="/">Trang chủ</Link>  
              </li>
              <li><Link to="/course">Tuyển dụng</Link></li> 
              <li><Link to="/feedback">Hỏi đáp</Link></li>
            </ul>
          </nav>
          {/* social icons */} 
        </div>
    </>
  );
}

export default CanvaMenu;
