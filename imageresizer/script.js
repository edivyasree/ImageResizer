//  if(window.location!="https://saishivahariprasad.com/ImageResizer.html"){
//   window.location.href = "https://saishivahariprasad.com/ImageResizer.html";
//  }

function validateform(){

  height_data=document.querySelector('#height').value
  width_data=document.querySelector('#width').value
  if(height_data=="" || width_data=="")
     return false
}

function validatefilebutton(){
 if(input.files[0]==undefined)
 {
   return false
 }
}
 function submitImage(){
  
   if (validateform()===false){
     alert("please enter a value");
     return
     
   }
  if(validatefilebutton()===false){
   alert("please upload a image");
   return
  }

   
  image_data=(imagesArray[0])
  height_data=document.querySelector('#height').value
  width_data=document.querySelector('#width').value
  clearoutputs()
  UploadImage(image_data,height_data,width_data)
 //  resizeImage() 



 }


 // getting values 
 const input = document.querySelector(".fileupload")
 const output = document.querySelector("output")
 const image_output_loader=document.querySelector("#processedImage")
 let imagesArray = []
 
 input.addEventListener("change", function() {
   imagesArray = []
   const file = input.files
     imagesArray.push(file[0])
     displayImages()
     clearoutputs()
     start()

 })
 

async function start(){
  res= await fetch("https://zhqqdj4ggf.execute-api.us-east-1.amazonaws.com/api/")
  startup_= await res.json()
  console.log(startup_)
 }
 
function displayImages() {
   let images = ""

   imagesArray.forEach((image, index) => {
     images += `<div class="image">
                 <img src="${URL.createObjectURL(image)}" alt="image">
                 <span onclick="deleteImage(${index})">&times;</span>
               </div>`
   })
   output.innerHTML = images
 }
 
 function deleteImage(index) {
   imagesArray.splice(index, 1)
   displayImages()
 }
 

 function clearoutputs(){
   processedImage=document.querySelector('.outputImage')
   processedImage.innerHTML=""
 }
 function processedDisplayImage(image){
   // if(image['error']===undefined){
   //   processedImage=document.querySelector('.outputImage')
   //   processedImage.innerHTML="<div>can't process the image above 4000px</div>"
   //   return 

   // }
   image=image['image']
   processedImage=document.querySelector('.outputImage')
   processedImage.innerHTML=`<div class="processedImage">
                 <div class=class="downloadImage">
                 <a  download="" href="data:image/png;base64,${image}">Download</a>
                </div>
               </div>`
 }

 function UploadImage(image_data,height_data,width_data)
  
 {

 ImageForm=new FormData();
 ImageForm.append('file', image_data);
 combined="/"+height_data+"X"+width_data
 url="https://zhqqdj4ggf.execute-api.us-east-1.amazonaws.com/api/UploadImage"+combined
 document.querySelector('button').style.visibility="hidden"
 renderLoader(image_output_loader);
 fetch(url, {
     method: 'POST',
     body: ImageForm, 
     }).then(
       res=>{    
       
       return res.json()
       }).then(result => {
         //     // Handle the response data
            
              clearLoader()
              
           processedDisplayImage(result)
           document.querySelector('button').style.visibility="visible"
       })
       //
      
       // local_url="http://localhost:8000/UploadImage"+combined
       // fetch(local_url, {
       //   method: 'POST',
       //   body: ImageForm, 
       //   }).then(
       //     res=>{    
       //       renderLoader(image_output_loader);
       //     return res.json()
       //     }).then(result => {
       //       //     // Handle the response data
       //           clearLoader()
       //           processedDisplayImage(result)
       //     })
   
   


}


elementStrings = {
 loader: 'loader' //pasing the css class name of loader
}

//attaching the loader to parent element
const renderLoader = parent => {
 const loader = `
 <div class="${elementStrings.loader}">
     <svg>
     <use href="./imageresizer/icons.svg#icon-cw"></use>
     </svg>
 </div>

 `;
 
 //right at the begining of parent element
 parent.insertAdjacentHTML('afterbegin',loader);

};

const clearLoader = () =>{
 const loader = document.querySelector(`.${elementStrings.loader}`);
 if (loader) loader.parentElement.removeChild(loader);

}


!function(){"use strict";var f={compile:function(r){return i.template.replace(i.pattern,function(t,e){var n=i.middleware(e,r[e],i.template);return void 0!==n?n:r[e]||t})},setOptions:function(t){i.pattern=t.pattern||i.pattern,i.template=t.template||i.template,"function"==typeof t.middleware&&(i.middleware=t.middleware)}};const i={pattern:/\{(.*?)\}/g,template:"",middleware:function(){}};var n=function(t,e){var n=e.length,r=t.length;if(n<r)return!1;if(r===n)return t===e;t:for(var i=0,o=0;i<r;i++){for(var u=t.charCodeAt(i);o<n;)if(e.charCodeAt(o++)===u)continue t;return!1}return!0},e=new function(){this.matches=function(t,e){return n(e.toLowerCase(),t.toLowerCase())}},r=new function(){this.matches=function(e,t){return!!e&&(e=e.trim().toLowerCase(),(t=t.trim().toLowerCase()).split(" ").filter(function(t){return 0<=e.indexOf(t)}).length===t.split(" ").length)}},d={put:function(t){if(l(t))return a(t);if(function(t){return Boolean(t)&&"[object Array]"===Object.prototype.toString.call(t)}(t))return function(n){const r=[];s();for(let t=0,e=n.length;t<e;t++)l(n[t])&&r.push(a(n[t]));return r}(t);return undefined},clear:s,search:function(t){return t?function(e,n,r,i){const o=[];for(let t=0;t<e.length&&o.length<i.limit;t++){var u=function(t,e,n,r){for(const i in t)if(!function(n,r){for(let t=0,e=r.length;t<e;t++){var i=r[t];if(new RegExp(i).test(n))return!0}return!1}(t[i],r.exclude)&&n.matches(t[i],e))return t}(e[t],n,r,i);u&&o.push(u)}return o}(u,t,c.searchStrategy,c).sort(c.sort):[]},setOptions:function(t){c=t||{},c.fuzzy=t.fuzzy||!1,c.limit=t.limit||10,c.searchStrategy=t.fuzzy?e:r,c.sort=t.sort||o,c.exclude=t.exclude||[]}};function o(){return 0}const u=[];let c={};function s(){return u.length=0,u}function l(t){return Boolean(t)&&"[object Object]"===Object.prototype.toString.call(t)}function a(t){return u.push(t),u}c.fuzzy=!1,c.limit=10,c.searchStrategy=c.fuzzy?e:r,c.sort=o,c.exclude=[];var p={load:function(t,e){const n=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");n.open("GET",t,!0),n.onreadystatechange=h(n,e),n.send()}};function h(e,n){return function(){if(4===e.readyState&&200===e.status)try{n(null,JSON.parse(e.responseText))}catch(t){n(t,null)}}}var m=function y(t){if(!(e=t)||!("undefined"!=typeof e.required&&e.required instanceof Array))throw new Error("-- OptionsValidator: required options missing");var e;if(!(this instanceof y))return new y(t);const r=t.required;this.getRequiredOptions=function(){return r},this.validate=function(e){const n=[];return r.forEach(function(t){"undefined"==typeof e[t]&&n.push(t)}),n}},w={merge:function(t,e){const n={};for(const r in t)n[r]=t[r],"undefined"!=typeof e[r]&&(n[r]=e[r]);return n},isJSON:function(t){try{return t instanceof Object&&JSON.parse(JSON.stringify(t))?!0:!1}catch(e){return!1}}};!function(t){let i={searchInput:null,resultsContainer:null,json:[],success:Function.prototype,searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',templateMiddleware:Function.prototype,sortMiddleware:function(){return 0},noResultsText:"No results found",limit:10,fuzzy:!1,debounceTime:null,exclude:[]},n;const e=function(t,e){e?(clearTimeout(n),n=setTimeout(t,e)):t.call()};var r=["searchInput","resultsContainer","json"];const o=m({required:r});function u(t){d.put(t),i.searchInput.addEventListener("input",function(t){-1===[13,16,20,37,38,39,40,91].indexOf(t.which)&&(c(),e(function(){l(t.target.value)},i.debounceTime))})}function c(){i.resultsContainer.innerHTML=""}function s(t){i.resultsContainer.innerHTML+=t}function l(t){var e;(e=t)&&0<e.length&&(c(),function(e,n){var r=e.length;if(0===r)return s(i.noResultsText);for(let t=0;t<r;t++)e[t].query=n,s(f.compile(e[t]))}(d.search(t),t))}function a(t){throw new Error("SimpleJekyllSearch --- "+t)}t.SimpleJekyllSearch=function(t){var n;0<o.validate(t).length&&a("You must specify the following required options: "+r),i=w.merge(i,t),f.setOptions({template:i.searchResultTemplate,middleware:i.templateMiddleware}),d.setOptions({fuzzy:i.fuzzy,limit:i.limit,sort:i.sortMiddleware,exclude:i.exclude}),w.isJSON(i.json)?u(i.json):(n=i.json,p.load(n,function(t,e){t&&a("failed to get JSON ("+n+")"),u(e)}));t={search:l};return"function"==typeof i.success&&i.success.call(t),t}}(window)}();


var sjs = SimpleJekyllSearch({
 searchInput: document.getElementById('search-input'),
 resultsContainer: document.getElementById('results-container'),
 json: '/search.json'
})

