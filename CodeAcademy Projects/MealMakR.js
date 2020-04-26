const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        this._courses.appetizers;
    },
    set appetizers(appIn) {
        this._courses.appetizers = appIn;
    },
    get mains() {
        this._courses.mains;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    get desserts() {
        this._courses.deserts;
    },
    set desserts(dessertIn) {
        this._courses.desserts = dessertIn;
    },
    get courses() { // _courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let index = Math.floor(Math.random() * dishes.length);
        return dishes[index]
    },
    generateRandomMeal() {
        const app = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = app.price + main.price + dessert.price;

        return `If you order ${app.name}, ${main.name}, and ${dessert.name} it will cost $${totalPrice} in total`;

    }
};

menu.addDishToCourse('appetizers', 'crap', 4.3);
menu.addDishToCourse('mains', 'food', 4.3);
menu.addDishToCourse('desserts', 'tools', 3.3);
menu.addDishToCourse('desserts', 'chair', 1.3);
menu.addDishToCourse('desserts', 'tv', 6.3);
menu.addDishToCourse('desserts', 'floor', 8.3);

let meal = menu.generateRandomMeal();
console.log(meal);




