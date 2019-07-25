// wrap in document.ready()

// Getting a reference to the article container div we will be rendering all articles inside of
  
// Adding event listeners for dynamically generated buttons for deleting articles,
  // pulling up article notes, saving article notes, and deleting article notes
 

  
    // Empty the article container, run an AJAX request for any saved headlines
    
      // If we have headlines, render them to the page
      
        // Otherwise render a message explaining we have no articles

  
    // This function handles appending HTML containing our article data to the page
    // We are passed an array of JSON containing all available articles in our database
   
    // We pass each article JSON object to the createCard function which returns a bootstrap
    // card with our article data inside
  
    // Once we have all of the HTML for the articles stored in our articleCards array,
    // append them to the articleCards container
 
    // This function takes in a single JSON object for an article/headline
    // It constructs a jQuery element containing all of the formatted HTML for the
    // article card
   


    // We attach the article's id to the jQuery element
    // We will use this when trying to figure out which article the user wants to remove or open notes for
    
    // We return the constructed card jQuery element

 
    // This function renders some HTML to the page explaining we don't have any articles to view
    // Using a joined array of HTML string data because it's easier to read/change than a concatenated string
    
    // Appending this data to the page


  
    // This function handles rendering note list items to our notes modal
    // Setting up an array of notes to render after finished
    // Also setting up a currentNote variable to temporarily store each note

      // If we have no notes, just display a message explaining this
   
      // If we do have notes, go through each one
     
        // Constructs an li element to contain our noteText and a delete button
     
        // Adding our currentNote to the notesToRender array

    // Now append the notesToRender to the note-container inside the note modal


  
    // This function handles deleting articles/headlines
    // We grab the id of the article to delete from the card element the delete button sits inside
   
    // Remove card from page
    
    // Using a delete method here just to be semantic since we are deleting an article/headline
   
      // If this works out, run initPage again which will re-render our list of saved articles
  
  
    // This function handles opening the notes modal and displaying our notes
    // We grab the id of the article to get notes for from the card element the delete button sits inside
   
    // Grab any notes with this headline/article id
   
      // Constructing our initial HTML to add to the notes modal
     
      // Adding the formatted HTML to the note modal
      
      // Adding some information about the article and article notes to the save button for easy access
      // When trying to add a new note
      
      // renderNotesList will populate the actual note HTML inside of the modal we just created/opened
  

  
    // This function handles what happens when a user tries to save a new note for an article
    // Setting a variable to hold some formatted data about our note,
    // grabbing the note typed into the input box
    
      
    // If we actually have data typed into the note input field, format it
    // and post it to the "/api/notes" route and send the formatted noteData as well
  
        // When complete, close the modal
    
    // This function handles the deletion of notes
    // First we grab the id of the note we want to delete
    // We stored this data on the delete button when we created it
   
    // Perform an DELETE request to "/api/notes/" with the id of the note we're deleting as a parameter
    
      // When done, hide the modal
