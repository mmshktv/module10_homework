let childs = new Map();

childs.set("Maksim", "10 age");
childs.set("Sveta", "15 age");
childs.set("Denis", "12 age");

for (let child of childs.keys()) {
    console.log(child + " is " + childs.get(child));
}