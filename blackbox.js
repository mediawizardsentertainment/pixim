let clickCount=0;const links=["https://irritatepillssurly.com/x6k4hke8?key=2072a5a64db977fc6d700040b5fb42bf","https://irritatepillssurly.com/g9mj013eif?key=62fb2ef84707963234ab747dd6ee041c","https://irritatepillssurly.com/pfbc4v6gb?key=21ee56e8e18bf973e08e3d253147e21b","https://irritatepillssurly.com/dkvxdr5qtj?key=e53a9497d2285856f94848eb29eaec0b","https://irritatepillssurly.com/gii9ia68e?key=aec9f52868065a0dba9b446b6bfc7d5e"];const proxies=["https://throbbing-violet-6c5c.subiqa-bano.workers.dev/?url=",];function decodeHTML(html){var parser=new DOMParser();var doc=parser.parseFromString(html,'text/html');return doc.body.textContent||doc.body.innerText}
async function fetchGrammarlyCookies(){const url="https://piximfix.com/cookies/get-blackbox-ai-cookies-update-hourly/";const preContainer=document.getElementById("cookieContainer");const loader=document.getElementById("loadingSpinner");const copyAllButton=document.getElementById("copyAllButton");const timerContainer=document.getElementById("timerContainer");const countdownTimer=document.getElementById("countdownTimer");const cookiesUpdatedMessage=document.getElementById("cookiesUpdatedMessage");const customHeading=document.getElementById("customHeading");loader.style.display="block";preContainer.style.display="none";copyAllButton.style.display="none";timerContainer.style.display="none";customHeading.style.display="none";try{const response=await fetch(`https://throbbing-violet-6c5c.subiqa-bano.workers.dev/?url=${encodeURIComponent(url)}`);if(!response.ok)throw new Error("Failed to fetch the page content");const htmlText=await response.text();const textHostRegex=/var\s+textHostContent\s*=\s*"([\s\S]*?)";/;const matches=htmlText.match(textHostRegex);if(matches&&matches[1]){let grammarlyCookies=matches[1];grammarlyCookies=decodeHTML(grammarlyCookies).replace(/\\"/g,'"').replace(/\\\\/g,'\\').replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\\//g,"/").trim();let timeLeft=60;timerContainer.style.display="block";const timerInterval=setInterval(function(){countdownTimer.textContent=timeLeft;timeLeft--;if(timeLeft<0){clearInterval(timerInterval);preContainer.textContent=grammarlyCookies;preContainer.style.display="block";copyAllButton.style.display="block";timerContainer.style.display="none";loader.style.display="none";const currentDate=new Date();const formattedDate=currentDate.toLocaleString();cookiesUpdatedMessage.textContent=`Cookies Updated: ${formattedDate}`;cookiesUpdatedMessage.style.display="block";customHeading.style.display="block"}},1000)}else{showError("Failed to extract cookies from the content.")}}catch(error){showError(`Error: ${error.message}`)}}
function showError(message){const preContainer=document.getElementById("cookieContainer");const loader=document.getElementById("loadingSpinner");loader.style.display="none";preContainer.textContent=message;preContainer.style.display="block"}
function handleCopyButtonClick(){clickCount++;const copyAllButton=document.getElementById("copyAllButton");if(clickCount<6){copyAllButton.textContent=`${6 - clickCount} click${6 - clickCount > 1 ? "s" : ""} left to copy code`;const link=links[clickCount-1];window.open(link,"_blank")}else if(clickCount===6){copyContent()}}
function copyContent(){const preContainer=document.getElementById("cookieContainer");const textToCopy=preContainer.textContent||preContainer.innerText;const copyAllButton=document.getElementById("copyAllButton");if(!textToCopy||preContainer.style.display==="none"){console.error("No content available to copy.");return}
navigator.clipboard.writeText(textToCopy).then(()=>{copyAllButton.textContent="Copied!";setTimeout(()=>{copyAllButton.textContent="Copy Code"},2000)}).catch(err=>{console.error("Failed to copy:",err);fallbackCopy(textToCopy,copyAllButton)})}
function fallbackCopy(text,button){const tempTextarea=document.createElement("textarea");tempTextarea.value=text;tempTextarea.style.position="fixed";tempTextarea.style.opacity="0";document.body.appendChild(tempTextarea);tempTextarea.select();const successful=document.execCommand("copy");document.body.removeChild(tempTextarea);if(successful){button.textContent="Copied!";setTimeout(()=>{button.textContent="Copy Code"},2000)}else{console.error("Failed to copy content.")}}
document.addEventListener("DOMContentLoaded",fetchGrammarlyCookies);
