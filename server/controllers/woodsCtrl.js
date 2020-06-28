
const campG = [

    {
        id: 1,
        name: 'Pacfic City',
        location: 'Cloverdale, OR',
        review: 'You will never tire of the spectacular ocean views with a trip to Pacific City RV Camping in Oregon. Nature trails, fishing, clamming, surfing, beachcombing and more can all be found at this RV campground in Oregon, located along the beautiful Central Oregon coastline.',
        img: 'jpeg'

    },


    {
        id: 2,
        name: 'Whalers Rest',
        location: 'Newport, OR',
        review: 'Grab your bathing suits, towels and flip flops! Whalers Rest RV Camping offers a pristine beach location just 150 yards from the Pacific Ocean. Open year-round, this RV campground on the Oregon coast offers beach goers activities including salt-water swimming, scuba diving, surfing, whale watching and fishing all within minutes Whalers Rest RV Camping.',
        img: 'jpeg'

    },
    {    
        id: 3,
        name: 'South Jetty',
        location: 'Florence, OR',
        review: 'Location, location, location. Just two miles from the beautiful Pacific Ocean, South Jetty RV Resort is the perfect outdoor getaway. At this Oregon Coast RV campground, you’ll enjoy the best of the outdoors in and around Florence.',
        img: 'jpeg'
    },


    {
        id: 4,
        name: 'Russian River',
        location: 'Cloverdale, CA',
        review: 'Russian River RV Campground has something for everyone, both on the grounds and off. Explore wineries just minutes from this beautiful Santa Rosa RV campground or visit any number of nearby destinations. San Francisco and the Bay Area is just a short drive away, where you can walk the Golden Gate Bridge or test your luck at two casinos.',
        img: 'jpeg'
    },


    {
        id: 5,
        name: 'San Benito Reserve',
        location: 'Pacines, CA',
        review: "California is a fantastic state for camping. That's why Thousand Trails offers a variety of California campgrounds. San Benito RV & Camping Resort is particularly special since it offers all the beauty you’d expect in a Monterey Bay RV campground, but also an impressive array of amenities.",
        img: 'jpeg'
    },


    {
        id: 6,
        name: 'Soledad Canyon',
        location: 'Acton, CA',
        review: 'Enjoy all the perks of a traditional campground with the added bonus of resort-style amenities at Soledad Canyon RV Resort. With a secluded location in the high desert country along the Santa Clara stream way, Soledad Canyon RV Resort features majestic scenery. Large picnic areas surround the largest swimming pool in the west, perfect for enjoying the California sunshine.',
        img: 'jpeg'
    },

    {
        id: 7,
        name: 'Willderness Lakes',
        location: 'Hemet, CA',
        review: 'Wilderness Lakes RV Campground offers the perfect getaway for all ages! With 80 scenic acres, this RV campground in California features fishing canals and a central location near shopping, hospitals and freeways. All 523 camping sites offer water, electric and sewer services. For guests who wish to rent accommodations at Wilderness Lakes RV Campground, cabins and rental trailers are available.',
        img: 'jpeg'
        
    },


    {
        id: 8,
        name: 'Palm Springs Resort',
        location: 'Palm Desert, CA',
        review: "This RV camp in California is equally perfect for a weekend getaway or a long-term hiatus. Situated in the beautiful Coachella Valley, this 25-acre California RV campground boasts an unbeatable location near lakes, canyons and national monuments. Whether you're looking for the perfect winter vacation or a golf retreat, Palm Springs RV Camping is a win-win choice.",
        img: 'jpeg'
        
    },


    {
        id: 9,
        name: 'Verde Valley',
        location: 'Cottonwood, AZ',
        review: 'Arizona is known for its expansive desert and mountain backdrops. At Verde Valley RV Camping, you’ll enjoy the best of everything Arizona has to offer. Situated on the scenic Verde River, Verde Valley RV Camping offers 300 acres of picturesque beauty. Explore the majestic Red Rocks to the north, Mingus Mountains to the west and the Hackberry Mountains to the south. With a moderate year-round climate, this RV campground in Arizona is an ideal location for your next retreat.',
        img: 'jpeg'

    
    },


    {
        id: 10,
        name: 'Indian Lakes',
        location: 'Batesville, IN',
        review: 'Located just outside Cincinnati and Indianapolis, Indian Lakes RV Camping Resort is the place to be for year-round vacationing. We offer an attractive selection of rental accommodations for all of our guests including rustic cabins fully-equipped with kitchens and baths. Available for rent is our lakeside lodge, pavilion, and gazebos, which are popular for weddings, reunions, and picnics.',
        img: 'jpeg'
    },


    {
        id: 11,
        name: 'Diamond Caverns',
        location: 'Park City, KY',
        review: 'Diamond Caverns RV Resort & Golf Club offers the best in family vacations and southern hospitality. With a unique family atmosphere, this RV Resort near Mammoth Cave National Park has 743 acres designed for relaxation and exploration plus an 18-hole golf course. Diamond Caverns RV Resort boasts walking, hiking, and biking trails, along with other area attractions.',
        img: 'jpeg'
    },


    {
        id: 12,
        name: 'Wilmington RV Resort',
        location: 'Wilmington, OH',
        review: 'Visit our Wilmington RV campground in Ohio and discover 170 acres of premier camping! Located between Cincinnati and Dayton, Wilmington Thousand Trails RV Camping offers rolling landscape, a scenic lake and plenty of amenities. The on-site lake offers activities like fishing and canoeing, or guests can visit Cowan Lake and Caesar Creek just a few miles away for boating, swimming and horseback riding adventures.',
        img: 'jpeg'
    }
]

let id = 13;

module.exports = {

    getCampG: (req, res) => {
        res.status(200).send(campG);
    },

    getOneCampG: (req, res) => {
        let cGround = campG.find(e => e.id === +req.params.id)
        res.status(200).send(cGround);
    },

    addCampG: (req, res) => {
        let newCampG = {
            id: id,
            name: req.body.name,
            location: req.body.location,
            review: req.body.review
         
        }
        id++
        campG.push(newCampG);
        res.status(200).send(campG);

    },

    updateReview: (req, res) => {
        let index = campG.findIndex(e => e.id === +req.params.id);
        campG[index].review = req.body.review;
        res.status(200).send(campG);

    },

    deleteCampG: (req, res) => {
        let index = campG.findIndex(e => e.id === +req.params.id);
        if(index !== -1){
            cmapG.splice(index, 1);
        }
        res.status(200).send(campG);

    }


}