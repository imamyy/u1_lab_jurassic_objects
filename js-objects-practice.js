// Create your JS object representing your favorite movie
const myFavoriteMovie = {
  title: "Harry Potter",
  director: "Mike Newell",
  actors: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Tom Felton"],
  releaseYear: 2001,
  duration: 120,
};
console.log(myFavoriteMovie.title);
console.log(myFavoriteMovie.director);
console.log(myFavoriteMovie.releaseYear);
myFavoriteMovie.duration = 125;
console.log(myFavoriteMovie.duration);

// Hammonds Mines
// Part 1
const snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor",
};

// Create a varible called guestOfHonor and assign its value to the name of the paleontologist in snakewaterMontana.

const guestOfHonor = snakewaterMontana.paleontologist;
console.log(guestOfHonor);

// Access the value of the specimen key found in the snakewaterMontana object and store it in a varible called cleverGirl

const cleverGirl = snakewaterMontana.specimen;
console.log(cleverGirl);
// Part 2
const nicaragua = {
  depth: "200 meters",
  annualBudget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor",
  ],
};
// Store the array of specimens of this site into a variable called nicaraguanSpecimens

const nicaraguanSpecimens = nicaragua["specimens"];
console.log(nicaraguanSpecimens);

// Make a variable called favoriteSpecimen and assign its value to your favorite dinosaur within nicaraguanSpecimens(can you do this by referencing the nicaragua object itself?)

const favoriteSpecimen = nicaragua["specimens"][0];
console.log(favoriteSpecimen);

// Add 250000 to the annual budget of this site

nicaragua.annualBudget += 250000;
console.log(nicaragua.annualBudget);

// Part 3
const hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annualBudget: 1000000,
    specimens: ["Dilophosaurus", "Brachiosaurus"],
  },
  mexico: {
    depth: "350 meters",
    annualBudget: 900000,
    specimens: ["Gallimimus", "Parasaurolophus"],
  },
};

//Access the depth of John Hammond's mine in Mexico, store the depth of the Mexican mine into an appropriately named variable.

const mexicanMineDepth = hammondsMines.mexico.depth;
console.log(mexicanMineDepth);

// Access the annual budget for Hammond's mine in Buenos Airies, store the annual budget for Hammond's mine in Buenos Aires.

const buenosAnnualBudget = hammondsMines.buenos_aires.annualBudget;
console.log(buenosAnnualBudget);

// Access and console the dinosaur DNA specimens found in Buenos Aires.

const dna = hammondsMines.buenos_aires["specimens"];
console.log(dna);

// Insert Nicaragua into hammondsMines.

hammondsMines.nicaragua = nicaragua;
console.log(hammondsMines);

// Create three variables to store the annual budgets for each mine into them.
const mexicoAnnualBudget = hammondsMines.mexico.annualBudget;
console.log(mexicoAnnualBudget);
const nicaraguaAnnualBudget = hammondsMines.nicaragua.annualBudget;
console.log(nicaraguaAnnualBudget);
console.log(buenosAnnualBudget);

// Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.

const totalBudget = parseInt(
  mexicoAnnualBudget + nicaraguaAnnualBudget + buenosAnnualBudget,
  10
);
console.log(totalBudget);

// Access and console log the "Parasaurolophus" specimen.

console.log(hammondsMines.mexico["specimens"][1]);
