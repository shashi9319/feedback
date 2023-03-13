import React from 'react';
import style from './Rating.module.css';

export default function Rating() {
  const [selectedRating, setSelectedRating] = React.useState(undefined);
  const [isSubmitted, setIssubmitted] = React.useState(false);

  function handleRatingClick(num) {
    setSelectedRating(num);
  }
  function hadleFormSubmit(e) {
    e.preventDefault();
    setIssubmitted(true);
  }
  return isSubmitted ? (
    <div className={style.subPanel}>
      <img src="/feedbackimg.png" alt="" />
      <h1 className={style.title}>Thank You </h1>
      <p className={style.description}>
        We appreciate your valuable time taken to give feedback. We will look
        forward to make changes to impress you with better service
      </p>
    </div>
  ) : (
    <form onSubmit={hadleFormSubmit} className={style.panel}>
      <img className={style.star} src="/star.png" alt="" />
      <h1 className={style.title}>How did we do ?</h1>
      <p className={style.description}>
        Please let us know how we did with youe support request. All feedback is
        appreciated to help us improve our offering
      </p>
      <div className={style.group}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            onClick={() => handleRatingClick(rating)}
            className={style.rating}
          >
            {rating}
          </button>
        ))}
      </div>
      <button disabled={selectedRating === undefined} className={style.submit}>
        Submit
      </button>
    </form>
  );
}

//<a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>
