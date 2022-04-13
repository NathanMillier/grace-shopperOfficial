require("dotenv").config();
const client = require("./");
const { createUser, getUser, getUserById, getUserByEmail } = require("./users");
const { createProduct, getProducts, getProductById } = require("./products");
const {
  getAllCategories,
  createCategory,
  updateCategory,
} = require("./categories");
const { createOrder } = require("./orders");

const seedDB = async () => {
  await dropTables();
  await createTables();
  await createInitialUsers();
  await createInitialProducts();
  await createInitialCategories();
  await createInitialOrders();
};

const dropTables = async () => {
  console.log("Starting to drop tables");
  await client.query(`
  
    DROP TABLE IF EXISTS products_categories;
    DROP TABLE IF EXISTS order_items;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;

  `);
  console.log("Tables dropped...");
};

const createTables = async () => {
  console.log("Starting to create tables");
  await client.query(`

    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      "isAdmin" boolean DEFAULT false
    );

    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) UNIQUE NOT NULL,
      description TEXT NOT NULL,
      stock INTEGER NOT NULL,
      price INTEGER NOT NULL
    );

    CREATE TABLE categories(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL
    );

    CREATE TABLE products_categories(
      id SERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES products(id),
      "categoryId" INTEGER REFERENCES categories(id)
    );

    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      "creatorId" INTEGER REFERENCES users(id),
      "isPurchased" BOOLEAN DEFAULT false
    );

    CREATE TABLE order_items(
      id SERIAL PRIMARY KEY,
      "orderId" INTEGER REFERENCES orders(id),
      "productId" INTEGER REFERENCES products(id),
      price INTEGER NOT NULL,
      quantity INTEGER NOT NULL
    );
  `);

  console.log("Tables created...");
};

async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    const usersToCreate = [
      { email: "admin@gmail.com", password: "admin1234", isAdmin: true },
      { email: "albert@gmail.com", password: "bertie99" },
      { email: "sandra@gmail.com", password: "sandra123" },
      { email: "glamgal@hotmail.com", password: "glamgal123" },
    ];
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialProducts() {
  console.log("Starting to add products...");
  try {
    const productsToAdd = [
      {
        title: "NIKE AIR JORDAN 4 RETRO",
        description:
          "The Air Jordan IV was MJ's first signature model to take flight. Complete with never before seen “Wings” acting as lace locks and an unforgettable color scheme, the silhouette now returns in its truest form. Nodding to its 1989 debut, the new Air Jordan IV features iconic Nike Air branding on both the heel and outsole.",
        stock: 25,
        price: 250,
      },
      {
        title: "PUMA SUEDE CLASSIC XXI",
        description:
          "The Suede hit the scene in 1968 and has been changing the game ever since. It's been worn by the icons of every generation and it's",
        stock: 100,
        price: 75,
      },
      {
        title: "VANS SK8-HI",
        description:
          "The Sk8-Hi was introduced in 1978 as Style 38, and showcased the now-iconic Vans Sidestripe on a new, innovative high top silhouette. As only the second model featuring the recognizable marker formerly known as the “jazz stripe,” the Sk8-Hi brought a whole new look to the Vans family.  Honoring that first legendary high top, the Sk8-Hi is made with sturdy suede and canvas uppers in a variety of classic and unexpected colorways. This lace-up shoe also includes re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.",
        stock: 150,
        price: 80,
      },
      {
        title: "TIMBERLAND® PREMIUM 6-INCH WATERPROOF BOOTS",
        description:
          "Inspired by our original waterproof boot, this all-season style gives you tireless waterproof performance and instantly recognizable work-boot styling. Other essential features include 400 grams of warm, down-free PrimaLoft® insulation, a padded collar for a comfortable fit around the ankle, a rubber lug outsole for traction, and materials sourced with respect for the planet.",
        stock: 55,
        price: 200,
      },
      {
        title: "CONVERSE CHUCK TAYLOR ALLSTARS HI",
        description:
          "You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and low-top silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.",
        stock: 150,
        price: 75,
      },
      {
        title: "SPEEDO SURF KNIT PRO",
        description:
          "Step into the water sporting the aquatic Speedo® Surf Knit Pro slip-on water shoes.Surf Knit upper engineered for ultimate support and breathability.Pull tabs in front and back allows easy on and off.Hydrophobic rubber EVA insole. STRAC outsole is designed to disperse water and provide improved performance and traction.",
        stock: 25,
        price: 75,
      },
      {
        title: "REEBOK NANO X2 TRAINING SHOES",
        description:
          "From pistol squats to burpees, there's no shortage of moves to take your workout to the next level. Reach for these men's Reebok shoes to stay confident in or out of the gym. They have a Flexweave® woven upper that's breathable and durable, with integrated support for stable movement in every direction. The rubber outsole with a strategic lug pattern gives you secure traction.",
        stock: 47,
        price: 135,
      },
    ];

    const shoes = await Promise.all(productsToAdd.map(createProduct));

    console.log("Finished adding the products...");
  } catch (error) {
    throw error;
  }
}

async function createInitialCategories() {
  console.log("Starting to add categories...");
  try {
    const categoriesToAdd = [
      {
        name: "Basketball",
      },
      {
        name: "Running",
      },
      {
        name: "Hiking",
      },
      {
        name: "Swimming",
      },
      {
        name: "Casual",
      },
      {
        name: "Cross Training",
      },
    ];
    const categories = await Promise.all(categoriesToAdd.map(createCategory));
    console.log("Finished adding the categories...");
  } catch (err) {
    throw err;
  }
}

async function createInitialOrders() {
  try {
    console.log("Starting to create orders...");

    const ordersToCreate = [
      {
        creatorId: 1,
      },
      {
        creatorId: 2,
      },
      {
        creatorId: 3,
      },
    ];

    const orders = await Promise.all(ordersToCreate.map(createOrder));
  } catch (error) {
    console.error("Error creating orders");
    throw error;
  }
}

seedDB();
