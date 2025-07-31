window.onload = () => {
    const titleDOM = document.getElementById("title");
    const titleDropdownDOM = document.getElementById("title-dropdown");
    const thumbUpDOM = document.getElementById("thumb-up");
    const thumbDownDOM = document.getElementById("thumb-down");
    const thumbUpCountDOM = document.getElementById("thumb-up-count");
    const thumbDownCountDOM = document.getElementById("thumb-down-count");

    let thumbUpCount = 0;
    let thumbDownCount = 0;

    thumbUpCountDOM.innerText = thumbUpCount;
    thumbDownCountDOM.innerText = thumbDownCount;

    titleDropdownDOM.addEventListener("click", () => {
        titleDOM.classList.toggle("clamp");
        titleDropdownDOM.classList.toggle("enable-dropdown");
    });

    thumbUpDOM.addEventListener("click", () => {
        thumbUpCount++;
        thumbUpCountDOM.innerText = thumbUpCount;
    });

    thumbDownDOM.addEventListener("click", () => {
        thumbDownCount++;
        thumbDownCountDOM.innerText = thumbDownCount;
    });
};