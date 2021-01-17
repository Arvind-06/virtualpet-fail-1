var dog,sadDog,happyDog,database,foodstock,foods;
var feed,addfood;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1200,500);
  database = firebase.database();
  foodObj = new Food();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.3;

  feed = createButton("FEED THE DOG");
  feed.position(950,95);
  feed.mousePressed(feedDog);

  addfood = createButton("ADD FOOD TO BASKET");
  addfood.position(1050,95);
  addfood.mousePressed(addfoods);

}

function draw(){
  foodObj.display();
  dog.display();

  foodObj.getFoodStock();
  

  drawSprites();

}

function feedDog(){
  foodObj.deductFood();
  foodObj.updateFoodStock();
  dog.changeImage(happyDog);

}

function addfoods(){
  foodObj.addFood();
  foodObj.updateFoodStock();
}

//function to read food Stock


//function to update food stock and last fed time











