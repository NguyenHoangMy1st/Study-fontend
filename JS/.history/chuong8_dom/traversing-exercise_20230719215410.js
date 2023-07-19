// cách 2
// const template = `
//     <div class="model">
//       <div class="model-content">
//         <i class="fa fa-times model-close"> </i>
//           <div class="model-desc">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque id iste odio. Iusto eum fuga ut unde dolores quibusdam dolore, labore amet aut repellendus. Ad aspernatur officia minima cupiditate.
//           </div>
//           <div class="model-action">
//             <button class="model-submit">Confirm</button>
//             <button class="model-cancel">Cancel</button>
//           </div>
//       </div>
//     </div>`;
//     const body = document.body;
//     body.insertAdjacentHTML("afterbegin", template);

// cách 3 


// Active model
const modelWrapper = document.querySelector(".model");
if(modelWrapper){
    setTimeout(function(){
        modelWrapper.classList.add("is-show");
    }, 3000);
}