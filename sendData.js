export function sendData(evt){
    document.getElementById('ip1').value = evt.target.innerText
    document.getElementById('ip2').value = evt.target.getAttribute("title")
    document.getElementById('ip3').value = (evt.target.getAttribute("data-deadline") - evt.target.getAttribute("data-startTime"))/1000
    evt.target.remove()
}