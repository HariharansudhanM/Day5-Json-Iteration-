let Resume = {
  Name: "Hari",
  age: "25",
  college: "KCT",
  Grafuate: "BE",
  Stream: "ECE",
  "Work Ex": "3.6",
};

for (const key in Resume) {
  {
    console.log(Resume[key]);
  }
}

for (const iterator of Resume) {
}

let iterate = Resume.forEach((element) => {
  console.log(element.key);
});

//The window.screen object contains information about the user's screen.
//the window contains all the global object, function etc. e.g, window.screen, window.document.write
//Document
// he document object represents your web page.

// If you want to access any element in an HTML page, you always start with accessing the document object.

// Below are some examples of how you can use the document object to access and manipulate HTML.
