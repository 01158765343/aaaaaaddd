
// TODO: include your scss file here
// import "./styles/style.scss"
// TODO: get the button for submit
import {checkURL} from "./js/checkURL"

// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 * 
 * */
const input= document.getElementById("article-url")
const btn= document.getElementById("btn")


const a={url:input.value}


const sendUrl= async ( url ,data={} )=>{
    try { 
      let response = await fetch( url , {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      });
      const newData = await response;
      console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
    }

}


const dateFromUrl=async()=>{
  console.log("hi")
  try {
    const asa = await fetch("http://localhost:8081/data")
    const a = await asa.json()
    console.log(a)
    const { agreement, subjectivity, confidence, irony } = a;
        console.log( agreement, subjectivity, confidence, irony)
        document.getElementById("irony").innerHTML=`irony : ${irony}`;
        document.getElementById("subjectivity").innerHTML=` subjectivity: ${subjectivity}`;
        document.getElementById("confidence").innerHTML=`confidence: ${confidence}`;
        document.getElementById("agreement").innerHTML=`agreement: ${agreement}`;
      }catch(error){
    console.log("errorrrr",error)
    document.getElementById("text").innerHTML="Error fetching date , not find data";

  }
}

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(checkURL(input.value)){
        console.log("good")
        sendUrl("http://localhost:8081/url",{"url":input.value})
        dateFromUrl()
        
        // asa()
    }else {
      document.getElementById("irony").innerHTML=``;
      document.getElementById("subjectivity").innerHTML=` `;
      document.getElementById("agreement").innerHTML=``;
      document.getElementById("confidence").innerHTML=``;

      document.getElementById("text").innerHTML="Error  not url";
    }
})


export {
  dateFromUrl,
  sendUrl
}