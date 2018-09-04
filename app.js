// import Listing from "./components/JobListing.js"

(function render(){
    populateJobs()
    document.querySelector(".job-form").addEventListener("submit", newListing)
})();
function populateJobs() {
    const baseURL = 'https://dino-1-server.herokuapp.com'
    const jobList = document.querySelector('#job-listings')

    return fetch(baseURL)
        .then(res => res.json())
        .then(res => res.map(job => makeJobListing(job, jobList)))
}
function newListing(event){
    const jobList = document.querySelector('#job-listings')
    event.preventDefault()
    let formData = new FormData(document.querySelector(".job-form"))
    let dataObj = { "title":formData.get("title"),
        "pay":formData.get("pay"),
        "description": formData.get("description"),
        "interested": []
    }
    makeJobListing(dataObj, jobList, true)
}
function makeJobListing(jobData, list, isNew){
    let li = document.createElement("li")
    li.innerHTML = `
        <h3>${jobData.title}</h3>
        <small>${jobData.pay}</small>
        <p>${jobData.description}</p>
        <small>${jobData.interested.length} dinosaurs are interested in this job
    `
    if (isNew){
        list.prepend(li)
    } else {
        list.appendChild(li)
    }
}
