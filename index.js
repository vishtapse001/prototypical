//step 1

function createAnimal(name, sound) {
    return {
        name,
        sound,
        makeSound() {
            console.log(this.sound);
        }
    };
}

//step2

function createDog(name, sound, breed) {
    // Inherit properties from createAnimal
    const dog = createAnimal(name, sound);

    // Add additional properties and methods specific to createDog
    dog.breed = breed;
    dog.fetch = function() {
        console.log(`${this.name} fetches the ball!`);
    };

    return dog;
}

//step3

const buddy = createDog("Buddy", "Woof", "Labrador");

//step4

buddy.makeSound(); // Output: Woof
buddy.fetch();     // Output: Buddy fetches the ball!
