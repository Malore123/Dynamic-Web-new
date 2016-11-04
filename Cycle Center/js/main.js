//use jQuery to select the HTML elements we're going to manipulate
var GoButton = $ ('#home button')
var homeDropdown = $ ('#home select')
var HomeSection = $ ('#home')
var ResultsSection = $ ('#results') 
var ResultsBackButton = $ ('#results .back')

// tell the GO button to do something when we click it 
GoButton.click(function ()
{
    
 //capture the user option
 var chosenOption = homeDropdown.val()
 console.log ("You picked" + chosenOption)
 
 // filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, chosenOption);
    console.log(resultsList);

    
    
 HomeSection.hide()
 ResultsSection.show()
})

// tell the Back button to do something whe we click it 

ResultsBackButton.click(function (){
 ResultsSection.hide()
 HomeSection.show()
})