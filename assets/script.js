
// let deleteItems=[];



// async function exporting(){

//     try {
//         let myObjects={
//             data: deleteItems
//         }
//         module.exports = myObjects;
//     } catch (error) {
//         //console.log('An error occurred:', error);
//     }
// }



// exporting();




function allInputClick(e){
   
    //let key = e.key;
    let clicked = e.target;

   
       

    // checklist button
    if (clicked.classList.contains('mycheckbox')) {
        let checkbox=clicked.getElementsByTagName('input')[0];
        if(clicked.classList.contains('checked')){
               
                clicked.classList.remove('checked');
                checkbox.checked=false;
        }else{
              
                clicked.classList.add('checked');
                checkbox.checked=true;
         
        }

        
    }
  
}



try {
    // Code that may throw an error
    document.addEventListener('click',allInputClick);
  } catch (error) {
    // Handle the error
    console.log('An eventlistener error occurred:', error);
  }


