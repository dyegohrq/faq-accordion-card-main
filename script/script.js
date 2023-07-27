document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle("active")
    } else {
        document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))

        question.parentNode.classList.add("active")
    }
}))

// // .question-answeker {
// display: block;
// width: 100%;
// position: relative;
// }
// .accordion-questions img {
// display: block;
// position: absolute;
// right: 0;
// top: 7px;
// cursor: pointer;
// }

// .question-answeker.active h3{
// color: var(--Very-dark-desaturated-blue);
// font-weight: 700;
// }

// .question-answeker.active .answer {
// display: block;
// }

// .question-answeker.active img {
// transform: rotate(180deg);
// transition: all 0.4s ease-in;
// }

// .answer {
// margin-bottom: 20px;
// color: var(--Very-dark-grayish-blue);
// width: 259px;
// display: none;
// }
