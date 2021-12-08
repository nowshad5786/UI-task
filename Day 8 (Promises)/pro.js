let delivered = true;
let shipping = new Promise(function (resolve, reject) {
  if (delivered) {
    resolve("product delivered");
  } else {
    reject("Product yet to deliver");
  }
});
shipping.then((message) => console.log(message)); /*using then()*/

let sent = false;
let service = new Promise(function (resolve, reject) {
  if (sent) {
    resolve("Product Dispatched");
  } else {
    reject("Product yet to dispatch");
  }
});
service
  .catch((message) => console.log(message)) /*Using catch()and finally()*/
  .finally(() => console.log("Thanks for shopping "));
