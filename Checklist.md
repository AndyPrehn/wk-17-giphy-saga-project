Base mode
    Search view
     [x] Allow a user to enter a search string and submit a search request. 
        - need input of test and button
        - button: dispatch to a saga 
    [x] Query the Giphy API Search Endpoint with the given search string FROM THE SERVER. 
        - saga to generator function 
        - gen fun to axios to router to API - API return to router
    [x] Display the results on the DOM. 
        - router returnd=s to gen func 
        - gen func dispatch to redux 
        - redux to set results as var in router store 
        - call hook useSelector 
    [] Allow a user to "favorite" any of the resulting images. You'll need to think about what information to save to your own database. Generally you only store the minimum needed to show    this image again on the Favorites View.
    
Favorites view
    []Allow a user to see all of the Giphy images they have favorited. The actual images need to appear on the DOM.
    [] Allow a user to set a category for a favorite image.
        [] Each favorite image can only have one category at a time.
        [] The category needs to be one of the categories in the database.

Router files
  
[] POST /api/favorites (incomplete)
    For adding a new favorite image. You'll need to think about what is needed. Does it need a category?

[] PUT /api/favorites/:id (incomplete)
    For setting a category on an image. It expects both a route parameter and data body. Feel free to change it as needed.

Stretch features
    [] Allow favorites to be removed/unfavorited.
    [] Allow for a favorite to have many categories instead of just one.
    [] Implement a pagination feature for the Giphy search results.
    [] Add another view that allows a user to manage the categories:
        User should be able to create a new category.
        User should be able to edit an existing category.
        User should be able to delete/remove an existing category.
