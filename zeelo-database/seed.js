// import db from './index.js'
const db = require('./index.js')
// import houseSchema from './houseSchema'
const houseSchema = require('./houseSchema.js')


const homeData = [
    {
        price: '$28,000,000',
        bedrooms: 4,
        bathrooms: 7,
        sqft: '10,755',
        address: '2247 Evergreen Point Rd, Medina, WA, 98039',
        imageUrl: 'https://photos.zillowstatic.com/fp/4d16a3bacc788776cf9225c6301d57b9-cc_ft_1536.webp'
    }
] 

const inserthomeData = () => {
    houseSchema.create(homeData)
    .then(()=> db.disconnect())
}

inserthomeData()