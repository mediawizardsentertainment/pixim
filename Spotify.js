let clickCount = 0;
const links = [
  "https://irritatepillssurly.com/rjme04ys8?key=a0c8c5551172bf0f91afd5b4dca2ce0c",
  "https://irritatepillssurly.com/pf2us6j8y?key=8ef4117604431efed6f9587684c049b8",
  "https://irritatepillssurly.com/anvef6w0h?key=8fb7dc805ef8d1e360dddd9b3352bdba",
  "https://irritatepillssurly.com/x0ep5jde4?key=0e8f5b3feba83e660f5ec8be880d94f8",
  "https://irritatepillssurly.com/bg96zuy8t?key=9cf741645d2db71d10c345c2ffa4c67a"
];

function decodeHTML(html) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent || doc.body.innerText;
}

async function fetchGrammarlyCookies() {
  const url = "https://piximfix.com/cookies/get-spotify-premium-cookies-update-hourly/";
  const preContainer = document.getElementById("cookieContainer");
  const loader = document.getElementById("loadingSpinner");
  const copyAllButton = document.getElementById("copyAllButton");
  const timerContainer = document.getElementById("timerContainer");
  const countdownTimer = document.getElementById("countdownTimer");
  const cookiesUpdatedMessage = document.getElementById("cookiesUpdatedMessage");

  loader.style.display = "block";
  preContainer.style.display = "none";
  copyAllButton.style.display = "none";
  timerContainer.style.display = "none";

  try {
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    if (!response.ok) throw new Error("Please Contact Discord to get latest cookies.");
    const htmlText = await response.text();
    const textHostRegex = /var\s+textHostContent\s*=\s*"([\s\S]*?)";/;
    const matches = htmlText.match(textHostRegex);
    if (matches && matches[1]) {
      let grammarlyCookies = matches[1];
      grammarlyCookies = decodeHTML(grammarlyCookies)
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, "\n")
        .replace(/\\r/g, "\r")
        .replace(/\\\//g, "/")
        .trim();

      let timeLeft = 60;
      timerContainer.style.display = "block";
      const timerInterval = setInterval(function () {
        countdownTimer.textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
          clearInterval(timerInterval);
          preContainer.textContent = grammarlyCookies;
          preContainer.style.display = "block";
          copyAllButton.style.display = "block";
          timerContainer.style.display = "none";
          loader.style.display = "none";
          const currentDate = new Date();
          const formattedDate = currentDate.toLocaleString();
          cookiesUpdatedMessage.textContent = `Cookies Updated: ${formattedDate}`;
          cookiesUpdatedMessage.style.display = "block";
        }
      }, 1000);
    } else {
      showError("Please Contact to Discord to get latest Cookies");
    }
  } catch (error) {
    console.error("Fetch failed, trying to get content from <pre> tag... Error:", error);
    try {
      const response = await fetch("https://edutechack.com/spotify-cookies/");
      console.log("Response from fallback URL status:", response.status);
      if (!response.ok) throw new Error("Failed to fetch content from fallback source.");
      const text = await response.text();
      const preContent = extractPreContent(text);
      if (preContent) {
        preContainer.textContent = preContent;
        preContainer.style.display = "block";
        copyAllButton.style.display = "block";
        loader.style.display = "none";
        cookiesUpdatedMessage.textContent = "Cookies fetched from fallback source";
        cookiesUpdatedMessage.style.display = "block";
      } else {
        showError("Failed to extract content from <pre> tag.");
      }
    } catch (fallbackError) {
      console.error("Fallback fetch also failed:", fallbackError);
      showError(`Error: ${fallbackError.message}`);
    }
  }
}

function extractPreContent(html) {
  const preTagMatch = html.match(/<pre.*?>([\s\S]*?)<\/pre>/);
  console.log("Pre content extracted:", preTagMatch ? preTagMatch[1] : "No <pre> tag found.");
  return preTagMatch ? decodeHTML(preTagMatch[1]).trim() : null;
}

function showError(message) {
  const preContainer = document.getElementById("cookieContainer");
  const loader = document.getElementById("loadingSpinner");
  loader.style.display = "none";
  preContainer.textContent = message;
  preContainer.style.display = "block";
}

function handleCopyButtonClick() {
  clickCount++;
  const copyAllButton = document.getElementById("copyAllButton");
  if (clickCount < 6) {
    copyAllButton.textContent = `${6 - clickCount} click${6 - clickCount > 1 ? "s" : ""} left to copy code`;
    const link = links[clickCount - 1];
    window.open(link, "_blank");
  } else if (clickCount === 6) {
    copyContent();
  }
}

function copyContent() {
  const preContainer = document.getElementById("cookieContainer");
  const textToCopy = preContainer.textContent || preContainer.innerText;
  const copyAllButton = document.getElementById("copyAllButton");
  if (!textToCopy || preContainer.style.display === "none") {
    console.error("No content available to copy.");
    return;
  }
  navigator.clipboard.writeText(textToCopy).then(() => {
    copyAllButton.textContent = "Copied!";
    setTimeout(() => {
      copyAllButton.textContent = "Copy Code";
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy:", err);
    fallbackCopy(textToCopy, copyAllButton);
  });
}

function fallbackCopy(text, button) {
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = text;
  tempTextarea.style.position = "fixed";
  tempTextarea.style.opacity = "0";
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  const successful = document.execCommand("copy");
  document.body.removeChild(tempTextarea);
  if (successful) {
    button.textContent = "Copied!";
    setTimeout(() => {
      button.textContent = "Copy Code";
    }, 2000);
  } else {
    console.error("Failed to copy content.");
  }
}

document.addEventListener("DOMContentLoaded", fetchGrammarlyCookies);
