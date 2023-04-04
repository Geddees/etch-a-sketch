Instructions:
    Create a 16x16 grid of square divs
    Create a hover effect so the squares change color 
    Add a button that asks the user for a number of squares per side
    Make sure the the total # of squares are generated in the same areas as before
    (So entering 64 would make a 64x64 grid)
    
    Extra credit: 
    Try to make the mouseover change the grid to a random color
    Also could make each pass through change the grid by 10% */

    Step 1:
        Make a function that generates a div inside main-container
        Add a function that handles changing the div colors on hover

        Needs to go: to handle hover change => func to handle generation of divs
            => generator func needs to also add event listeners inside of the func and use
            the outer hover change func to do that.
        Add an event listener to all of them so they change black on hover
        Add a "shake" button that erases the squares */