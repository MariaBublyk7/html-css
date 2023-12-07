const modal = document.getElementsByClassName("modal");
const modalBtn = document.getElementsByClassName("modalBtn");
const modalCard = document.getElementsByClassName("modalCard"); 

for (var i = 0; i < modalBtn.length; i++) {
  (function() {
    var j = i;
    modalBtn[j].addEventListener("click", function() {
      openModal(j)
    });
  })();
}

for (var i = 0; i < modalCard.length; i++) {
  (function() {
    var k = i;
    modalCard[k].addEventListener("click", function() {
      openModal(k)
    });
  })();
}

function openModal(j) {
  modal[j].style.display = "block";
}

function closeModal(c) {
  modal[c].style.display = "none";
}

function linkHandler(event) {
  event.stopPropagation()
}

const getStartedModal1Button = document.getElementById('#getStartedModal1');
getStartedModal1Button.addEventListener('click', () => {
  makeHttpPostRequest('Modal 1', 'Click On Get Started Button From Modal 1', () => {
    const parentDiv = document.getElementById('simpleModal');
    parentDiv.style.display = 'none';
  });
});
const cancel1Buttons = document.getElementsByClassName('cancel-modal1');
for (let cancelBtn of cancel1Buttons) {
  cancelBtn.addEventListener('click', () => {
    // Http Post
    makeHttpPostRequest('Modal 1', 'Click On Close Button From Modal 1', () => {
      const parentDiv = document.getElementById('simpleModal');
      parentDiv.style.display = 'none';
    });
  });
}

const getStartedModal2Button = document.getElementById('#getStartedModal2');
getStartedModal2Button.addEventListener('click', () => {
  makeHttpPostRequest('Modal 2', 'Click On Get Started Button From Modal 2', () => {
    const parentDiv = document.getElementById('simpleModal2');
    parentDiv.style.display = 'none';
  });
});
const cancel2Buttons = document.getElementsByClassName('cancel-modal2');
for (let cancelBtn of cancel2Buttons) {
  cancelBtn.addEventListener('click', () => {
    // Http Post
    makeHttpPostRequest('Modal 2', 'Click On Close Button From Modal 2', () => {
      const parentDiv = document.getElementById('simpleModal2');
      parentDiv.style.display = 'none';
    });
  });
}

const getStartedModal3Button = document.getElementById('#getStartedModal3');
getStartedModal3Button.addEventListener('click', () => {
  makeHttpPostRequest('Modal 3', 'Click On Get Started Button From Modal 3', () => {
    const parentDiv = document.getElementById('simpleModal3');
    parentDiv.style.display = 'none';
  });
});
const cancel3Buttons = document.getElementsByClassName('cancel-modal3');
for (let cancelBtn of cancel3Buttons) {
  cancelBtn.addEventListener('click', () => {
    // Http Post
    makeHttpPostRequest('Modal 3', 'Click On Close Button From Modal 3', () => {
      const parentDiv = document.getElementById('simpleModal3');
      parentDiv.style.display = 'none';
    });
  });
}

function makeHttpPostRequest(title, body, onLoadFunction = null) {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const postData = {
    title: title,
    body: body,
    userId: 1,
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', apiUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('POST request successful', JSON.parse(xhr.responseText));
      if (onLoadFunction) {
        onLoadFunction();
      }
    } else {
      console.error('POST request failed');
    }
  };

  xhr.onerror = function () {
    console.error('Network error');
  };

  xhr.send(JSON.stringify(postData));
}