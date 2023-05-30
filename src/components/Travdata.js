const Travdata = [
    {
        id: 1,
        category: "Beach Holidays",
        title: "Tropical Paradise",
        image: "https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg",
        description: "Escape to a tropical paradise with this 7-day package. Package includes flights, hotel accommodations, meals, and activities.",
        price: 1500,
        location: {
            latitude: 21.1619,
            longitude: -86.8515
        },
        reviews: [
            {
                customerName: "John Doe",
                rating: 4.5,
                comment: "Had an amazing time! The beach was stunning and the activities were so much fun."
            },
            {
                customerName: "Jane Smith",
                rating: 5,
                comment: "Highly recommended! The hotel was excellent and the food was delicious."
            }
        ]
    },
    {
        id: 2,
        category: "Europe Tours",
        title: "European Adventure",
        image: "https://media.istockphoto.com/id/1176439818/photo/making-a-memory.jpg?s=612x612&w=0&k=20&c=QdOhqkmo-9hxfrspVSA0hDdb2W3qITaJgPKqr3J4anc=",
        description: "Explore the cities and landscapes of Europe with this 10-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 2500,
        location: {
            latitude: 48.8566,
            longitude: 2.3522
        },
        reviews: [
            {
                customerName: "David Johnson",
                rating: 4,
                comment: "The tour guides were very knowledgeable and friendly. Enjoyed every moment of the trip."
            },
            {
                customerName: "Emily Wilson",
                rating: 4.5,
                comment: "The itinerary was well-planned and we got to see many beautiful places. Highly recommended."
            }
        ]
    },
    {
        id: 3,
        category: "Safari Tours",
        title: "Safari Experience",
        image: "https://media.istockphoto.com/id/1131949134/photo/wild-african-elephant-in-the-savannah-serengeti-national-park-wildlife-of-tanzania-african.jpg?s=612x612&w=0&k=20&c=D0IH4ABSx4hLgaGzw179jnSWA_fixfUoofmMUIO9Vug=",
        description: "Embark on an unforgettable safari adventure with this 14-day package. Package includes transportation, accommodations, meals, and guided tours.",
        price: 4500,
        location: {
            latitude: -2.3333,
            longitude: 34.8333
        },
        reviews: [
            {
                customerName: "Sarah Thompson",
                rating: 5,
                comment: "The wildlife sightings were incredible! It was truly a once-in-a-lifetime experience."
            },
            {
                customerName: "Michael Anderson",
                rating: 4.5,
                comment: "The guides were knowledgeable and made the safari truly memorable. Would love to go again."
            }
        ]
    },
    {
        id: 4,
        category: "Asia Tours",
        title: "Asian Odyssey",
        image: "https://media.istockphoto.com/id/1158377050/photo/enjoying-the-spectacular-views.jpg?s=612x612&w=0&k=20&c=b3r7Xr7I2_ZmVK6Gs6fqD6hIzjJZJdBlQYjhL0JHGsk=",
        description: "Discover the beauty and culture of Asia with this 12-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 3200,
        location: {
            latitude: 35.6895,
            longitude: 139.6917
        },
        reviews: [
            {
                customerName: "Jessica Lee",
                rating: 4,
                comment: "The tour provided a great mix of historical sites and modern attractions. Enjoyed every moment."
            },
            {
                customerName: "Daniel Kim",
                rating: 5,
                comment: "The food was amazing and the tour guides were very helpful. Highly recommended."
            }
        ]
    },
    {
        id: 5,
        category: "Beach Holidays",
        title: "Beach Getaway",
        image: "https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?s=612x612&w=0&k=20&c=1UUnuM-RyTYVkt1_YIMIzNe3JXdEeUTWngiEswms6MQ=",
        description: "Relax and unwind on the beaches of Hawaii with this 5-day package. Package includes flights, hotel accommodations, meals, and activities.",
        price: 1200,
        location: {
            latitude: 21.3069,
            longitude: -157.8583
        },
        reviews: [
            {
                customerName: "Jennifer Brown",
                rating: 4.5,
                comment: "The beach was breathtaking, and the activities were fun for the whole family."
            },
            {
                customerName: "Mark Davis",
                rating: 5,
                comment: "Had a fantastic time! The hotel staff was friendly and the food was delicious."
            }
        ]
    },
    {
        id: 6,
        category: "Europe Tours",
        title: "Scandinavian Sojourn",
        image: "https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=612x612&w=0&k=20&c=ZneUFVlR5TPCooxRV1rldUAadqLxZEvOoyVCOrtpcRQ=",
        description: "Experience the natural wonders and unique culture of Scandinavia with this 10-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 2800,
        location: {
            latitude: 59.3293,
            longitude: 18.0686
        },
        reviews: [
            {
                customerName: "Robert Johnson",
                rating: 4.5,
                comment: "The landscapes were breathtaking, and the local guides provided interesting insights."
            },
            {
                customerName: "Sophia Wilson",
                rating: 5,
                comment: "Had a wonderful time exploring Scandinavia. The itinerary was well-designed."
            }
        ]
    },
    {
        id: 7,
        category: "Safari Tours",
        title: "Wildlife Adventure",
        image: "https://media.istockphoto.com/id/498682763/photo/bengal-tiger-getting-photographed-by-people-in-a-jeep.jpg?s=612x612&w=0&k=20&c=bbS5VvPgsJOMvC8tMFtbZcfw4GnRbPG4PgYc1pjWYd4=",
        description: "Get up close with Africa's magnificent wildlife with this 12-day package. Package includes transportation, accommodations, meals, and guided tours.",
        price: 5500,
        location: {
            latitude: -3.4653,
            longitude: 36.6529
        },
        reviews: [
            {
                customerName: "Olivia Smith",
                rating: 5,
                comment: "The safari exceeded my expectations. Saw so many incredible animals in their natural habitat."
            },
            {
                customerName: "James Brown",
                rating: 4.5,
                comment: "The guides were knowledgeable and made the safari an unforgettable experience."
            }
        ]
    },
    {
        id: 8,
        category: "Asia Tours",
        title: "Japan Discovery",
        image: "https://media.istockphoto.com/id/860594926/photo/chinese-house.jpg?s=612x612&w=0&k=20&c=lqYH6XXb0O58FuS2KVpZhxg4PXF7A9eSoetvWXKB4gw=",
        description: "Experience the unique culture and breathtaking scenery of Japan with this 8-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 2900,
        location: {
            latitude: 35.6895,
            longitude: 139.6917
        },
        reviews: [
            {
                customerName: "William Taylor",
                rating: 4,
                comment: "The tour was well-organized and allowed us to experience the best of Japan."
            },
            {
                customerName: "Emma Davis",
                rating: 4.5,
                comment: "The Japanese hospitality was amazing, and the temples and gardens were beautiful."
            }
        ]
    },
    {
        id: 9,
        category: "Beach Holidays",
        title: "Caribbean Escape",
        image: "https://media.istockphoto.com/id/614212584/photo/what-a-beautiful-place-to-be-in-love.jpg?s=612x612&w=0&k=20&c=TR_bxwLPOd-tzFKENmUlLTVrRVFhSfl6XiWPv6PCfhk=",
        description: "Bask in the sun and sand of the Caribbean with this 7-day package. Package includes flights, hotel accommodations, meals, and activities.",
        price: 1700,
        location: {
            latitude: 12.1165,
            longitude: -68.9308
        },
        reviews: [
            {
                customerName: "Ava Johnson",
                rating: 5,
                comment: "The Caribbean beaches were pristine, and the resort offered excellent amenities."
            },
            {
                customerName: "Liam Wilson",
                rating: 4.5,
                comment: "Had a great time snorkeling and enjoying the beautiful weather. Highly recommended."
            }
        ]
    },
    {
        id: 10,
        category: "Europe Tours",
        title: "Mediterranean Magic",
        image: "https://media.timeout.com/images/105799896/750/562/image.jpg",
        description: "Discover the charm and beauty of the Mediterranean region with this 14-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 3600,
        location: {
            latitude: 41.9028,
            longitude: 12.4964
        },
        reviews: [
            {
                customerName: "Noah Anderson",
                rating: 4.5,
                comment: "The Mediterranean coastline was stunning, and the historical sites were fascinating."
            },
            {
                customerName: "Mia Thompson",
                rating: 5,
                comment: "The tour provided a perfect balance of relaxation and cultural exploration."
            }
        ]
    },
    {
        id: 11,
        category: "Safari Tours",
        title: "African Wildlife Safari",
        image: "https://media.istockphoto.com/id/682763/photo/bengal-tiger-getting-photographed-by-people-in-a-jeep.jpg?s=612x612&w=0&k=20&c=bbS5VvPgsJOMvC8tMFtbZcfw4GnRbPG4PgYc1pjWYd4=",
        description: "Get up close with Africa's magnificent wildlife with this 12-day package. Package includes transportation, accommodations, meals, and guided tours.",
        price: 5500,
        location: {
            latitude: -3.4653,
            longitude: 36.6529
        },
        reviews: [
            {
                customerName: "Olivia Smith",
                rating: 5,
                comment: "The safari exceeded my expectations. Saw so many incredible animals in their natural habitat."
            },
            {
                customerName: "James Brown",
                rating: 4.5,
                comment: "The guides were knowledgeable and made the safari an unforgettable experience."
            }
        ]
    },
    {
        id: 12,
        category: "Asia Tours",
        title: "Japan Discovery",
        image: "https://media.istockphoto.com/id/860594926/photo/chinese-house.jpg?s=612x612&w=0&k=20&c=lqYH6XXb0O58FuS2KVpZhxg4PXF7A9eSoetvWXKB4gw=",
        description: "Experience the unique culture and breathtaking scenery of Japan with this 8-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 2900,
        location: {
            latitude: 35.6895,
            longitude: 139.6917
        },
        reviews: [
            {
                customerName: "William Taylor",
                rating: 4,
                comment: "The tour was well-organized and allowed us to experience the best of Japan."
            },
            {
                customerName: "Emma Davis",
                rating: 4.5,
                comment: "The Japanese hospitality was amazing, and the temples and gardens were beautiful."
            }
        ]
    },
    {
        id: 13,
        category: "Beach Holidays",
        title: "Caribbean Escape",
        image: "https://media.istockphoto.com/id/614212584/photo/what-a-beautiful-place-to-be-in-love.jpg?s=612x612&w=0&k=20&c=TR_bxwLPOd-tzFKENmUlLTVrRVFhSfl6XiWPv6PCfhk=",
        description: "Bask in the sun and sand of the Caribbean with this 7-day package. Package includes flights, hotel accommodations, meals, and activities.",
        price: 1700,
        location: {
            latitude: 12.1165,
            longitude: -68.9308
        },
        reviews: [
            {
                customerName: "Ava Johnson",
                rating: 5,
                comment: "The Caribbean beaches were pristine, and the resort offered excellent amenities."
            },
            {
                customerName: "Liam Wilson",
                rating: 4.5,
                comment: "Had a great time snorkeling and enjoying the beautiful weather. Highly recommended."
            }
        ]
    },
    {
        id: 14,
        category: "Europe Tours",
        title: "Classic European Capitals",
        image: "https://media.istockphoto.com/id/629870316/photo/beautiful-couple-in-the-city-picture-id629870316?s=612x612&w=0&k=20&c=biChzeS2z8AkSSeS0WemGeQvz6vIXQr0FB4loJGzTtA=",
        description: "Explore the iconic capitals of Europe with this 15-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 4200,
        location: {
            latitude: 48.8566,
            longitude: 2.3522
        },
        reviews: [
            {
                customerName: "Sophia Brown",
                rating: 4,
                comment: "The tour covered all the major highlights of Europe, and the guides were knowledgeable."
            },
            {
                customerName: "Noah Anderson",
                rating: 4.5,
                comment: "Enjoyed visiting historic landmarks and experiencing different cultures."
            }
        ]
    },
    {
        id: 15,
        category: "Safari Tours",
        title: "Serene Safari Experience",
        image: "https://media.istockphoto.com/id/157186578/photo/elephant-in-national-park-amboseli-kenya-africa-picture-id157186578?s=612x612&w=0&k=20&c=AK0Ogz9qJ6hUE-csE41rRWsNpx7_4ifkDLeH5XhA9h8=",
        description: "Immerse yourself in the tranquility of African wildlife with this 9-day package. Package includes transportation, accommodations, meals, and guided tours.",
        price: 4800,
        location: {
            latitude: -1.2864,
            longitude: 36.8172
        },
        reviews: [
            {
                customerName: "Isabella Davis",
                rating: 5,
                comment: "The safari experience was breathtaking. Witnessed incredible animal behavior and enjoyed the beautiful landscapes."
            },
            {
                customerName: "Mason Wilson",
                rating: 4,
                comment: "The guides were friendly and shared fascinating insights about the wildlife."
            }
        ]
    },
    {
        id: 16,
        category: "Asia Tours",
        title: "Enchanting Bali",
        image: "https://media.istockphoto.com/id/643799288/photo/ubud-monkey-forest-in-bali-indonesia-picture-id643799288?s=612x612&w=0&k=20&c=TJv6rN6ulMQD3gTrHJ5feXhij_44XQp7z68oXG60tlg=",
        description: "Discover the magic of Bali's culture, nature, and spirituality with this 6-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 1800,
        location: {
            latitude: -8.3405,
            longitude: 115.0920
        },
        reviews: [
            {
                customerName: "Charlotte Johnson",
                rating: 4.5,
                comment: "Bali is a paradise with stunning landscapes, friendly people, and fascinating temples."
            },
            {
                customerName: "Henry Smith",
                rating: 5,
                comment: "The tour provided a perfect mix of relaxation, adventure, and cultural experiences."
            }
        ]
    },
    {
        id: 17,
        category: "Beach Holidays",
        title: "Caribbean Getaway",
        image: "https://media.istockphoto.com/id/629245770/photo/girl-enjoying-a-vacation-on-the-beach-picture-id629245770?s=612x612&w=0&k=20&c=Ts7j9mYOwWipPzrhIl0BisKyzcGRGBsgytpC1GzrxbM=",
        description: "Escape to the stunning beaches of the Caribbean with this 7-day package. Package includes flights, resort accommodations, meals, and activities.",
        price: 2600,
        location: {
            latitude: 12.1165,
            longitude: -68.9300
        },
        reviews: [
            {
                customerName: "Oliver Taylor",
                rating: 4,
                comment: "The beaches were pristine, and the resort offered excellent service."
            },
            {
                customerName: "Ava Martinez",
                rating: 4.5,
                comment: "Had a great time exploring the islands and enjoying the crystal-clear waters."
            }
        ]
    },
    {
        id: 18,
        category: "Europe Tours",
        title: "Majestic Alps",
        image: "https://media.istockphoto.com/id/518671260/photo/beautiful-landscape-of-the-alps-picture-id518671260?s=612x612&w=0&k=20&c=7ybiIC6G1xf1Qamcm9a3hrZMn39f6wh12r5TafMsOCE=",
        description: "Experience the breathtaking beauty of the Alpine region with this 12-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 3800,
        location: {
            latitude: 46.8182,
            longitude: 8.2275
        },
        reviews: [
            {
                customerName: "Amelia Anderson",
                rating: 5,
                comment: "The tour provided stunning views of the mountains and picturesque villages."
            },
            {
                customerName: "Lucas Wilson",
                rating: 4.5,
                comment: "Enjoyed the outdoor activities and learning about the local culture."
            }
        ]
    },
    {
        id: 19,
        category: "Safari Tours",
        title: "Wildlife Expedition: Amazon",
        image: "https://media.istockphoto.com/id/621726104/photo/amazon-jungle-sunset-picture-id621726104?s=612x612&w=0&k=20&c=CzIXOg7bcttdmscwX47fBfprg1_0vLWOZVhJugZ8vwQ=",
        description: "Embark on an unforgettable wildlife adventure in the Amazon rainforest with this 11-day package. Package includes transportation, accommodations, meals, and guided tours.",
        price: 5200,
        location: {
            latitude: -3.4653,
            longitude: -62.2159
        },
        reviews: [
            {
                customerName: "William Brown",
                rating: 4.5,
                comment: "The Amazon expedition was a unique and eye-opening experience. Saw incredible wildlife and learned about the ecosystem."
            },
            {
                customerName: "Sophia Johnson",
                rating: 5,
                comment: "The guides were knowledgeable and passionate about the rainforest, making the trip educational and exciting."
            }
        ]
    },
    {
        id: 20,
        category: "Asia Tours",
        title: "Golden Triangle: India",
        image: "https://media.istockphoto.com/id/173963450/photo/amber-fort-jaipur-picture-id173963450?s=612x612&w=0&k=20&c=HjPL_nkHfTHz3gtRqo8XeM8tsmj_g3Zr4v7RfBMH79c=",
        description: "Explore the cultural treasures of India's Golden Triangle with this 10-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 3200,
        location: {
            latitude: 28.6139,
            longitude: 77.2090
        },
        reviews: [
            {
                customerName: "Olivia Davis",
                rating: 5,
                comment: "India's rich history and vibrant culture were truly captivating. The tour was well-organized and informative."
            },
            {
                customerName: "James Wilson",
                rating: 4,
                comment: "Enjoyed visiting the iconic landmarks and experiencing the diverse cuisine."
            }
        ]
    },
    {
        id: 21,
        category: "Beach Holidays",
        title: "Caribbean Paradise",
        image: "https://media.istockphoto.com/id/1170291847/photo/beautiful-dog-of-dachshund-black-and-tan-buried-in-the-sand-at-the-beach-sea-on-summer.jpg?s=612x612&w=0&k=20&c=vo-nq6fJ_LYFUiRkmSGlATmjFSKDsuQe1RpnCvzNaHc=",
        description: "Escape to a stunning Caribbean paradise with this 7-day package. Package includes flights, hotel accommodations, meals, and activities.",
        price: 2000,
        location: {
            latitude: 12.1165,
            longitude: -68.9302
        },
        reviews: [
            {
                customerName: "Sophie Thompson",
                rating: 4.5,
                comment: "The beaches were incredible, and the resort provided excellent service."
            },
            {
                customerName: "Benjamin Adams",
                rating: 5,
                comment: "Had a wonderful time exploring the islands and enjoying the warm weather."
            }
        ]
    },
    {
        id: 22,
        category: "Europe Tours",
        title: "Italian Riviera",
        image: "https://media.istockphoto.com/id/491391396/photo/venice.jpg?s=612x612&w=0&k=20&c=PPRqUgndF6QDuwnDDiE4Ff_BzKg9rchHbbgeX1sPO50=",
        description: "Experience the beauty and charm of the Italian Riviera with this 9-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 3100,
        location: {
            latitude: 43.7711,
            longitude: 7.5674
        },
        reviews: [
            {
                customerName: "Emma Wilson",
                rating: 5,
                comment: "The coastal towns were stunning, and the local cuisine was amazing."
            },
            {
                customerName: "Noah Carter",
                rating: 4,
                comment: "Enjoyed the guided tours and the opportunity to visit historic landmarks."
            }
        ]
    },
    {
        id: 23,
        category: "Safari Tours",
        title: "Botswana Wildlife Safari",
        image: "https://media.istockphoto.com/id/1128748845/photo/group-of-african-elephants-in-the-wild.jpg?s=612x612&w=0&k=20&c=gRqJfPI5-m6GqzdyLIjzAtedjLSIDgFKm_VyVqhVYnY=",
        description: "Experience the incredible wildlife of Botswana on this 14-day safari adventure. Package includes transportation, accommodations, meals, and guided tours.",
        price: 6700,
        location: {
            latitude: -22.3285,
            longitude: 24.6849
        },
        reviews: [
            {
                customerName: "Oliver Davis",
                rating: 4.5,
                comment: "The safari was a once-in-a-lifetime experience. Saw a wide variety of animals up close."
            },
            {
                customerName: "Sophia Roberts",
                rating: 5,
                comment: "The guides were knowledgeable and made the trip both educational and exciting."
            }
        ]
    },
    {
        id: 24,
        category: "Asia Tours",
        title: "Japanese Discovery",
        image: "https://media.istockphoto.com/id/506393198/photo/great-wall-of-china.jpg?s=612x612&w=0&k=20&c=cJti-RrdUUkLX_zgzi6KgPbgApHoxJtMJSvlRUYqOzg=",
        description: "Discover the unique culture and cuisine of Japan with this 11-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 4000,
        location: {
            latitude: 35.6895,
            longitude: 139.6917
        },
        reviews: [
            {
                customerName: "Liam Johnson",
                rating: 4,
                comment: "Japan's blend of tradition and modernity was fascinating. Enjoyed the hot springs and temples."
            },
            {
                customerName: "Mia Anderson",
                rating: 5,
                comment: "The tour provided a great mix of city exploration and cultural experiences."
            }
        ]
    },
    {
        id: 25,
        category: "Beach Holidays",
        title: "Hawaiian Paradise",
        image: "https://example.com/images/hawaiian-paradise.jpg",
        description: "Escape to the breathtaking beauty of Hawaii with this 8-day package. Package includes flights, hotel accommodations, meals, and activities.",
        price: 2800,
        location: {
            latitude: 21.3069,
            longitude: -157.8583
        },
        reviews: [
            {
                customerName: "William Brown",
                rating: 5,
                comment: "The beaches and volcanic landscapes of Hawaii were absolutely stunning."
            },
            {
                customerName: "Charlotte Lee",
                rating: 4.5,
                comment: "Enjoyed snorkeling and exploring the waterfalls. The luau was a highlight."
            }
        ]
    },
    {
        id: 26,
        category: "Europe Tours",
        title: "Cultural Capitals",
        image: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
        description: "Immerse yourself in the history and culture of Europe's greatest cities with this 12-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 4500,
        location: {
            latitude: 41.9028,
            longitude: 12.4964
        },
        reviews: [
            {
                customerName: "James Smith",
                rating: 5,
                comment: "Visiting Rome, Paris, and Barcelona in one trip was a dream come true. Loved the architecture and museums."
            },
            {
                customerName: "Amelia Turner",
                rating: 4.5,
                comment: "The guided tours provided interesting historical insights. The food was delicious."
            }
        ]
    },
    {
        id: 27,
        category: "Safari Tours",
        title: "Tanzania Safari",
        image: "https://media.istockphoto.com/id/172370298/photo/safari-goers-watching-elephants-on-the-serengeti-plain-tanzania.jpg?s=612x612&w=0&k=20&c=6RhtEjGjz9Jsqi95d4u9ZcP4pQUL2x9PfYqqUQpte-s=",
        description: "Experience the wonder of the Serengeti on this 10-day safari adventure in Tanzania. Package includes transportation, accommodations, meals, and guided tours.",
        price: 5900,
        location: {
            latitude: -6.3690,
            longitude: 34.8888
        },
        reviews: [
            {
                customerName: "Olivia Wilson",
                rating: 5,
                comment: "The wildlife sightings were incredible. The guides were knowledgeable and made the experience unforgettable."
            },
            {
                customerName: "Jack Taylor",
                rating: 4.5,
                comment: "Witnessing the Great Migration was a once-in-a-lifetime experience. Tanzania's landscapes were stunning."
            }
        ]
    },
    {
        id: 28,
        category: "Asia Tours",
        title: "Vietnam Adventure",
        image: "https://media.istockphoto.com/id/1176097924/photo/young-chinese-children-leading-parents-across-view-deck.jpg?s=612x612&w=0&k=20&c=O5RjnPF4vqs-6ydVjyCMwOHv_Q3jynFFZdYS9_b2WPc=",
        description: "Explore the stunning beauty and rich culture of Vietnam with this 8-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 2200,
        location: {
            latitude: 14.0583,
            longitude: 108.2772
        },
        reviews: [
            {
                customerName: "Henry Davis",
                rating: 4.5,
                comment: "Vietnam's landscapes and the Mekong Delta were breathtaking. Loved the street food."
            },
            {
                customerName: "Emily White",
                rating: 4,
                comment: "Enjoyed learning about the history and exploring Hanoi and Ho Chi Minh City."
            }
        ]
    },
    {
        id: 29,
        category: "Beach Holidays",
        title: "Maldives Getaway",
        image: "https://media.istockphoto.com/id/1093259834/photo/yacht-on-the-sea-from-top-view-turquoise-water-background-from-top-view-summer-seascape-from.jpg?s=612x612&w=0&k=20&c=14YBn19PuUSIlHr-wE2IQg-zVqrdGJ9kBF5AAifsxyc=",
        description: "Experience the ultimate in relaxation and luxury with this 6-day getaway to the Maldives. Package includes flights, hotel accommodations, meals, and spa treatments.",
        price: 4500,
        location: {
            latitude: 3.2028,
            longitude: 73.2207
        },
        reviews: [
            {
                customerName: "Alexander Brown",
                rating: 5,
                comment: "The overwater bungalows and pristine beaches were paradise. The spa treatments were heavenly."
            },
            {
                customerName: "Abigail Harris",
                rating: 4.5,
                comment: "The Maldives provided the perfect escape for relaxation. Loved the crystal-clear waters."
            }
        ]
    },
    {
        id: 30,
        category: "Europe Tours",
        title: "Scenic Switzerland",
        image: "https://media.istockphoto.com/id/623433858/photo/hiking-trail-leading-to-the-beautiful-lake-seealpsee-in-switzerland-picture-id623433858?s=612x612&w=0&k=20&c=bQr6-6TixgJcQX5QSC5XTWdIPtlrKFGqUTdFlQ_07zQ=",
        description: "Discover the breathtaking landscapes of Switzerland on this 10-day scenic tour. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 3800,
        location: {
            latitude: 46.8182,
            longitude: 8.2275
        },
        reviews: [
            {
                customerName: "Daniel Thomas",
                rating: 4.5,
                comment: "The Swiss Alps were stunning. Enjoyed the cable car rides and picturesque villages."
            },
            {
                customerName: "Ella Clark",
                rating: 5,
                comment: "The tour provided ample opportunities for hiking and enjoying the natural beauty of Switzerland."
            }
        ]
    },
    {
        id: 31,
        category: "Safari Tours",
        title: "Kenya Wildlife Safari",
        image: "https://media.istockphoto.com/id/1128228758/vector/savanna-landscape-vector-illustration.jpg?s=612x612&w=0&k=20&c=ejSLZxst1K73FLe89Jf9LAg4MaFPt2OUuJRH-jCmNMM=",
        description: "Discover the incredible wildlife of Kenya on this 12-day safari adventure. Package includes transportation, accommodations, meals, and guided tours.",
        price: 6200,
        location: {
            latitude: -1.2864,
            longitude: 36.8172
        },
        reviews: [
            {
                customerName: "Sophia Johnson",
                rating: 4.5,
                comment: "The safari was a memorable experience. Saw lions, elephants, and giraffes in their natural habitat."
            },
            {
                customerName: "Emma Smith",
                rating: 5,
                comment: "Kenya's wildlife was awe-inspiring. The guides were knowledgeable and made the safari enjoyable."
            }
        ]
    },
    {
        id: 32,
        category: "Asia Tours",
        title: "Thai Paradise",
        image: "https://media.istockphoto.com/id/1001927840/photo/hot-air-balloon-above-high-mountain-at-sunset.jpg?s=612x612&w=0&k=20&c=uT7VTvGCswxSRTl67bY1jHCWiLzYJz43zC6UXehCtm0=",
        description: "Experience the beauty and culture of Thailand with this 9-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 2900,
        location: {
            latitude: 15.8700,
            longitude: 100.9925
        },
        reviews: [
            {
                customerName: "Ava Taylor",
                rating: 4,
                comment: "Thailand's temples and beaches were stunning. Enjoyed the local cuisine and traditional performances."
            },
            {
                customerName: "Oliver Brown",
                rating: 4.5,
                comment: "The package provided a good balance of cultural experiences and relaxation. Loved exploring Bangkok and Phuket."
            }
        ]
    },
    {
        id: 33,
        category: "Beach Holidays",
        title: "Bahamas Getaway",
        image: "https://media.istockphoto.com/id/1208302982/photo/beachfront-swimming-pool.jpg?s=612x612&w=0&k=20&c=SSPp1Uwl5IDI4o7kJHgkp6vmGzJ34mnjT9I-9XUOE5g=",
        description: "Escape to the tropical paradise of the Bahamas with this 6-day getaway package. Package includes flights, hotel accommodations, meals, and activities.",
        price: 1800,
        location: {
            latitude: 25.0343,
            longitude: -77.3963
        },
        reviews: [
            {
                customerName: "Liam Wilson",
                rating: 5,
                comment: "The beaches in the Bahamas were pristine. Snorkeling and swimming with dolphins were unforgettable experiences."
            },
            {
                customerName: "Mia Davis",
                rating: 4.5,
                comment: "Relaxing on the white sandy beaches was exactly what I needed. The activities included were enjoyable too."
            }
        ]
    },
    {
        id: 34,
        category: "Europe Tours",
        title: "Cultural Highlights",
        image: "https://media.istockphoto.com/id/891465194/photo/female-tourist-looking-the-basilica-di-santa-maria-della-salute-and-canale-grande-in-venice.jpg?s=612x612&w=0&k=20&c=jkFAmRFn1mFZmWk2VwZFeuE5jJ2eBqxFoIovS0RbySY=",
        description: "Explore the cultural highlights of Europe with this 10-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 3700,
        location: {
            latitude: 48.8566,
            longitude: 2.3522
        },
        reviews: [
            {
                customerName: "Noah Taylor",
                rating: 4,
                comment: "Visited iconic landmarks in Paris, Rome, and Venice. The tour guides provided interesting historical insights."
            },
            {
                customerName: "Isabella White",
                rating: 5,
                comment: "The package covered a lot of ground. Enjoyed immersing myself in the rich history and art of Europe."
            }
        ]
    },
    {
        id: 35,
        category: "Adventure Tours",
        title: "Bali Adventure",
        image: "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=",
        description: "Embark on an unforgettable adventure in Bali with this 8-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 2400,
        location: {
            latitude: -8.3405,
            longitude: 115.0920
        },
        reviews: [
            {
                customerName: "James Anderson",
                rating: 5,
                comment: "Bali's landscapes and temples were mesmerizing. Loved the water activities and traditional dance performances."
            },
            {
                customerName: "Charlotte Wilson",
                rating: 4.5,
                comment: "The package provided a good mix of adventure and relaxation. Bali's natural beauty exceeded my expectations."
            }
        ]
    },
    {
        id: 36,
        category: "Safari Tours",
        title: "Botswana Wildlife Safari",
        image: "https://media.istockphoto.com/id/623057220/photo/wildlife-elephants-in-tanzania.jpg?s=612x612&w=0&k=20&c=O9gslp2xS99XCcUD1uQiQa8wHEX-IMaGucTcYUQwReY=",
        description: "Experience the amazing wildlife of Botswana on this 10-day safari adventure. Package includes transportation, accommodations, meals, and guided tours.",
        price: 6700,
        location: {
            latitude: -22.3285,
            longitude: 24.6849
        },
        reviews: [
            {
                customerName: "Oliver Davis",
                rating: 4.5,
                comment: "The safari was a once-in-a-lifetime experience. Saw a wide variety of animals and learned about conservation efforts."
            },
            {
                customerName: "Sophia Johnson",
                rating: 5,
                comment: "Botswana's wildlife was breathtaking. The guides were knowledgeable and made the safari memorable."
            }
        ]
    },
    {
        id: 37,
        category: "Asia Tours",
        title: "Japan Discovery",
        image: "https://media.istockphoto.com/id/936189858/photo/japanese-family-relaxing-in-ueno-park-tokyo.jpg?s=612x612&w=0&k=20&c=bch0HOIvg-0DCwkiWFBmtL6yxbHqfOUcrYRmXyhrq_E=",
        description: "Discover the beauty and culture of Japan with this 12-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 5400,
        location: {
            latitude: 36.2048,
            longitude: 138.2529
        },
        reviews: [
            {
                customerName: "Liam Anderson",
                rating: 5,
                comment: "Japan's blend of tradition and modernity was fascinating. The package covered major cities and cultural sites."
            },
            {
                customerName: "Ava Taylor",
                rating: 4.5,
                comment: "Enjoyed the cherry blossom season and exploring Tokyo's bustling streets. The tour guides were helpful and friendly."
            }
        ]
    },
    {
        id: 38,
        category: "Beach Holidays",
        title: "Fiji Paradise",
        image: "https://media.istockphoto.com/id/1282649181/photo/young-couple-in-snorkeling-mask-dive-underwater-in-tropical-sea.jpg?s=612x612&w=0&k=20&c=fPpKGAnzNQLWFTc4ux696XQkcf0aCKBxCs2jr-aOP4U=",
        description: "Escape to the tropical paradise of Fiji with this 7-day package. Package includes flights, hotel accommodations, meals, and activities.",
        price: 3900,
        location: {
            latitude: -17.7134,
            longitude: 178.0650
        },
        reviews: [
            {
                customerName: "Emma Taylor",
                rating: 4.5,
                comment: "Fiji's beaches and underwater life were spectacular. Snorkeling and island hopping were the highlights of the trip."
            },
            {
                customerName: "Noah Brown",
                rating: 4,
                comment: "The package provided a relaxing escape. The resorts were luxurious and the staff was friendly."
            }
        ]
    },
    {
        id: 39,
        category: "Europe Tours",
        title: "Northern Lights",
        image: "https://media.istockphoto.com/id/1176439818/photo/making-a-memory.jpg?s=612x612&w=0&k=20&c=QdOhqkmo-9hxfrspVSA0hDdb2W3qITaJgPKqr3J4anc=",
        description: "Witness the natural wonder of the Northern Lights on this 9-day package in Norway. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 3200,
        location: {
            latitude: 60.4720,
            longitude: 8.4689
        },
        reviews: [
            {
                customerName: "James Wilson",
                rating: 5,
                comment: "The Northern Lights were a magical spectacle. The tour guides provided interesting information about the phenomenon."
            },
            {
                customerName: "Isabella Davis",
                rating: 4.5,
                comment: "The package exceeded my expectations. The landscapes of Norway were stunning, and I was lucky to witness the Northern Lights."
            }
        ]
    },
    {
        id: 40,
        category: "Adventure Tours",
        title: "Costa Rica Explorer",
        image: "https://media.istockphoto.com/id/871285136/photo/zip-line-in-the-jungle-in-costa-rica-picture-id871285136?s=612x612&w=0&k=20&c=YUe6y7SLQxNjXti1KjT2IgFb7IvE2YRl5WURFGvfMF4=",
        description: "Embark on an adventure-filled journey through Costa Rica with this 10-day package. Package includes flights, hotel accommodations, meals, and guided tours.",
        price: 4100,
        location: {
            latitude: 9.7489,
            longitude: -83.7534
        },
        reviews: [
            {
                customerName: "Charlotte Johnson",
                rating: 4,
                comment: "Costa Rica's natural beauty was astounding. Enjoyed the zip-lining, hiking, and exploring the rainforests."
            },
            {
                customerName: "Oliver Smith",
                rating: 4.5,
                comment: "The package offered a great balance of adventure and relaxation. The guides were knowledgeable and friendly."
            }
        ]
    }
]
export default Travdata;