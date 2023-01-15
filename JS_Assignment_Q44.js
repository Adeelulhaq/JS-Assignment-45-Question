function make_sandwich(...list) {
    console.log("You ordered "+ list.length+" sandwich description are given: " + list.join(", ").toUpperCase());
}

make_sandwich('Roast beef', 'Cheddar cheese', 'BBQ', 'honey dijon')
make_sandwich('Mango Slice', 'apple slices', 'honey mustard')
make_sandwich('peanut butter', 'strawberry jam')


