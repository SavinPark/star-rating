// do something!
const StarRating = $container => {
    
    let starCnt = $container.getAttribute('data-max-rating');
    
    let inner = '<div class="star-rating-container">';
    for (let i = 1; i <= starCnt; i++) {
        inner += '<i class="bx bxs-star star"></i>'
    }
    inner += '</div>';
    $container.innerHTML = inner;

    function getIdx(ele) {
        let n = 0;
        while((ele = ele.previousSibling) != null) {
            n++;
        }
        return n++
     }

    $container.addEventListener("mouseover", (event) => {
        let starIdx = getIdx(event.target);
        for (let i = 0; i <= starIdx; i++) {
            event.target.parentNode.childNodes[i].classList.add('hovered');
        }
        
    })
    $container.addEventListener("mouseout", (event) => {
        let starIdx = getIdx(event.target);
        for (let i = 0; i <= starIdx; i++) {
            event.target.parentNode.childNodes[i].classList.remove('hovered');
        }
    })
    $container.addEventListener("click", (event) => {
        event.target.parentNode.childNodes.forEach(child => child.classList.remove('selected'));
        let starIdx = getIdx(event.target);
        for (let i = 0; i <= starIdx; i++) {
            event.target.parentNode.childNodes[i].classList.add('selected');
        }
        // 커스텀 이벤트 : rating-change
        event.target.parentNode.parentNode.setAttribute('rating', starIdx + 1);
        let e = new CustomEvent("rating-change", {detail: $container.getAttribute('rating')});
        $container.dispatchEvent(e);
    })


};
  
export default StarRating;