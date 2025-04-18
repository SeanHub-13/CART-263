window.onload = async function () {
    console.log("task 7-8");
    try {
        const response = await fetch('data/iris.json');
        if (!response.ok) {
            throw new Error("HTTP error! status: ${ response.status }");
        }
        const data = await response.json();
        console.log(data);
        // Object properties: sepalLength, sepalWidth, petalLength, petalWidth, species

        let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];
        const irisesWithColors = data.map(iris => {
            return {
                ...iris,
                color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
            };
        });

        console.log(irisesWithColors);

        const filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);
        console.log(filteredIrises);

        // Calculate the average petalLength using reduce
        const totalPetalLength = irisesWithColors.reduce((sum, iris) => sum + iris.petalLength, 0);
        const averagePetalLength = totalPetalLength / irisesWithColors.length;

        console.log("Average Petal Length: ", averagePetalLength);

        // Find an iris object with petalWidth > 1.0
        const irisWithLargePetalWidth = irisesWithColors.find(iris => iris.petalWidth > 1.0);
        console.log('Iris with petalWidth > 1.0: ', irisWithLargePetalWidth);

        // Check if any iris object has a petalLength > 10
        const hasLargePetalLength = irisesWithColors.some(iris => iris.petalLength > 10);
        console.log("Is there any iris with petalLength > 10: ", hasLargePetalLength);

        // Check if any iris object has a petalLength == to 4.2
        const hasSamePetalLength = irisesWithColors.some(iris => iris.petalLength == 4.2);
        console.log("Is there any iris with petalLength == 4.2: ", hasSamePetalLength);

        // Check if every iris object has a petalWidth < than 3
        const everyLessPetalWidth = irisesWithColors.every(iris => iris.petalWidth < 3);
        console.log("Is every iris with petalWidth < 3: ", everyLessPetalWidth);

        // Check if every iris object has a petalWidth < than 3
        const everyMoreSepalWidth = irisesWithColors.every(iris => iris.sepalWidth > 1.2);
        console.log("Is every iris with sepalWidth > 1.2: ", everyMoreSepalWidth);

        // Make an array with all iris objects sorted by petalWidth (lowest to highest)
        const irisesWithColorsSorted = irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);
        console.log(irisesWithColorsSorted);

        // Importing and assigning audio of SAM singing
        const sing = "sing.wav";
        const audio = document.createElement("audio");
        audio.src = sing;

        // Iris class makes a new eye randomly placed eye, with its images, border, and audio volume changing based on petalWidth
        class iris {
            // Passing along the required data
            constructor(irisData, audio) {
                this.data = irisData;
                // These are all the images, the open eyes and their closed counterparts
                this.openImages = ["eyezor_1.png", "eyezor_2.png", "eyezor_3.png", "eyezor_4.png", "eyezor_5.png"];
                this.closedImages = ["zoreye_1.png", "zoreye_2.png", "zoreye_3.png", "zoreye_4.png", "zoreye_5.png"];
                this.createEye();
            }

            // This function determines the index we will give an eye based on its petalWidth
            getImageIndex() {
                this.width = this.data.petalWidth;
                // Checks the width value of the petals and returns an index number 
                if (this.width <= 0.5) return 0;
                else if (this.width <= 1 && this.width > 0.5) return 1;
                else if (this.width <= 1.5 && this.width > 1) return 2;
                else if (this.width <= 2 && this.width > 1.5) return 3;
                else return 4;
            }

            // This is the main function for creating an eye
            createEye() {
                // Creates a new divider element to help with styling the position of the image
                this.imgBox = document.createElement("div");
                // Creates the actual eye image element
                this.img = document.createElement("img");

                // Calls the getImageIndex() function and assigns the returned value to this.index
                this.index = this.getImageIndex();
                // Assigns the eye image based on the index
                this.img.src = this.openImages[this.index];
                this.img.style.width = "50px";
                this.img.style.height = "50px";

                // This logic check gives the image a border based on its index
                if (this.index === 0) {
                    this.img.style.border = "1px solid cyan";
                }
                else if (this.index === 1) {
                    this.img.style.border = "1.5px solid green";
                }
                else if (this.index === 2) {
                    this.img.style.border = "2px solid yellow";
                }
                else if (this.index === 3) {
                    this.img.style.border = "2.5px solid orange";
                }
                else if (this.index === 4) {
                    this.img.style.border = "3px solid red";
                }

                //Assigning the image dividers position as absolute allows it to go anywhere without being moved by other elements
                this.imgBox.style.position = "absolute";
                // Just some calculations to determine where the image can spawn, keeps it within full visibility
                this.imgBox.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
                this.imgBox.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

                // This listener activates when the mouse enters the image, it swaps the image for a closed version and gives it an appropriate volume value before playing SAM's song
                this.img.addEventListener("mouseenter", () => {
                    this.img.src = this.closedImages[this.index];
                    audio.volume = 0.1 * (this.index + 1);
                    audio.play();
                });

                // This listener activates when the mouse leaves the image, it swaps the image for the open version again and pauses SAM's song
                this.img.addEventListener("mouseleave", () => {
                    this.img.src = this.openImages[this.index];
                    audio.pause();
                });

                // This just finally appends our new elements to the div / page respectively
                this.imgBox.appendChild(this.img);
                document.body.appendChild(this.imgBox);
            }
        }

        // This is the starter button, nothing special really but I need the user to interact with something (click) before audio can play
        const button = document.createElement("button");
        button.innerText = "👁️";
        button.style.position = "fixed";
        button.style.top = "50%";
        button.style.left = "50%";
        button.style.borderRadius = "10px";
        button.style.backgroundColor = "#ffffff";
        button.style.cursor = "pointer";

        // On click it makes a new iris instance for each iris in the dataset, then removes the button
        button.addEventListener("click", () => {
            irisesWithColorsSorted.forEach(irisData => {
                new iris(irisData, audio);
            });
            button.remove();
        });

        // Appends the button to the document
        document.body.appendChild(button);

    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}