const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const themeText = document.querySelector(".theme-text");
const pageBodyElement = document.querySelector("#wrapper");
const appTitle = document.querySelector(".title");
const searchBoxElement = document.querySelector(".search-box-container");
const dataContainerElement = document.querySelector(".container-2");
const inputBoxElement = document.querySelector(".input-Box");
let isBlack = true;
let searchBtnElement = document.querySelector(".search-dev-button");
let developerAccountId;

/** DEVELOPER DATA HTML ELEMENTS **/
let developerNameElement = document.querySelector(".name-row-1");
let developerJoiningDateElement = document.querySelector(".joining-date-row-1");
let developerImageElement = document.querySelector(".developer-image");
let developerGitHubIdElement = document.querySelector(".git-hub-id");
let developerBioElement = document.querySelector(".dev-bio");
let developerReposDataElement = document.querySelector(".data-1");
let developerReposTitle = document.querySelector(".title-1");
let developerFolowersDataElement = document.querySelector(".data-2");
let developerFollowersTitle = document.querySelector(".title-2");
let developerFollowingDataElement = document.querySelector(".data-3");
let developerFollowingTitle = document.querySelector(".title-3");
let developerLocationElement = document.querySelector(".location-data");
let developerLocationIconElement = document.querySelector(".location-icon");
let developerTwitterUrlElement = document.querySelector(".twitter-data");
let developerTwitterIconElement = document.querySelector(".twitter-icon");
let developerPortfolioElement = document.querySelector(".portfolio-data");
let developerPortfolioIconElement = document.querySelector(".portfolio-icon");
let developerCompanyElement = document.querySelector(".company-data");
let developerCompanyIconElement = document.querySelector(".company-icon");
let developerDataContainerElement = document.querySelector(".data-container-row-3");


let updatePlaceholderColor = (color) => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `#myInput::placeholder { color: ${color}; }`;
    document.head.appendChild(styleElement);
}

  icon1.addEventListener('click', () => {
      icon1.style.display = 'none';
      icon2.style.display = 'block';
      themeText.innerHTML = 'Light';
      pageBodyElement.style.backgroundColor = '#161d2e';
      appTitle.style.color = 'white';
      themeText.style.color = 'white';
      icon2.style.color = 'white';
      searchBoxElement.style.backgroundColor = '#202a45';
      dataContainerElement.style.backgroundColor = '#202a45';
      inputBoxElement.style.backgroundColor = '#202a45';
      inputBoxElement.style.color = 'white';
      developerNameElement.style.color = 'white';
      developerGitHubIdElement.style.color = 'white';
      developerJoiningDateElement.style.color = 'white';
      developerBioElement.style.color = 'white';
      developerReposDataElement.style.color = 'white';
      developerFolowersDataElement.style.color = 'white';
      developerFollowingDataElement.style.color = 'white';
      developerReposTitle.style.color = 'white';
      developerFollowersTitle.style.color = 'white';
      developerFollowingTitle.style.color = 'white';
      developerLocationElement.style.color = 'white';
      developerTwitterUrlElement.style.color = 'white';
      developerPortfolioElement.style.color = 'white';
      developerCompanyElement.style.color = 'white';
      developerLocationIconElement.style.color = 'white';
      developerTwitterIconElement.style.color = 'white';
      developerPortfolioIconElement.style.color = 'white';
      developerCompanyIconElement.style.color = 'white';
      developerDataContainerElement.style.backgroundColor = '#161d2e'
      if (isBlack) 
        {
            updatePlaceholderColor('white');
        } else {
            updatePlaceholderColor('black');
        }
        isBlack = !isBlack;
  });

  icon2.addEventListener('click', () => {
      icon2.style.display = 'none';
      icon1.style.display = 'block';
      themeText.innerHTML = 'Dark';
      pageBodyElement.style.backgroundColor = '#fff3d3';
      appTitle.style.color = 'black';
      themeText.style.color = 'black';
      icon1.style.color = 'black';
      searchBoxElement.style.backgroundColor = 'white';
      dataContainerElement.style.backgroundColor = 'white';
      inputBoxElement.style.backgroundColor = 'white';
      inputBoxElement.style.color = 'black';
      developerNameElement.style.color = 'black';
      developerJoiningDateElement.style.color = 'black';
      developerGitHubIdElement.style.color = 'black'
      developerBioElement.style.color = 'black';
      developerReposDataElement.style.color = 'black';
      developerFolowersDataElement.style.color = 'black';
      developerFollowingDataElement.style.color = 'black';
      developerReposTitle.style.color = 'black';
      developerFollowersTitle.style.color = 'black';
      developerFollowingTitle.style.color = 'black';
      developerLocationElement.style.color = 'black';
      developerTwitterUrlElement.style.color = 'black';
      developerPortfolioElement.style.color = 'black';
      developerCompanyElement.style.color = 'black';
      developerLocationIconElement.style.color = 'black';
      developerTwitterIconElement.style.color = 'black';
      developerPortfolioIconElement.style.color = 'black';
      developerCompanyIconElement.style.color = 'black';
      developerDataContainerElement.style.backgroundColor = '#fff3d3'
      if (isBlack) 
        {
          updatePlaceholderColor('white');
        } 
        else 
        {
          updatePlaceholderColor('black');
        }
    isBlack = !isBlack;
  });


  searchBtnElement.addEventListener('click',()=>{
    developerAccountId = inputBoxElement.value;
    console.log(`GIT USER NAME SEARCHED: ${developerAccountId}`);
    inputBoxElement.value = '';
    getDeveloperData();
  });

  async function getDeveloperData(){
    let responseData = await fetch(`https://api.github.com/users/${developerAccountId}`);
    let developerData = await responseData.json();
    console.log(developerData);
    developerNameElement.innerHTML = '';
    developerJoiningDateElement.innerHTML = '';
    developerGitHubIdElement.innerHTML = '';
    developerBioElement.innerHTML = '';
    developerReposDataElement.innerHTML = '';
    developerFolowersDataElement.innerHTML = '';
    developerFollowingDataElement.innerHTML = '';
    developerLocationElement.innerHTML = '';
    developerTwitterUrlElement.innerHTML = '';
    developerPortfolioElement.innerHTML = '';
    developerCompanyElement.innerHTML = '';
    renderDeveloperData(developerData);
  }

  function renderDeveloperData(developerData){
    let developerName = developerData.name;
    let developerImage = developerData.avatar_url;
    let developerJoiningDate = developerData.created_at;
    console.log(`DEVELOPER NAME: ${developerName}`);
    console.log(`DEVELOPER JOINING DATE: ${developerJoiningDate}`);
    let dateObj = getDateTime(developerJoiningDate);
    developerImageElement.src = developerImage;
    developerNameElement.innerHTML = developerName;
    developerJoiningDateElement.innerHTML = `Joined ${dateObj.date} ${dateObj.month} ${dateObj.year}`;
    developerGitHubIdElement.innerHTML = '@' + developerData.login;
    developerGitHubIdElement.href = developerData.html_url;
    developerBioElement.innerHTML = developerData.bio;
    if(developerBioElement.innerHTML== ''){
      developerBioElement.innerHTML = "Not Available";
    }
    developerReposDataElement.innerHTML = developerData.public_repos;
    if(developerReposDataElement.innerHTML == ''){
      developerReposDataElement.innerHTML = 0;
    }
    developerFolowersDataElement.innerHTML = developerData.followers;
    if(developerFolowersDataElement.innerHTML == ''){
      developerFolowersDataElement.innerHTML = 0;
    }
    developerFollowingDataElement.innerHTML = developerData.following;
    if(developerFollowingDataElement.innerHTML == ''){
      developerFollowingDataElement.innerHTML = 0;
    }
    developerLocationElement.innerHTML = developerData.location;
    if(developerLocationElement.innerHTML == ''){
      developerLocationElement.innerHTML = "Not Available";
    }
    developerTwitterUrlElement.innerHTML = developerData.twitter_username;
    if(developerTwitterUrlElement.innerHTML == ''){
      developerTwitterUrlElement.innerHTML = "Not Available";
    }
    developerPortfolioElement.innerHTML = developerData.blog;
    if(developerPortfolioElement.innerHTML == ''){
      developerPortfolioElement.innerHTML = "Not Available";
      developerPortfolioElement.href = '';
    }
    developerCompanyElement.innerHTML = developerData.company;
    if(developerCompanyElement.innerHTML == ''){
      developerCompanyElement.innerHTML = "Not Available";
    }
  }


  function getDateTime(developerJoiningDate){
    let obj = {
      year: '',
      month: '',
      date: ''
    };

    // Given timestamp
let timestamp = developerJoiningDate;

// Convert to Date object
let dateObj = new Date(timestamp);

// Extract year, month name, and date
let year = dateObj.getUTCFullYear();
let monthName = dateObj.toLocaleString('default', { month: 'short' });
let day = dateObj.getUTCDate();

console.log("Year:", year);
console.log("Month Name:", monthName);
console.log("Date:", day);

obj.date = day;
obj.month = monthName;
obj.year = year;
return obj;

  }


