let clickCounter=0;let contentToCopy='';async function fetchServerTwoContent(){const url="https://edutechack.com/grammarly-cookies/";const container=document.getElementById("serverTwoContainer");try{const response=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);if(!response.ok)throw new Error("Failed to fetch content from Server Two");const htmlText=await response.text();const parser=new DOMParser();const doc=parser.parseFromString(htmlText,"text/html");const preElement=doc.querySelector("pre");if(preElement){container.innerHTML="";contentToCopy=preElement.textContent;const serverName=document.createElement("h3");serverName.textContent="Server Two";serverName.style.cssText="margin: 0 0 10px 0; color: #003366; text-align: center;";container.appendChild(serverName);const dateContainer=document.createElement("div");dateContainer.textContent=`Updated: ${new Date().toLocaleString()}`;dateContainer.style.cssText="background-color: #e9f5ff; border: 1px solid #b6d3e8; padding: 10px 20px; border-radius: 5px; margin-bottom: 15px; font-size: 1.1em; font-weight: bold; color: #003366;";container.appendChild(dateContainer);const newPreElement=document.createElement("pre");newPreElement.textContent=preElement.textContent;newPreElement.style.cssText="background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px; border-radius: 5px; overflow-y: auto; max-height: 250px; user-select: none;";container.appendChild(newPreElement);const copyButton=document.createElement("button");copyButton.textContent="Click Me";copyButton.style.cssText="padding: 14px 28px; background-color: #003366; color: white; border: none; border-radius: 10px; cursor: pointer; margin-top: 10px; width: 100%; font-size: 1.2em; text-align: center; display: block; box-sizing: border-box;";container.appendChild(copyButton);const copiedMessage=document.createElement("div");copiedMessage.textContent="Code Copied!";copiedMessage.style.cssText="margin-top: 10px; font-size: 1.1em; color: green; text-align: center; display: none;";container.appendChild(copiedMessage);copyButton.addEventListener("click",()=>{clickCounter++;if(clickCounter===1){copyButton.textContent="5 times click left"}else if(clickCounter<=5){copyButton.textContent=`${5 - clickCounter} times click left`;const examplePages=["https://irritatepillssurly.com/fq4w25pp3?key=55036904f32c3eb7441696cf73b2f40c","https://irritatepillssurly.com/xupcrpvb4g?key=36e21e996da614c45176cd55120a2818","https://irritatepillssurly.com/ii05k2payq?key=2eadb04667478811968b402fc3214db7","https://irritatepillssurly.com/mk62b9wv?key=cbb8b23737bdee39a20455c04c07d33e","https://irritatepillssurly.com/d9n4mdfa?key=0a8dcfc1cd8e865a1c08241aa01ee87a"];window.open(examplePages[clickCounter-1],"_blank")}else if(clickCounter===6){copiedMessage.style.display="block";setTimeout(()=>{copiedMessage.style.display="none"},2000);copyButton.textContent="Final Step Copy Cookies";copyContentToClipboard(contentToCopy);copyButton.disabled=!0}})}else{container.innerHTML="No <pre> tags found in Server Two content."}}catch(error){container.textContent=`Error fetching content from Server Two: ${error.message}`}}
function copyContentToClipboard(content){const textArea=document.createElement('textarea');textArea.value=content;document.body.appendChild(textArea);textArea.select();document.execCommand('copy');document.body.removeChild(textArea)}
document.addEventListener("DOMContentLoaded",()=>{fetchServerTwoContent()});
