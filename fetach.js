// //fetch

// fetch('https://reqres.in/api/users/1',{
//     method: 'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         name:'user 1'
//     })
// })
// .then( res=> {
//    return res.json()
// })
// .then(data=> console.log(data))
// .catch(Error=> console.log('Error'))



// //async function of fetch
// async function fetchUserData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      
//       if (response.ok) {
//         console.log("Success");
//         const data = await response.json();
//         console.log(data);
//       } else {
//         console.log("Not successful");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   console.log("welcome");


//   fetchUserData();

// //timeout

// async function fetchUserData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      
//       if (response.ok) {
//         console.log("Success");
//         const data = await response.json(); 
//         console.log(data);
//       } else {
//         console.log("Not successful");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   setTimeout(fetchUserData,5000)
  

// //promise
//   const data = ()=> {
//     return  new Promise (resolve=>{
//           resolve("data fetched");
//       })
//   };
  
//   const note =()=> {
//     return  new Promise (resolve=>{
//           resolve("noted");
//       })
//   };
  
//   async function handle(){
//       try{
//           const datas= await data();
//           const noted= await note();
//           console.log(datas);
//           console.log(noted);
//       }
//       catch{
//           console.log("error")
//       }
//   }
//   handle();


//   // chain
//   const first=()=>{
//     return  new Promise(resolve =>{
//         const a=20;
//       resolve (a)
//     })
// };
// const second =(data1) =>{
//     return new Promise(resolve =>{
//         const b=40
//       resolve(data1 +b)
//     })
// };
// const third = (data2,b)=>{
//     return new Promise(resolve =>{
//         const c= 4 * b
//        resolve (data2 + c)
//     })
// };

// first()
//  .then(fi=>{
//      console.log(fi);
//      return second(fi);
//  })
//  .then(se=>{
//      console.log(se);
//      return third(se,60);
//  })
//  .then(th=>{
//      console.log(th);
//      // return third(se);
//  })
// .catch(error=>{
//     console.log("error")}

// )



// //promise
// const myPromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//    const success = true;
//    if (success) {
//      resolve("Operation was successful!");
//    } else {
//      reject("Operation failed.");
//    }
//  }, 2000);
// });

// myPromise
//  .then(result => {
//    console.log(result); 
//  })
//  .catch(error => {
//    console.error(error); 
//  });

  
  //race promise
const p1 = Promise.reject('Error From Promise One');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

Promise.race([p2, p1, p3])
  .then(response => console.log(response))
  .catch(reason => console.log(reason));