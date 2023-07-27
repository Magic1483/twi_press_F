function getElementByXPath(xpath) {
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const element = result.singleNodeValue;
    
    return element;
  }

function waitAndExecuteByXpath(xpath) {
    // const element = document.querySelector(`.${className}`);
    const element = getElementByXPath(xpath);
  
    // Check if the element exists
    if (element) {
      // Execute the provided code
      eval(code);
    } else {
      // If the element does not exist yet, wait for it using MutationObserver
      const observer = new MutationObserver(() => {
        const updatedElement = getElementByXPath(xpath);
        if (updatedElement) {
          // Once the element is found, disconnect the observer and execute the code
          observer.disconnect();
        //   eval(code);
        document.getElementsByClassName('css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-1inkyih r-rjixqe r-bcqeeo r-qvutc0')[0].innerText='уйня'
        document.getElementsByClassName('css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-1inkyih r-rjixqe r-bcqeeo r-qvutc0')[1].innerText='Мявкнуть'
        }
      });
  
      // Start observing the changes in the DOM
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

    

const codeToExecute = `
    document.getElementsByClassName('css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-1inkyih r-rjixqe r-bcqeeo r-qvutc0')[0].innerText='уйня'
    `;


waitAndExecuteByXpath("//span[@class='css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-1inkyih r-rjixqe r-bcqeeo r-qvutc0']");
