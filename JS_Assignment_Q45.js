function cars_info(company, model, extra_info) {
    let obj = {
        company,
        model,
        ...extra_info
    }
    return obj

}
console.log(cars_info('subaru', 'outback', { color: 'blue', tow_package: true }))
console.log(cars_info('honda', 'accord', { year: 1991, color: 'white' }))
console.log( cars_info("Ford", "Mustang", { color: "red", year: 2021, optional: "leather seats" }))
