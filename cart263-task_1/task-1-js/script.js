window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")
    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE */
    // console.log(document.querySelectorAll("p"));
    /***OUTPUT:
     * NodeList(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
     */


    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */
    // console.log(document.querySelector("p"));
    /***OUTPUT:
     * <p id="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            </p>
     */


    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */
    // console.log(document.querySelectorAll(".inner-container"));
    /***OUTPUT:
     * NodeList(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]0: div.inner-container1: div.inner-container2: div.inner-container3: div.inner-container4: div.inner-container5: div.inner-container6: div.inner-container7: div.inner-containerlength: 8[[Prototype]]: NodeList
     */


    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */
    // const imageElements = document.querySelectorAll(".img-container img");
    // const lastElement = imageElements[imageElements.length - 1];
    // console.log(lastElement);
    /***OUTPUT:
     * <img class="img-image" src="task-1-images/seventeen.png">
     */


    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */
    /***CODE */
    // const allH2 = document.querySelectorAll("h2");
    // console.log(allH2);
    // const listH2 = allH2.length;
    // console.log(listH2);
    // const textCont = allH2[0].textContent;
    // console.log(textCont);
    /***OUTPUT:
     * NodeList [h2]
     * 1
     *  The header of this fancy page
     */


    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */
    // console.log(document.querySelector("#parent"));
    /***OUTPUT:
     * <section id="parent">
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/sixteen.png">
                    </div>
                    <p id="2" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/eight.png">
                    </div>
                    <p id="3" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">

                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/eleven.png">
                    </div>
                    <p id="4" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/fifteen.png">
                    </div>
                    <p id="5" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/five.png">
                    </div>
                    <p id="6" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/three.png">
                    </div>
                    <p id="7" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/twelve.png">
                    </div>
                    <p id="8" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/seventeen.png">
                    </div>
                    <p id="9" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
        </section>
     */

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE */
    // document.querySelector("p").textContent = "Text changed by Sean Verba on the following date: 1/28/2025";

    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/
    /***CODE */
    // const contentContainers = document.querySelectorAll(".content-container");
    // contentContainers[0].style.backgroundColor = "orange";
    // contentContainers[1].style.backgroundColor = "purple";

    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE */
    // document.querySelectorAll("img")[0].src = "task-1-images/seven.png"

    /*************************************** */
    /* 4: Select the third paragraph element on the page and
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    /***CODE */
    // document.querySelectorAll("p")[2].innerHTML = "<h2>TEST 123</h2>";

    /*************************************** */
    /* 5: Select the fourth paragraph element on the page and
    add to the existing content an h2 element containing the text `TEST 123`
    /***CODE */
    // document.querySelectorAll("p")[3].innerHTML += "<h2>TEST 123</h2>";

    /*************************************** */
    /* 6: Select the fifth paragraph element on the page and add to the existing content 
    an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    /***CODE */
    // document.querySelectorAll("p")[4].innerHTML += "<img src='task-1-images/one.png' />";
    // document.querySelectorAll("p")[4].classList.add("newStyle");

    /*************************************** */
    /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];,
    then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    Next, iterate over the colors array, and for each color: 
    assign the element from innerContainers variable with the same index 
    (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    a background using that color.
    /***CODE */
    // let colors = ['red', 'blue', 'green', 'orange'];
    // let innerContainers = document.querySelectorAll(".inner-container");
    // for (let i = 0; i < innerContainers.length; i++) {
    //     document.querySelectorAll(".inner-container")[i].style.background = colors[i];
    // };

    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */
    // const allPTagsThree = document.querySelectorAll("p");
    // function customCreateElement(parent) {
    //     let parargraph = document.createElement("p");
    //     parargraph.textContent = "using create Element";
    //     parargraph.style.backgroundColor = "green";
    //     parargraph.style.color = "white";
    //     parent.appendChild(parargraph);
    // }
    // for (let j = 0; j < allPTagsThree.length; j++) {
    //     customCreateElement(allPTagsThree[j]);
    // };

    /***EXPLANATION::
     * 1. I labeled an array of every paragraph element as a variable called allPTagsThree
     * 2. I created a function with a "parent" argument to it
     * 3. I created a new "parargraph" variable which holds my new paragraph element (thought it would be funny to use the typo :) )
     * 4. Changed the new elements text and color parameters
     * 5. Put the "parent" argument as the thing I will append "parargraph" to as a child
     * 6. Made a for loop that iterates for the length of the allPTagsThree array
     * 7. Ran customCreateElement function with "parent" set to be all of the paragraph elements, meaning each time the loop triggers, it adds one new "parargraph" to each paragraph element
     */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv.
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)).
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense...
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/

    /***CODE */
    // const gridSpaces = 10;
    // const squareSize = 41.33;
    // const newGrid = document.querySelector("#new-grid");
    // function customNewBoxCreate(parent) {
    //     let newDiv = document.createElement("div");
    //     newDiv.classList.add("testDiv");
    //     parent.appendChild(newDiv);
    //     return newDiv;
    // }

    // for (let i = 0; i < gridSpaces; i++) {
    //     for (let j = 0; j < gridSpaces; j++) {
    //         returnedDiv = customNewBoxCreate(newGrid);
    //         returnedDiv.style.left = (j * squareSize) + "px";
    //         returnedDiv.style.top = (i * squareSize) + "px";
    //     }
    // }
    // console.log("Elements Created: " + document.querySelectorAll(".testDiv").length);

    /***EXPLANATION::
     * There were 100 elements created.
     * The reason for this lies in how we utilized our nested for loops and our gridSpaces variable.
     * Basically, for each "i", 10 "j"'s were created, each of which held our returnedDiv.
     * This means that by multiplying the amount of "i"'s by the amount of "j"'s we can get our number of returnedDiv's.
     * 10 x 10 = 100
     */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ...
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder),
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red,
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder
        when dividing by three. */

    /***CODE */
    // const newGridThree = document.querySelector("#new-grid-three");
    // for (let i = 0; i < gridSpaces; i++) {
    //     for (let j = 0; j < gridSpaces; j++) {
    //         returnedDiv = customNewBoxCreate(newGridThree);
    //         returnedDiv.style.left = (j * squareSize) + "px";
    //         returnedDiv.style.top = (i * squareSize) + "px";

    //         if (j % 3 === 0) {
    //             returnedDiv.style.background = "red";
    //             returnedDiv.textContent = j % 3;
    //         }
    //         else if (j % 3 === 1) {
    //             returnedDiv.style.background = "orange";
    //             returnedDiv.textContent = j % 3;
    //         }
    //         else if (j % 3 === 2) {
    //             returnedDiv.style.background = "yellow";
    //             returnedDiv.textContent = j % 3;
    //         }
    //     }
    // }

    /***EXPLANATION::
     * 
     * 
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}