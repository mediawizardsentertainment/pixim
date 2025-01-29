async function fetchServerThreeContent(){const url="https://cookies.usecookies.online/grammarly-cookie-3-updated3/";const container=document.getElementById("serverThreeContainer");try{const response=await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(url)}`).catch(()=>fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`)).catch(()=>fetch(`https://app.scrapingbee.com/api/v1/?api_key=X6ZXUP0STCEJBFPYW07V8L6AL8GW1BQH4HPU5W7SMWURWBLKMMKYKTLBR5AOUPNXVM26LCPTF5DGLB8N&url=${encodeURIComponent(url)}`));if(!response.ok)throw new Error("Failed to fetch content from Server Three");const htmlText=await response.text();const parser=new DOMParser();const doc=parser.parseFromString(htmlText,"text/html");const codeElement=doc.querySelector("pre.wp-block-code > code");if(codeElement){container.innerHTML="";const serverName=document.createElement("h3");serverName.textContent="Server Three";serverName.style.cssText="margin: 0 0 10px 0; color: #003366; text-align: center;";container.appendChild(serverName);const dateContainer=document.createElement("div");dateContainer.textContent=`Updated: ${new Date().toLocaleString()}`;dateContainer.style.cssText="background-color: #e9f5ff; border: 1px solid #b6d3e8; padding: 10px 20px; border-radius: 5px; margin-bottom: 15px; font-size: 1.1em; font-weight: bold; color: #003366;";container.appendChild(dateContainer);const newCodeElement=document.createElement("pre");newCodeElement.textContent=codeElement.textContent;newCodeElement.style.cssText="background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px; border-radius: 5px; overflow-y: auto; max-height: 250px; user-select: none;";container.appendChild(newCodeElement);const copyButton=document.createElement("button");copyButton.textContent="Copy Code";copyButton.style.cssText="padding: 14px 28px; background-color: #003366; color: white; border: none; border-radius: 10px; cursor: pointer; margin-top: 10px; width: 100%; font-size: 1.2em; text-align: center; display: block; box-sizing: border-box;";container.appendChild(copyButton);const copiedMessage=document.createElement("div");copiedMessage.textContent="Cookie Copied!";copiedMessage.style.cssText="margin-top: 10px; font-size: 1.1em; color: green; text-align: center; display: none;";container.appendChild(copiedMessage);copyButton.addEventListener("click",()=>{newCodeElement.style.userSelect='text';const range=document.createRange();range.selectNodeContents(newCodeElement);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);try{document.execCommand("copy");copiedMessage.style.display="block";setTimeout(()=>{copiedMessage.style.display="none"},2000)}catch(err){console.error("Error copying text using execCommand:",err)}
newCodeElement.style.userSelect='none'})}else{container.innerHTML="No <code> tags found in Server Three content."}}catch(error){container.textContent=`Error fetching content from Server Three: ${error.message}`}}
document.addEventListener("DOMContentLoaded",()=>{fetchServerThreeContent()});
