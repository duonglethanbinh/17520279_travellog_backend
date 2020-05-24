const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://travellogaccount:mongodb123456@travellog-ynb90.gcp.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url);

// The database to use
const dbName = "travellog";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "people"
        const col = db.collection("location");

        // Construct a document                                                                                                                                                              
        let personDocument =
        {
            "data": [
                {
                    "id": "1",
                    "name": "Ha Noi",
                    "image": "https://vietnam.travel/sites/default/files/styles/top_banner/public/2017-06/vietnam-travel-5.jpg?itok=XVnHP3ty",
                    "description": [
                        {
                            "title": "Sample the street food",
                            "content": "A wander around a morning market provides a tantalising hint of what you can expect to hit your table in Hanoi. For an authentic taste of Hanoi, look no further than the street kitchens of the Old Quarter. Phở noodle soup is king of cuisines here, with steaming pots of its star anise-infused broth simmering on every corner; while every day, the irresistible scent of bún chả fills the air as barbecued pork sizzles over hot coals. In recent years a growing band of superb international dining rooms have emerged, serving everything from contemporary tapas to fusion fare."
                        },
                        {
                            "title": "Stroll the Old Quarter",
                            "content": "Hanoi’s Old Quarter serves up a sensory overload for the eyes, ears and nose. Wisps of incense drift out onto streets from ancient temples painted a riot of reds and oranges, while in a far-flung corner the clang of a blacksmith’s hammer mingles with a mobile fruit seller’s call. To fully immerse yourself, grab a map to explore. Or jump in a cyclo and take a tour of this intoxicating maze of markets, street kitchens, shop houses, and more."
                        },
                        {
                            "title": "Explore Hanoi's cafe culture",
                            "content": "It is by taking a seat and waiting as your coffee slowly filters that the Vietnamese capital can best be understood. Fast-paced on the surface, the true rhythm of city life is far from hurried. Alongside the thousands of coffee houses selling traditional Vietnamese coffee, an ever-growing band of unique coffee shops serve espressos and macchiatos in surroundings rivaling the world’s coolest caffeine dens."
                        },
                        {
                            "title": "Check out the art scene",
                            "content": "Hanoi has long had a reputation as Vietnam’s art capital, with the elegant Fine Arts Museum housing the country’s foremost collection, including ancient Cham artifacts and impressionist pieces. For something more contemporary, head for Manzi--an art space-cum-cafe--or the Vietnam Art Gallery. Both are top places to take the pulse of the city’s art scene. Smaller gallery spaces include Nha San Collective at the up-and-coming Hanoi Creative City urban project."
                        },
                        {
                            "title": "Join the locals at Hoan Kiem Lake",
                            "content": "Hoan Kiem lake rests at the heart of Hanoi and embodies the soul of the city. Every morning it comes alive with walkers, aerobics classes, badminton, ballroom dancers, and even a laughing yoga group. It bursts back into life at sunset, and after dark, is again thronged with locals out to take the evening air. A little further north the lesser-visited Truc Bach and West Lake shouldn’t be missed--their calm temples and lakeside cafes provide peaceful enclaves away from the buzz of downtown."
                        }
                    ]
                },
                {
                    "id": "2",
                    "name": "Ho Chi Minh",
                    "image": "https://vietnam.travel/sites/default/files/styles/article_photo_large/public/2017-11/things%20to%20do%20in%20hcmc-10.jpg?itok=xC-3aqm6",
                    "description": [
                        {
                            "title": "See the top landmarks",
                            "content": "Ho Chi Minh City's colonial attractions are sprinkled around District 1, with the Reunification Palace looking down tree-lined Le Duan Boulevard where you'll find the Notre Dame Cathedral and the city's Central Post Office. Walk down Dong Khoi street, and you'll pass the Saigon Opera House and the Continental Hotel. On a more local level, the Ben Thanh Market and the Jade Emperor Pagoda are both worth a stop."
                        },
                        {
                            "title": "Shop small boutiques",
                            "content": "Around District 1, a host of old apartments and former office buildings have been repurposed as shopping centers, leading to some surprising retail discoveries. Decades-old buildings such as 22 Ly Tu Trong and 42 Nguyen Hue are good examples of these impromptu shopping malls. The streets and alleys branching off of Dong Khoi are packed with all kinds of fascinating stores."
                        },
                        {
                            "title": "Visit the War Remnants Museum",
                            "content": "The War Remnants Museum recounts a tumultuous time in 20th-century Vietnamese history, documenting both the atrocities of the war and the aftermath of the conflict. If you're interested in learning about the war from another point of view, this museum offers a wealth of information as well as some compelling photo exhibits."
                        },
                        {
                            "title": "Explore the Chinese Quarter",
                            "content": "The Chinese neighbourhood known as Cho Lon houses Binh Tay Market, a colossal wholesale trading center, as well as Thien Hau Pagoda, an atmospheric temple that pays homage to the goddess of the sea amid clouds of incense and burning votive paper. Next door, the colorful Chaozhou Assembly Hall and pale blue Cho Lon Mosque highlight the neighbourhood's intersection of cultures."
                        },
                        {
                            "title": "Hop on a motorcycle",
                            "content": "Beyond landmarks, Ho Chi Minh City serves up a taste of urban Vietnam by way of its traffic. Do as the locals do and hop on the back of a motorbike to see the city on street level and feel its energetic pulse. If you can't drive, there are many tour companies offering motorbike tours. Some of the best set off in the evening, when the city is at its most romantic and the sidewalk vendors are out in force."
                        },
                        {
                            "title": "Eat street food ",
                            "content": "Ho Chi Minh City's street food draws together countless regional specialties from across Vietnam. Locals love to gather around dented metal tables across the city for incredible roadside feasts. The options are plentiful, but don't miss highlights such as Vietnamese sandwiches (bánh mì), southern-style savoury pancakes (bánh xèo) and broken rice (cơm tấm)."
                        },
                        {
                            "title": "Get to know Vietnamese art",
                            "content": "Though they may be small and sometimes difficult to find, Ho Chi Minh City's contemporary art galleries are worth your effort. Start your artistic adventure at the Fine Arts Museum, once the mansion of one of HCMC's wealthiest residents, before venturing out to other spaces. Noteworthy venues include Galerie Quynh, The Factory and Craig Thomas Gallery."
                        }
                    ]
                },
                {
                    "id": "3",
                    "name": "Hue",
                    "image": "https://vietnam.travel/sites/default/files/styles/article_photo_large/public/2017-11/things%20to%20do%20in%20hue%20vietnam.jpg?itok=USd747VZ",
                    "description": [
                        {
                            "title": "See Imperial Vietnam",
                            "content": "Get acquainted with Vietnam’s last royal dynastic family by exploring what survives of their 143-year reign. The Complex of Huế Monuments, featuring the Huế Citadel is a hugely significant territory. Roam its palaces, pavilions and theatres, and you may still catch echoes of life in the Imperial Court. Journey along the river to the tombs of Tự Đức, Minh Mạng and Khải Định. Enveloped in greenery and guarded by fierce mandolins, these tombs evoke a striking harmony between nature and architecture."
                        },
                        {
                            "title": "Eat like a king",
                            "content": "You’re never far from a world-class meal in Huế. Nose around the flapping-fresh produce at Đông Ba Market for a teaser, then whet your appetite with Huế’s much-loved snacks, such as bánh khoai and bánh bèo. Roving vendors can roast you a bánh mì or whip together a swoon-worthy bowl of bún thịt nướng in seconds. There’s even a ‘vegetarian street’ in Huế, evidence of the city’s devout Buddhist roots. Foodies can’t miss the chance to try bún bò huế in the city of its origin."
                        },
                        {
                            "title": "Explore the city's Buddhist roots",
                            "content": "Nowhere is Huế’s serene atmosphere more penetrating than in its pagodas and monasteries. Từ Hiếu Monastery is where Buddhist author and activist Thích Nhất Hạnh spent his days as a novice monk. Here, tombs of imperial eunuchs rest alongside footpaths and lotus ponds, and the monks play football in the late afternoons. See the iconic seven-tiered tower of Thiên Mụ Pagoda and park your bicycle outside the Diệu Đế Pagoda for a glimpse inside."
                        },
                        {
                            "title": "Cycle in the ride paddies ",
                            "content": "Huế’s photogenic streets and lush countryside are a wonderland for casual cyclists. The ride to the tile-roofed Thanh toán Bridge is one of Huế’s most captivating, winding past vegetable farms, footbridges, and flocks of ducks. In town, cycle Lê Lợi and Bạch Đằng–one of Huế’s classic streets–for scenes of local life. For a more leisurely option, hail a xích lô (bicycle rickshaw) for a tour around the city."
                        },
                        {
                            "title": "Revisit colonial history",
                            "content": "Travellers with an eye for architecture will enjoy seeing what remains of French influence in Huế. Stroll down Lê Lợi to encounter five enduring colonial structures. You can’t miss the nautical, art déco lines of La Residence Hotel, the stately crimson buildings of the Quốc Học High School, the Gustave Eiffel-designed arches of Trường Tiền Bridge, and the over-the-water veranda of Le Cercle Sportif."
                        },
                        {
                            "title": "Head for the hills",
                            "content": "Grab a gulp of fresh air and stretch your legs in the hills nearby. Pine-covered Thiên An is the perfect spot for a long and lazy picnic lunch. Come sunset, join the locals admiring the view from Vọng Cảnh. For a real workout, challenge yourself on the lofty trails at Bạch Mã National Park."
                        }
                    ]
                },
                {
                    "id": "4",
                    "name": "Da Nang",
                    "image": "https://vietnam.travel/sites/default/files/styles/article_photo_large/public/2017-11/Danang%20guide%20vietnam%20tourism_0.jpg?itok=RWXmsdWa",
                    "description": [
                        {
                            "title": "Enjoy the beach",
                            "content": "In the early morning there is a palpable sense of positive energy in Da Nang. It’s impossible not to feel the buzz of Da Nang life and be swept along with it, so be sure to set the alarm clock early at least once on your stay. Along the shore, fishermen sell the day’s catch, football and volleyball matches spring up all around, and people jog, stroll or simply relax as the morning breeze kicks up and waves wash the sands."
                        },
                        {
                            "title": "See the Son Tra Peninsula",
                            "content": "The Son Tra Peninsula strikes out into the ocean, its densely forested hillsides are home to rhesus macaques, long-tailed macaques, pygmy lorises, and the endangered red shanked douc langur -- one of the world’s most striking primates. Grab some binoculars, hire a motorbike, and head out for a day of wildlife spotting."
                        },
                        {
                            "title": "Learn about Cham culture",
                            "content": "A couple of hours outside of Da Nang lies My Son Sanctuary, a UNESCO-listed complex of abandoned temples dating from the 4th to the 14th century. Hidden among the jungle, some towers are overgrown and many are in ruin, but enough remains to whisk you back in time. To learn more about Cham culture, visit the superb Cham Museum of Sculpture in Da Nang, home to the largest collection of Cham sculpture in the world. "
                        },
                        {
                            "title": "Dine on street food",
                            "content": "Da Nang is a dream destination for foodies, with scores of seafront eateries serving every night of the week. Banh mi—the Vietnamese baguette—is taken to a new level here. Mi Quang is another delight and every Da Nang local will offer an opinion on where to find the best. Each bowl features yellow rice noodles, pork, shrimp, and a flavour-infused broth topped off with chopped peanuts, quail eggs and plenty of fresh herbs."
                        },
                        {
                            "title": "Plan a daytrip",
                            "content": "Marble Mountains, a collection of five outcrops topped with atmospheric pagodas, is a rewarding daytrip from Da Nang. Not far away, Ba Na Hills has made a comeback in recent years thanks to a record-breaking 5km cable car that rises almost 1,300m from sea level. The view across the mountain and jungles from the cable car is spectacular, but the fun begins at the top with an alpine coaster, funicular railway, 18-hole golf course and more. "
                        },
                        {
                            "title": "Drive the Hai Van Pass",
                            "content": "Hai Van Pass is one of the finest stretches of coastal road anywhere in Vietnam. Climbing for 9km out of Danang, you'll be rewarded by views of deserted beaches and jungle-clad slopes. The descent on the other side leads to the Lang Co lagoon, where floating restaurants will be happy to serve you a fresh seafood lunch."
                        }
                    ]
                },
                {
                    "id": "5",
                    "name": "Phong Nha",
                    "image": "https://vietnam.travel/sites/default/files/styles/article_photo_large/public/2017-11/things%20to%20do%20in%20phong%20nha-2_0.jpg?itok=NTVq-NbK",
                    "description": [
                        {
                            "title": "See the Big One",
                            "content": "Hang Sơn Đoòng is by some criteria, the largest cave in the world. It’s big enough to accommodate skyscrapers and has its jungle ecosystem. No wonder then that the multi-day tours to Hang Sơn Đoòng have sold out every year since they began in 2013. To explore this mammoth wonder, you’ll need US$3,000 and six days, but for those with less time and funds, there is plenty more subterranean exploring in Phong Nha."
                        },
                        {
                            "title": "Join a cave expedition ",
                            "content": "Entering the magical world of the Tú Làn cave system on a two-day trip means swimming through river caves and camping on the edge of waterfall-filled lagoons, while the beady eyes of flying squirrels peer inquisitively down from the treetops. At Hang Nuớc Nứt, you can camp at the base of a limestone cliff, then enter the surreal world of Hang Va. Hang Én features a magnificent, colossal main chamber with shimmering turquoise pools, while the cathedral-like chambers of Paradise Cave allow day-visitors the chance to marvel at thousand-year-old beauty."
                        },
                        {
                            "title": "Go in search of wildlife ",
                            "content": "Phong Nha's jungles are home to a rich diversity of flora and fauna. The ultimate way to discover this is on Hai’s Eco Conservation Tour. Mr.Hai, a young and enthusiastic conservationist, will bring you to the Wildlife Rescue Centre to see rescued macaques, langurs, porcupines, and more. While trekking to the Thác Gió Falls, you may spot macaques in their natural habitat."
                        },
                        {
                            "title": "Eat outdoors",
                            "content": "Hire a bike and pedal out to the Bong Lai village in search of the Pub With Cold Beer for one of the country’s best foodie experiences. Here, only one item is on the menu: sublime grilled chicken served with unbeatable homemade peanut sauce. After lunch, ride a little further and reward yourself with a cold drink and views across the Cưỡng river valley at the impossibly pretty lookout of the Wild Boar Eco Farm."
                        },
                        {
                            "title": "Cycle the Eco-Trail",
                            "content": "Non Mooc Eco Trail remains serene, its cool, rushing turquoise water inviting you to cool down when the mercury rises. It’s possible to cycle out here via farmland and cross the original Ho Chi Minh Trail on a tour with Phong Nha Adventure Cycling. Alternatively, hire a bike and make your adventure."
                        }
                    ]
                },
                {
                    "id": "6",
                    "name": "Sapa",
                    "image": "https://vietnam.travel/sites/default/files/styles/article_photo_large/public/2017-11/things%20to%20do%20in%20sapa-7.jpg?itok=M8t0qL_t",
                    "description": [
                        {
                            "title": "Summit Mount Fansipan",
                            "content": "Until 2016, those who wanted to conquer the 3,143m summit of Mount Fansipan had to trek for two or three days. Today, a 6km cable car journey will whisk you to the top in just 15 minutes. On a clear day, the views from the ‘Roof of Indochina’ are unmatched. Another option for knock-out views is Vietnam’s highest mountain pass, the Ô Quy Hồ , also known as Trạm Tôn. Hire some wheels and ride skywards from Sapa. "
                        },
                        {
                            "title": "Visit an ethnic minority market",
                            "content": "The most famous and visually striking market in the area is Bắc Hà, three hours from town. Every Sunday this sleepy little town bursts into life as hundreds of traders from the Dzao, Hàn, Xa Fang, Tay and Thai tribes descend on the market, decked out in their finest traditional garb. There is a riot of colour, the sound of excited haggling, and the scent of pho cooking over open fires."
                        },
                        {
                            "title": "Go trekking in the hills",
                            "content": "Sapa offers some of Vietnam's best trekking. If you can rise early and beat the crowds, Cát Cát  and Tả Phìn are two of the most popular options for day treks without a guide. Further into the landscape, overnight treks will allow you enough time to wander through the rice terraces, bathe in waterfalls and sleep in a traditional family home and experience community life and farming firsthand."
                        },
                        {
                            "title": "Stay in a mountain lodge ",
                            "content": "Stay outside the tourist hub of Sapa in more simple comfort at a mountain-top lodge. Sapa is home to excellent lodges and homestays, where you'll find individual bungalows with private balconies overlooking verdant valleys. Set among the rice terraces, you’re likely to brush shoulders with farmers and other local people as they go about their daily lives."
                        },
                        {
                            "title": "Get active",
                            "content": "Mountain biking is an excellent way to get out and explore some of the lesser-visited corners of Sapa, and there are many multi-day adventures of varying lengths. Be sure to pencil in your visit for the Vietnam Mountain Marathon. This mountaintop race attracts over 4000 competitors who run buffalo-beaten trails ranging from a bamboozling 100km to a more manageable 10km."
                        }
                    ]
                }
            ]
        }


        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}

run().catch(console.dir);