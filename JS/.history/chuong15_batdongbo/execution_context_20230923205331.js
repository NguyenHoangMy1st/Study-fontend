// the creation phase
// the execution phase
let x = 10;
function timesTen(a) {
  return a * 10;
}
let y = timesTen(x);
console.log(y); // 100

//- Global execution context
// The creation phase               // The execution phase
/**                                 /**
 * Global object: window             * Global object: window
 * this: window                      * this: window
 * x: undefined                      * x: 10
 * timesTen: function(){}            * timesTen: function(){}
 * y: undefined                      * y: timesTen(x) -> 100
 */                                  


//- Function execution context
// Creation phase                   // Execution phase
/**                                 /**
 * Global object: arguments          * Global object: arguments
 * this: window                      * this: window
 * a: undefined                      * a: 10
 */
