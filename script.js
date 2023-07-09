var storySearch = document.getElementById('search_button');
var storyInput = document.getElementById('searchInput');
var storyDisplay = document.getElementById('display_text');
var addSelect = document.getElementById('Stories');
var addStories = document.getElementById('check_story');


var requestUrl = "https://shortstories-api.onrender.com/stories";


fetch(requestUrl)
  .then(function(response){
  return response.json();
  })
  .then(function(data){
    console.log(data);

    

    for(i=0;i<data.length;i++){
      var createStoriesOptions = document.createElement('option');
      createStoriesOptions.textContent = data[i].title;
      addSelect.appendChild(createStoriesOptions);
    }

    $(storySearch).on("click",function(){
      $(addStories).empty();
      var e = document.getElementById('Stories');
      var createPara = document.createElement('p');
      var createTitle = document.createElement('H1');
      console.log(e.value);
      for(i=0;i<data.length;i++){
      if(e.value === data[i].title){

        createPara.textContent = data[i].story;
        createTitle.textContent = data[i].title;
        addStories.appendChild(createTitle);
        addStories.appendChild(createPara);


      }
    }
      
    });



  });
