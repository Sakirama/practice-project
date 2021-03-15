// const contents = document.querySelectorAll('.faq-contents');
// const section = document.querySelector('.faq-section');

// doesn't worked

// contents.addEventListener('click', e => {
//     e.forEach((item, i) => {
//         const question = item.children[0];
//         const answer = item.children[1];
//         // let h2 = ques

//         if (question.classList.contains('active')) {
//             question.classList.remove('.active');
//             answer.style.display = 'none';
//         } else {
//             question.classList.add('active');
//             answer.style.display = 'block';
//         }
//     });
// })

//  worked

// contents.forEach(item => {
//     let question = item.children[0];
//     let answer = item.children[1];
//     // let selected = item.target;
//     // console.log(selected);
//     question.addEventListener('click', () => {
//         let selected = question.target;
//         console.log(selected);
//         if (question.classList.contains('active')) {
//             question.classList.remove('active');
//             answer.style.maxHeight = '0px';
//         } else {
//             question.classList.add('active');
//             answer.style.maxHeight = '50px';
//         }
//     })
// })

//  doesn't worked

// contents.forEach(item => {
//     let question = item.children[0];
//     let answer = item.children[1];
//     // let selected = item.target;
//     // console.log(selected);
//     let selected = item.target;
//     question.addEventListener('click', () => {
//         if (question == selected) {
//             if (question.classList.contains('active')) {
//                 question.classList.remove('active');
//                 answer.style.maxHeight = '0px';    
//             } else {
//                 question.classList.add('active');
//                 answer.style.maxHeight = '50px';
//             }
//         } else {
//             question.classList.remove('active');
//             answer.style.maxHeight = '0px';
//         }
//     })
// })

// doesn't worked
// function accordion(e) {
//     if (e.target.className == "faq-question" || e.target.className == "faq-question active"){

//         let itemSelected = e.target;
//         console.log(itemSelected);
//         contents.forEach( (item) => {
            
//             let question = item.children[0];
//             let answer = item.children[1];
//             console.log(question);

//             if (question == itemSelected) {
//                 if (question.classList.contains("active")) {

//                     question.classList.remove('active');
//                     answer.style.maxHeight = '0px';
//                     console.log('active');

//                 } else {
//                     question.classList.add('active');
//                     answer.style.maxHeight = '50px';
//                     console.log('falses');
//                 }
//             } else {
//                 question.classList.remove('active');
//                 answer.style.maxHeight = '0px';
//                 console.log('false');
//             }
//         });
//     }
// }

// section.addEventListener('click', accordion);


//worked

// section.addEventListener('click', e => {
//     let selected = e.target;
//     console.log(selected);
//     contents.forEach(item => {
//         let question = item.children[0];
//         let h2 = question.children[0];
//         let img = question.children[1];
//         let answer = item.children[1];
//         // let selected = item.target;
//         // console.log(selected);
//             if (h2 == selected || question == selected || img == selected) {
//                 if (question.classList.contains('active')) {
//                     question.classList.remove('active');
//                     answer.style.maxHeight = '0px';
//                 } else {
//                     question.classList.add('active');
//                     answer.style.maxHeight = '50px';
//                 }
//             } else {
//                 question.classList.remove('active');
//                 answer.style.maxHeight = '0px';
//                 console.log('else');
//             }
        
//     })
// })

const contents = document.querySelectorAll('.faq-contents');
const container = document.querySelector('.container');

container.addEventListener('click', e => {
    let selected = e.target;
    // console.log(selected);
    contents.forEach(item => {
        let question = item.children[0];
        let h2 = question.children[0];
        let img = question.children[1];
        let answer = item.children[1];
        // let selected = item.target;
        // console.log(selected);
            if (h2 == selected || question == selected || img == selected) {
                if (question.classList.contains('active')) {
                    question.classList.remove('active');
                    answer.style.maxHeight = '0px';
                } else {
                    question.classList.add('active');
                    answer.style.maxHeight = '50px';
                }
            } else {
                question.classList.remove('active');
                answer.style.maxHeight = '0px';
                // console.log('else');
            }
        
    })
})