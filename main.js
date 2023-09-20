const request = new XMLHttpRequest();
request.open("GET", "data.json");
request.setRequestHeader("Content-type", "application/json");

request.onload = () => {
    const jsonData = JSON.parse(request.responseText);
    console.log(jsonData);
}

request.send();
