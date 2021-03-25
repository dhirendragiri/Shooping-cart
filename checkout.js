var items=[];

// function readData() {
//     var item={};
//     item.name=document.getElementById("name1").value;
//     item.price = document.getElementById("price1").value;
//     return item;
// }
function onFormSubmit1() {
    var item={};
    item.name=document.getElementById("name1").value;
    item.price = document.getElementById("price1").value;
    console.log(item);
    insertNewRecord(item);
    
    items.push(item); 
    storeInSession(); 
    
}
function onFormSubmit2() {
    var item={};
    item.name=document.getElementById("name2").value;
    item.price = document.getElementById("price2").value;
    console.log(item);
    insertNewRecord(item);
    
    items.push(item); 
    storeInSession(); 
    
}
function onFormSubmit3() {
    var item={};
    item.name=document.getElementById("name3").value;
    item.price = document.getElementById("price3").value;
    console.log(item);
    insertNewRecord(item);
    
    items.push(item); 
    storeInSession(); 
    
     
     

    
}
function onFormSubmit4() {
    var item={};
    item.name=document.getElementById("name4").value;
    item.price = document.getElementById("price4").value;
    console.log(item);
    insertNewRecord(item);
   
    items.push(item); 
    
    console.log(items); 
    storeInSession();
    
}

    function storeInSession() {
        // localStorage.setItem("empInfo",JSON.stringify(blogData));
        sessionStorage.setItem("cart",JSON.stringify(items));
     }
     function retrieveFromSession() {
         //var obj = JSON.parse(localStorage.getItem("empInfo"));
         var obj = JSON.parse(sessionStorage.getItem("cart"));
         console.log(obj);
         
           
         var i;
         for(i=0;i<obj.length;i++){
            insertNewRecord(obj[i]);
         } 
        
     }

     function insertNewRecord(data){
        var table = document.getElementById("cart")
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow(body.length);  // row created 
       
        var cell1 = newRow.insertCell(0);          // cell created 
        cell1.innerHTML=data.name;                 // value placed 
       
        var cell2 = newRow.insertCell(1);          // cell created 
        cell2.innerHTML=data.price;                 // value placed
       
       }