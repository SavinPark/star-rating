// do something!
const StarRating = $container => {
    
    let starCnt = $container.getAttribute('data-max-rating');
    // console.log(starCnt)
    
    $container.innerHTML = '<div class="star-rating-container"></div>';
    
    let inner = '<div class="star-rating-container">';
    for (let i = 1; i <= starCnt; i++) {
        inner += '<i class="bx bxs-star bx-md"></i>'
    }
    // $starRatingContainer.innerHTML = inner;
    inner += '</div>';
    $container.innerHTML = inner;
  
  };
  
  export default StarRating;