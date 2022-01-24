import style from './../../Styling/Pagination.module.css';
import photo from './../../Assets/img/photo.jpg';

const Pagination = () =>{
   return (
      <div className={`${style.result_filter} d-flex justify-content-between gap-4 mt-4`}>
         <div className={`${style.card_event} card`}>
            <img src={photo} className={`${style.img_card} card-img-top`} alt="..."/>
            <div className="card-body">
               <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>Design</span>
               <p className="card-text">SUN OCT 24 @ 1:15 ACT</p>
               <h5 className="card-title">How to create design system</h5>
               <p className="card-text"><small className="text-muted">By Ernest</small></p>
            </div>
         </div>
         <div className={`${style.card_event} card`}>
            <img src={photo} className={`${style.img_card} card-img-top`} alt="..."/>
            <div className="card-body">
               <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>Design</span>
               <p className="card-text">SUN OCT 24 @ 1:15 ACT</p>
               <h5 className="card-title">How to create design system</h5>
               <p className="card-text"><small className="text-muted">By Ernest</small></p>
            </div>
         </div>
         <div className={`${style.card_event} card`}>
            <img src={photo} className={`${style.img_card} card-img-top`} alt="..."/>
            <div className="card-body">
               <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>Design</span>
               <p className="card-text">SUN OCT 24 @ 1:15 ACT</p>
               <h5 className="card-title">How to create design system</h5>
               <p className="card-text"><small className="text-muted">By Ernest</small></p>
            </div>
         </div>
         <div className={`${style.card_event} card`}>
            <img src={photo} className={`${style.img_card} card-img-top`} alt="..."/>
            <div className="card-body">
               <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>Design</span>
               <p className="card-text">SUN OCT 24 @ 1:15 ACT</p>
               <h5 className="card-title">How to create design system</h5>
               <p className="card-text"><small className="text-muted">By Ernest</small></p>
            </div>
         </div>
         <div className={`${style.card_event} card`}>
            <img src={photo} className={`${style.img_card} card-img-top`} alt="..."/>
            <div className="card-body">
               <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>Design</span>
               <p className="card-text">SUN OCT 24 @ 1:15 ACT</p>
               <h5 className="card-title">How to create design system</h5>
               <p className="card-text"><small className="text-muted">By Ernest</small></p>
            </div>
         </div>
         <div className={`${style.card_event} card`}>
            <img src={photo} className={`${style.img_card} card-img-top`} alt="..."/>
            <div className="card-body">
               <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>Design</span>
               <p className="card-text">SUN OCT 24 @ 1:15 ACT</p>
               <h5 className="card-title">How to create design system</h5>
               <p className="card-text"><small className="text-muted">By Ernest</small></p>
            </div>
         </div>
         <div className={`${style.card_event} card`}>
            <img src={photo} className={`${style.img_card} card-img-top`} alt="..."/>
            <div className="card-body">
               <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>Design</span>
               <p className="card-text">SUN OCT 24 @ 1:15 ACT</p>
               <h5 className="card-title">How to create design system</h5>
               <p className="card-text"><small className="text-muted">By Ernest</small></p>
            </div>
         </div>
         <div className={`${style.card_event} card`}>
            <img src={photo} className={`${style.img_card} card-img-top`} alt="..."/>
            <div className="card-body">
               <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>Design</span>
               <p className="card-text">SUN OCT 24 @ 1:15 ACT</p>
               <h5 className="card-title">How to create design system</h5>
               <p className="card-text"><small className="text-muted">By Ernest</small></p>
            </div>
         </div>
      </div>
   )
}

export default Pagination;