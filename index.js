// const arr =[
//     'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg',
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
//     'https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80',
//     'https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg',
   
// ]
// const imageEl = document.querySelector('img');
// let i=0;
// setInterval(function(){
//     imageEl.setAttribute('src',arr[i]);
//     i=(i+1)%arr.length;
// },2500)


// function step1(fn){
//     setTimeout(()=>{
//         console.log("select3eedd");
//         fn();
//     },5000)
// }
// function step2(fn){
//     setTimeout(()=>{
//         console.log("filtered");
//         fn();
//     },4000)
// }
// function step3(fn){
//     setTimeout(()=>{
//         console.log("captioned");
//         fn();
//     },3000)
// }
// function step4(fn){
//     setTimeout(()=>{
//         console.log("uploaded");
//         fn();
//     },2000)
// }
// step1( function(){
// step2(function(){
//     step3(function(){
//         step4()
//     })
// })
// })

// let p= new Promise((res,rej)=>{
//     res()
//     // rej()
// })
// p.then(()=>{
//     console.log("6 how are you");
// }).catch((err)=>{
//     console.log(err);
// })

// function step1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("select3eedd");
//             res();
//         },5000)
//     })
// }
// function step2(){
//     return new Promise((res ,rej)=>{
//         setTimeout(()=>{
//             console.log("filtered");
//             res();

//         },4000)
//     })
// }
// async function processImage(){
//     await step1();
//     await step2();
//     console.log("done");
// }
// call()
fetch("https://jsonplaceholder.typicode.com/todos").
then((data)=>{
return data.json()
}).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})

