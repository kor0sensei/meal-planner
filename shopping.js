const items = [
    {
        id: 1,
        name: "Milk",
        brand: "Daily Pure",
        price: 3
    },
    {
        id: 2,
        name: "Eggs",
        brand: "Great Value",
        price: 10
    },
    {
        id: 3,
        name: "Cereal",
        brand: "Frosty Flakes",
        price: 5
    },
    {
        id: 4,
        name: "Provolone",
        brand: "Sargento",
        price: 3
    },
    {
        id: 5,
        name: "Roast Beef",
        brand: "Boar's Head",
        price: 11
    },
    {
        id: 6,
        name: "Bread",
        brand: "Bunny",
        price: 2
    },
]

// for (const List of shoppingList) {
//     console.log(`The ${List.brand} ${List.name} costs ${List.price} dollars.`)
// }

const cookies = {
    name: "Milk Chocoalate",
    brand: "Milano",
    price: 4
}

const chips = {
    name: "Cheesy Cheese",
    brand: "Pringles",
    price: 5
}

const candybar = {
    name: "Kitkat",
    brand: "Kitkat",
    price: 4
}

const soda = {
    name: "Coke Zero",
    brand: "Coke a Cola",
    price: 12
}

const dessert = {
    name: "Twinkie",
    brand: "Hostess",
    price: 6
}


const addToShoppingList = (itemObject) => {
    const lastIndex = items.length - 1
    const currentLastItem = items[lastIndex]
    const maxId = currentLastItem.id
    const idForNewitem = maxId + 1

    itemObject.id = idForNewitem
    items.push(itemObject)
}

addToShoppingList(cookies)
addToShoppingList(chips)
addToShoppingList(candybar)
addToShoppingList(soda)
addToShoppingList(dessert)

// for (const item of items) {
//     console.log(`The ${item.brand} ${item.name} costs $${item.price} dollars.`)
// }

console.log(items)