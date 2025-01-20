let clickCount=0;const links=["https://irritatepillssurly.com/gii9ia68e?key=aec9f52868065a0dba9b446b6bfc7d5e","https://irritatepillssurly.com/n5zeue1rt?key=4118d6de05154a8b409f693189aa5c8b","https://irritatepillssurly.com/mda3nbcax3?key=d0b8d02243b60d8fe5149eaa478213ef","https://irritatepillssurly.com/hqcy31erjz?key=cab5ae9f04479c27ecf27ed5f4a7496b","https://irritatepillssurly.com/dzuxwijy?key=d6a729b20e0b3c46d15e4478d0ee1d4b"];const proxies=["https://corsproxy.io/?url=","https://api.allorigins.win/raw?url=","https://codelab.dev/proxy?url="];function decodeHTML(html){var parser=new DOMParser();var doc=parser.parseFromString(html,'text/html');return doc.body.textContent||doc.body.innerText}
async function fetchGrammarlyCookies(){const url="https://piximfix.com/cookies/get-chatgpt-plus-cookies-updats-hourly/";const preContainer=document.getElementById("cookieContainer");const loader=document.getElementById("loadingSpinner");const copyAllButton=document.getElementById("copyAllButton");const timerContainer=document.getElementById("timerContainer");const countdownTimer=document.getElementById("countdownTimer");const cookiesUpdatedMessage=document.getElementById("cookiesUpdatedMessage");const customHeading=document.getElementById("customHeading");loader.style.display="block";preContainer.style.display="none";copyAllButton.style.display="none";timerContainer.style.display="none";customHeading.style.display="none";try{const response=await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(url)}`);if(!response.ok)throw new Error("Failed to fetch the page content");const htmlText=await response.text();const textHostRegex=/var\s+textHostContent\s*=\s*"([\s\S]*?)";/;const matches=htmlText.match(textHostRegex);if(matches&&matches[1]){let grammarlyCookies=matches[1];grammarlyCookies=decodeHTML(grammarlyCookies).replace(/\\"/g,'"').replace(/\\\\/g,'\\').replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\\//g,"/").trim();let timeLeft=60;timerContainer.style.display="block";const timerInterval=setInterval(function(){countdownTimer.textContent=timeLeft;timeLeft--;if(timeLeft<0){clearInterval(timerInterval);preContainer.textContent=grammarlyCookies;preContainer.style.display="block";copyAllButton.style.display="block";timerContainer.style.display="none";loader.style.display="none";const currentDate=new Date();const formattedDate=currentDate.toLocaleString();cookiesUpdatedMessage.textContent=`Cookies Updated: ${formattedDate}`;cookiesUpdatedMessage.style.display="block";customHeading.style.display="block"}},1000)}else{showError("Failed to extract cookies from the content.")}}catch(error){showError(`Error: ${error.message}`)}}
function showError(message){const preContainer=document.getElementById("cookieContainer");const loader=document.getElementById("loadingSpinner");loader.style.display="none";preContainer.textContent=message;preContainer.style.display="block"}
function handleCopyButtonClick(){clickCount++;const copyAllButton=document.getElementById("copyAllButton");if(clickCount<6){copyAllButton.textContent=`${6 - clickCount} click${6 - clickCount > 1 ? "s" : ""} left to copy code`;const link=links[clickCount-1];window.open(link,"_blank")}else if(clickCount===6){copyContent()}}
function copyContent(){const preContainer=document.getElementById("cookieContainer");const textToCopy=preContainer.textContent||preContainer.innerText;const copyAllButton=document.getElementById("copyAllButton");if(!textToCopy||preContainer.style.display==="none"){console.error("No content available to copy.");return}
navigator.clipboard.writeText(textToCopy).then(()=>{copyAllButton.textContent="Copied!";setTimeout(()=>{copyAllButton.textContent="Copy Code"},2000)}).catch(err=>{console.error("Failed to copy:",err);fallbackCopy(textToCopy,copyAllButton)})}
function fallbackCopy(text,button){const tempTextarea=document.createElement("textarea");tempTextarea.value=text;tempTextarea.style.position="fixed";tempTextarea.style.opacity="0";document.body.appendChild(tempTextarea);tempTextarea.select();const successful=document.execCommand("copy");document.body.removeChild(tempTextarea);if(successful){button.textContent="Copied!";setTimeout(()=>{button.textContent="Copy Code"},2000)}else{console.error("Failed to copy content.")}}
document.addEventListener("DOMContentLoaded",()=>{setTimeout(fetchGrammarlyCookies,4000)});
