// Menu Data Array supporting both English and Khmer
const menu = [
    {
        id: 1,
        category: "asian",
        price: "$13.00",
        img: "./images/food/01.ត្រីសាលម៉ុនឆៅ.jpg",
        en: {
            title: "Raw Salmon ( Sashimi ) 250g",
            desc: "A premium selection of chef's choice nigiri, maki rolls, and fresh sashimi served with wasabi."
        },
        km: {
            title: "ត្រីសាលម៉ុនឆៅ",
            desc: "ជម្រើសពិសេសចុងភៅសម្រាប់ នីហ្គីរី ម៉ាគីរ៉ូល និងសាស៊ីមីស្រស់ៗ ជូនរ៉មជាមួយវ៉ាសាប៊ិ។"
        }
    },
    {
        id: 2,
        category: "asian",
        price: "$7.00",
        img: "./images/food/02.ញុំាមីសួរគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Seafood Glass Noodle Salad",
            desc: "Traditional French beef stew braised in rich red wine, lardons, mushrooms, and carrots."
        },
        km: {
            title: "ញាំមីសួរគ្រឿងសមុទ្រ",
            desc: "ស៊ុបសាច់គោបែបបារាំងបុរាណ រំងាស់ជាមួយស្រាក្រហម ផ្សិត និងការ៉ុត យ៉ាងឈ្ងុយឆ្ងាញ់។"
        }
    },
    {
        id: 3,
        category: "asian",
        price: "$3.99",
        img: "./images/food/03.បុកល្ហុងក្ដាមប្រៃ.jpg",
        en: {
            title: "Green Papaya with Salt Crab Salad",
            desc: "Ceremonial grade Japanese green tea whisked with steamed oat milk and raw honey."
        },
        km: {
            title: "បុកល្ហុងក្ដាមប្រៃ",
            desc: "តែបៃតងជប៉ុនលំដាប់ថ្នាក់ថ្វាយព្រះសង្ឃ វាយលាយជាមួយទឹកដោះគោអូត និងទឹកឃ្មុំធម្មជាតិ។"
        }
    },
    {
        id: 4,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 5,
        category: "asian",
        price: "$5.75",
        img: "./images/food/05.ភ្លាសាច់គោបែបខ្មែរ.jpg",
        en: {
            title: "Beef Salad with Khmer Herbs",
            desc: "Authentic Roman pasta made with crispy guanciale, egg yolks, and Pecorino Romano cheese."
        },
        km: {
            title: "ភ្លាសាច់គោបែបខ្មែរ",
            desc: "ប៉ាស្តាបែប រ៉ូម៉ាំង ពិតប្រាកដ ចម្អិនជាមួយសាច់ជ្រូកបំពងស្រួយ ផ្នែកលឿងនៃស៊ុត និងឈីស Pecorino Romano។"
        }
    },
    {
        id: 6,
        category: "asian",
        price: "$10.00",
        img: "./images/food/06.បង្គារកោះកុង.jpg",
        en: {
            title: "Raw Prawn with Spicy Koh Kong Sauce",
            desc: "Refreshing blend of white rum, fresh lime juice, muddled mint leaves, and sparkling soda."
        },
        km: {
            title: "បង្គាកោះកុង",
            desc: "ការលាយបញ្ចូលគ្នាដ៏ស្រស់ស្រាយនៃស្រា រ៉ាំ សរ ទឹកក្រូចឆ្មារស្រស់ ស្លឹកជីអង្កាម និងសូដា។"
        }
    },
    {
        id: 7,
        category: "asian",
        price: "$5.50",
        img: "./images/food/07.ខាត់ណាទឹកភែ្នក.jpg",
        en: {
            title: "Beef with Baby Kale & Spicy Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ខាត់ណាទឹកភ្នែក",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 8,
        category: "asian",
        price: "$4.75",
        img: "./images/food/08.បុកសណ្ដែកគួរត្រីឆ្អើរ.jpg",
        en: {
            title: "Mixed Long Bean & Smock Fish Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកសណ្ដែកគួរត្រីឆ្អើរ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 9,
        category: "asian",
        price: "$7.50",
        img: "./images/food/09.ស្ងោរងាំងូវមាន់ស្រែ.jpg",
        en: {
            title: "Khmer Chicken Sour Soup with Lime Pickle( Half chicken )",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្ងោរងាំងូវមាន់ស្រែ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 10,
        category: "asian",
        price: "$6.00",
        img: "./images/food/10.Pork Stomach Soup with Green Pepper Corn.jpg",
        en: {
            title: "Pork Stomach Soup with Green Pepper Corn",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស៊ុបក្រពះជ្រូកម្រេចខ្ចី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 11,
        category: "asian",
        price: "$7.00",
        img: "./images/food/11.សម្លម្ជូរយួនសាច់ត្រី.jpg",
        en: {
            title: "Vietnamese Sour Soup with Fish",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សម្លម្ចូរយូនសាច់ត្រី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 12,
        category: "asian",
        price: "$5.75",
        img: "./images/food/12.ស៊ុបក្ដាម.jpg",
        en: {
            title: "Crab Meat Soup",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស៊ុបក្ដាម",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 13,
        category: "asian",
        price: "$7.00",
        img: "./images/food/13.សម្លម្ជូរគ្រឿងសាច់គោ.jpg",
        en: {
            title: "Khmer Traditional Beef Sour Soup with Lemongrass Paste",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សម្លម្ជូរគ្រឿងសាច់គោ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 14,
        category: "asian",
        price: "$8.00",
        img: "./images/food/14.សាច់គោអាំងទឹកប្រហុក.jpg",
        en: {
            title: "Grilled Beef with Brahok Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាច់គោអាំងទឹកប្រហុក",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 15,
        category: "asian",
        price: "$8.50",
        img: "./images/food/15.សាច់គោជ្រលួញពិសេស.jpg",
        en: {
            title: "Grilled Beef Skewer with Papaya Pickle",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាច់គោជ្រនួចពិសេស",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 16,
        category: "asian",
        price: "$20.00",
        img: "./images/food/16.Grilled Khmer Chicken.jpg",
        en: {
            title: "Grilled Khmer Chicken with Khmer Sauce( One Chicken )",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "មាន់ស្រែអាំង(មាន់មួយក្បាល)",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 17,
        category: "asian",
        price: "$7.00",
        img: "./images/food/17.ប្រហិតត្រីចៀន.jpg",
        en: {
            title: "Deep-Fried Fish Cake",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ប្រហិតត្រីចៀន",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 18,
        category: "asian",
        price: "$4.00",
        img: "./images/food/18.ចាយ៉សាច់ជ្រូក.jpg",
        en: {
            title: "Deep-Fried Pork spring Roll",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ចាយ៉ សាច់ជ្រូក",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 19,
        category: "asian",
        price: "$5.25",
        img: "./images/food/19.អណ្ដាតទាបំពងខ្ទឹមស.jpg",
        en: {
            title: "Deep-Fried Duck Tongues with Garlic",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "អណ្ដាតទាបំពងខ្ទឺមស",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 20,
        category: "asian",
        price: "$38.00",
        img: "./images/food/20.Steamed Grouper Fish with Soy Sauce.jpg",
        en: {
            title: "Steamed Grouper Fish with Soy Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ត្រីតុកែចំហុយទឺកស៊ុអ៊ុវ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 21,
        category: "asian",
        price: "$12.00",
        img: "./images/food/21.ឆាក្ដាមសេះជាមួយពងទាប្រៃ.jpg",
        en: {
            title: "Stir Fried Horse  Crab with Salty Egg",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ឆាក្ដាមសេះជាមួយពងទាប្រៃ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 22,
        category: "asian",
        price: "$12.00",
        img: "./images/food/22.ក្ដាមសេះឆាការី.jpg",
        en: {
            title: "Stir Fried Horse Crab with Curry Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ក្ដាមសេះឆាការី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 23,
        category: "asian",
        price: "$8.50",
        img: "./images/food/23.អាម៉ុកគឿងសមុទ្រ.jpg",
        en: {
            title: "Amok Seafood in Fresh Coconut",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "អាម៉ុកគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 24,
        category: "asian",
        price: "$7.00",
        img: "./images/food/24.អាម៉ុកត្រី.jpg",
        en: {
            title: "Amok Fish in fresh Coconut",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "អាម៉ុកត្រី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 25,
        category: "asian",
        price: "$22.00",
        img: "./images/food/25.ត្រីឆ្ពុងបំពងជូអែម.jpg",
        en: {
            title: "Deep-Fried Seabass Fish with Sweet & Sour Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ត្រីឆ្ពង់បំពងជូអែម",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 26,
        category: "asian",
        price: "$13.00",
        img: "./images/food/26.Deep-Fried Bar Fish with.jpg",
        en: {
            title: "Deep-Fried Bar Fish with Water Mimosa in Traditional Khmer Lemongrass Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ត្រីរ៉ស់បឹងកញ្ឆែត",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 27,
        category: "asian",
        price: "$6.50",
        img: "./images/food/27.ឆាឡុកឡាក់សាច់គោ.jpg",
        en: {
            title: "Beef Lok Lak (250g)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ឆាឡុកឡាក់សាច់គោ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 28,
        category: "asian",
        price: "$7.00",
        img: "./images/food/28.Stir Fried Seafood with Green Peppercorn.jpg",
        en: {
            title: "Stir Fried Seafood with Green Peppercorn",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ឆាគ្រឿងសមុទ្រម្រេចខ្ចី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 29,
        category: "asian",
        price: "$10.00",
        img: "./images/food/29.បង្គាបំពងខ្ទឹមស.jpg",
        en: {
            title: "Deep-Fried Prawn with Garlic",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បង្គាបំពងខ្ទឹមស",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 30,
        category: "asian",
        price: "$8.00",
        img: "./images/food/30.បង្គាអប់មីសួរ.jpg",
        en: {
            title: "Steamed Prawn with Vermicelli",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បង្គាអប់មីសួរ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 31,
        category: "asian",
        price: "$6.00",
        img: "./images/food/31.ឆ្អឹងជំនីជ្រូកបំពងខ្ទឹមស.jpg",
        en: {
            title: "Deep-Fried Pork Ribs",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ឆ្អឹងជំនីជ្រូកបំពងខ្ទឹមស",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 32,
        category: "asian",
        price: "$6.00",
        img: "./images/food/32.បាយឆាសាច់ក្ដាម.jpg",
        en: {
            title: "Crab Fried Rice",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បាយឆាសាច់ក្ដាម",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 33,
        category: "asian",
        price: "$5.50",
        img: "./images/food/33.បាយឆាយ៉ាងចូវ.jpg",
        en: {
            title: "Fried Rice Yang Chov",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បាយឆាយ៉ាងចូវ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 34,
        category: "asian",
        price: "$7.00",
        img: "./images/food/34.បាយឆាគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Fried Rice seafood",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បាយឆាគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 35,
        category: "asian",
        price: "$5.00",
        img: "./images/food/35.Fried Rice Beef.jpg",
        en: {
            title: "Fried Rice Beef",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បាយឆាសាច់គោ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 36,
        category: "asian",
        price: "$4.00",
        img: "./images/food/36.Stir Fried Baby Kale with Oyster Sauce.jpg",
        en: {
            title: "Stir Fried Baby Kale with Oyster Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ឆាកូនខាតណាប្រងខ្យង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 37,
        category: "asian",
        price: "$4.00",
        img: "./images/food/37.Stir Fried Mixed Vegi with Oyster Sauce.jpg",
        en: {
            title: "Stir Fried Mixed Vegi with Oyster Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ឆាបន្លែគ្រប់មុខប្រេងខ្យង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 38,
        category: "western",
        price: "$5.50",
        img: "./images/food/38.សាឡាដពិសេសវាតា.jpg",
        en: {
            title: "Veata's Salad ( Fried Salmon, Grilled Chicken & Tuna )",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាឡាដពិសេសវាតា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 39,
        category: "western",
        price: "$4.50",
        img: "./images/food/39.សាឡាដសាច់មាន់.jpg",
        en: {
            title: "Grilled Chicken Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាឡាដសាច់មាន់",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 40,
        category: "western",
        price: "$5.00",
        img: "./images/food/40.សាឡាដជាមួយបង្គារបំពងម្សៅ.jpg",
        en: {
            title: "Prawn Tempura Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាឡាដជាមួយបង្គារបំពងម្សៅ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 41,
        category: "western",
        price: "$5.00",
        img: "./images/food/41.Tuna Salad.jpg",
        en: {
            title: "Tuna Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាឡាដត្រីធូណា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 42,
        category: "western",
        price: "$5.00",
        img: "./images/food/42.មឹកបំពងស្រួយ.jpg",
        en: {
            title: "Crispy Calamari",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "មឹកបំពងស្រួយ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 43,
        category: "western",
        price: "$5.00",
        img: "./images/food/43.បង្គារបំពងកំទិចនំបុ័ង.jpg",
        en: {
            title: "Crispy Prawn Tempura",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បង្គារបំពងកំទិចនំបុ័ង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 44,
        category: "western",
        price: "$2.50",
        img: "./images/food/44.ដំឡូងបំពង.jpg",
        en: {
            title: "French Fries",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ដំឡូងបំពង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 45,
        category: "western",
        price: "$7.00",
        img: "./images/food/45.Spaghetti Seafood.jpg",
        en: {
            title: "Spaghetti Seafood",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្ពាហ្គាទីគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 46,
        category: "western",
        price: "$6.00",
        img: "./images/food/46.Spaghetti Cabonara.jpg",
        en: {
            title: "Spaghetti Cabonara",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្ពាហ្គាទីកាបូណារ៉ា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 47,
        category: "western",
        price: "$5.00",
        img: "./images/food/47.Spaghetti Bolognese.jpg",
        en: {
            title: "Spaghetti Bolognese",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្ពាហ្គាទីបូឡូញេស",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 48,
        category: "western",
        price: "$5.50",
        img: "./images/food/48.បឺហ្គឺសាច់គោ.jpg",
        en: {
            title: "Beef Burger",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បឺហ្គឺសាច់គោ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 49,
        category: "western",
        price: "$5.50",
        img: "./images/food/49.បឺហ្គឺបង្គា.jpg",
        en: {
            title: "Prawn Katsu Burger",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បឺហ្គឺបង្គា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 50,
        category: "western",
        price: "$5.00",
        img: "./images/food/50.សាំងវិចក្លឹប.jpg",
        en: {
            title: "Club Sandwich",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាំងវិចក្លឹប",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 51,
        category: "western",
        price: "$4.50",
        img: "./images/food/51.សាំងវិចធូណា.jpg",
        en: {
            title: "Tuna Sandwich",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាំងវិចត្រីធូណា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 52,
        category: "western",
        price: "$12.00",
        img: "./images/food/52.Australia BeefRibeye Steak (300g).jpg",
        en: {
            title: "Australia BeefRibeye Steak (300g)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្តេកសាច់គោអូស្រ្តាលី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 53,
        category: "western",
        price: "$15.00",
        img: "./images/food/53.Us Beef Striplion.jpg",
        en: {
            title: "Us Beef Striplion",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្តេកសាច់គោអូអាមេរិក",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 54,
        category: "western",
        price: "$13.50",
        img: "./images/food/54.Australia Lamb.jpg",
        en: {
            title: "Australia Lamb Rack (280g)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្តេកសាច់ឆ្អឹងជំនីចៀមអាំង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 55,
        category: "western",
        price: "$15.00",
        img: "./images/food/55.Salmon Steak (250G).jpg",
        en: {
            title: "Salmon Steak (250G)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្តេកត្រីសាលម៉ុន (250G)",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 02,
        category: "drink",
        price: "$30.00",
        img: "./images/drink/02.Koonunga Hill Red (Btl).jpg",
        en: {
            title: "Koonunga Hill Red",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Koonunga Hill Red",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 03,
        category: "drink",
        price: "$58.00",
        img: "./images/drink/03.Max's Red.jpg",
        en: {
            title: "Max's Red",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Max's Red",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 04,
        category: "drink",
        price: "$58.00",
        img: "./images/drink/4.Bin2.jpg",
        en: {
            title: "Bin2",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Bin2",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 07,
        category: "drink",
        price: "$180.00",
        img: "./images/drink/07.Bin 389.jpg",
        en: {
            title: "Bin 389",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Bin 389",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 08,
        category: "drink",
        price: "$35.00",
        img: "./images/drink/08.Migthy Blue Shiraz.jpg",
        en: {
            title: "Migthy Blue Shiraz",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Migthy Blue Shiraz",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 09,
        category: "drink",
        price: "$35.00",
        img: "./images/drink/09.Migthy Blue Carbernet Savigon.jpg",
        en: {
            title: "Migthy Blue Carbernet Savigon",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Migthy Blue Carbernet Savigon",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 11,
        category: "drink",
        price: "$65.00",
        img: "./images/drink/11.Chateau Yaldera Lily Plonds Crenache.jpg",
        en: {
            title: "Chateau Yaldera Lily Plonds Crenache",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Chateau Yaldera Lily Plonds Crenache",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 14,
        category: "drink",
        price: "$3.50",
        img: "./images/drink/14.ABC (can).jpg",
        en: {
            title: "ABC (can)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ABC កំប៉ុង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 15,
        category: "drink",
        price: "$2.50",
        img: "./images/drink/15.Angkor Bottle.jpg",
        en: {
            title: "Angkor (btl)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Angkor ដប",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 16,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/16.Corona Bottle.jpg",
        en: {
            title: "Corona (btl)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Corona ដប",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 17,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/17.Tigger Bottle.jpg",
        en: {
            title: "Tiger (btl)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Tiger ដប",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 18,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/18.HANUMAN Bottle.jpg",
        en: {
            title: "Hanuman (btl)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Hanuman ដប",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 19,
        category: "drink",
        price: "$3.០0",
        img: "./images/drink/19.Heineken Bottle.jpg",
        en: {
            title: "Heineken (btl)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Heineken ដប",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 20,
        category: "drink",
        price: "$1.50",
        img: "./images/drink/20.Eau Kulen (500ml).jpg",
        en: {
            title: "Eau Kulen (500ml)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ទឹកបរិសុទ្ធគូលែន (500ml)",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 21,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/21.Eau Kulen (1500ml).jpg",
        en: {
            title: "Eau Kulen (1500ml)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ទឹកបរិសុទ្ធគូលែន (1500ml)",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 22,
        category: "drink",
        price: "$1.50",
        img: "./images/drink/22.Vital  (500ml).jpg",
        en: {
            title: "Vital (500ml)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ទឹកបរិសុទ្ធវីតាល់ (500ml)",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 23,
        category: "drink",
        price: "$2.00",
        img: "./images/drink/23.Vital(1500ml).jpg",
        en: {
            title: "Vital (1500ml)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ទឹកបរិសុទ្ធវីតាល់ (1500ml)",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 24,
        category: "drink",
        price: "$1.50",
        img: "./images/drink/24.Coke.jpg",
        en: {
            title: "Coke",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ទឹកក្រូច Coca",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 25,
        category: "drink",
        price: "$1.50",
        img: "./images/drink/25.Yeo's.jpg",
        en: {
            title: "Yoe's",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ទឹកផ្លែឈើ Yoe's",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 26,
        category: "drink",
        price: "$1.50",
        img: "./images/drink/26.Soda Water.jpg",
        en: {
            title: "Soda Water",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ទឹកសូដា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 27,
        category: "drink",
        price: "$1.50",
        img: "./images/drink/27.Sprite.jpg",
        en: {
            title: "Sprite",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ទឹកក្រូច Sprit",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 28,
        category: "drink",
        price: "$75.00",
        img: "./images/drink/28.Ballantine 12Year.jpg",
        en: {
            title: "Ballantine 12Year",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Ballantine 12Year",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 30,
        category: "drink",
        price: "$45.00",
        img: "./images/drink/30.Chivas Regal 12Year.jpg",
        en: {
            title: "Chivas Regal 12Year",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Chivas Regal 12Year",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 32,
        category: "drink",
        price: "$145.00",
        img: "./images/drink/32.Royal Salute 21Year.jpg",
        en: {
            title: "Royal Salute 21Year",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Royal Salute 21Year",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 33,
        category: "drink",
        price: "$75.00",
        img: "./images/drink/33.Double Black.jpg",
        en: {
            title: "Double Black",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Double Black",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 34,
        category: "drink",
        price: "$95.00",
        img: "./images/drink/34.Gold Label.jpg",
        en: {
            title: "Gold Label",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Gold Label",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 35,
        category: "drink",
        price: "$54.00",
        img: "./images/drink/35.Jack Daneil's.jpg",
        en: {
            title: "Jack Daneil's",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Jack Daneil's",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 36,
        category: "drink",
        price: "$27.00",
        img: "./images/drink/36.Jim Beam.jpg",
        en: {
            title: "Jim Beam",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Jim Beam",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 37,
        category: "drink",
        price: "$70.00",
        img: "./images/drink/37.Black Label.jpg",
        en: {
            title: "Black Label",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Black Label",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 38,
        category: "drink",
        price: "$45.00",
        img: "./images/drink/38.Red Label.jpg",
        en: {
            title: "Red Label",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Red Label",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 39,
        category: "drink",
        price: "$80.00",
        img: "./images/drink/39.Platimuim Label.jpg",
        en: {
            title: "Platimuim Label",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Platimuim Label",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 40,
        category: "drink",
        price: "$230.00",
        img: "./images/drink/40.Martell X.O.jpg",
        en: {
            title: "Martell X.O",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Martell X.O",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 41,
        category: "drink",
        price: "$230.00",
        img: "./images/drink/41.Martell Cordon Blue.jpg",
        en: {
            title: "Martell Cordon Blue",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Martell Cordon Blue",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 43,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/43.Blue Margarita.jpg",
        en: {
            title: "Blue Margarita",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Blue Margarita",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 44,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/44.Pink Lady.jpg",
        en: {
            title: "Pink Lady",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Pink Lady",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 46,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/46.Mojito.jpg",
        en: {
            title: "Mojito",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Mojito",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 47,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/47.B-52.jpg",
        en: {
            title: "B-52",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "B-52",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 49,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/49.Special Mekong view.jpg",
        en: {
            title: "Special Mekong view",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Special Mekong view",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 50,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/50.Pina Colado.jpg",
        en: {
            title: "Pina Colado",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Pina Colado",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 51,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/51.Long Island.jpg",
        en: {
            title: "Long Island",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Long Island",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 52,
        category: "drink",
        price: "$4.00",
        img: "./images/drink/52.Blue Mekong.jpg",
        en: {
            title: "Blue Mekong",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Blue Mekong",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 53,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/53.Apple Shake.jpg",
        en: {
            title: "Apple Shake",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Apple Shake",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 54,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/54.Coconut Shake.jpg",
        en: {
            title: "Coconut Shake",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Coconut Shake",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 55,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/55.Passion Shake.jpg",
        en: {
            title: "Passion Shake",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Passion Shake",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 56,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/56.Pineapple Shake.jpg",
        en: {
            title: "Pineapple Shake",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Pineapple Shake",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 57,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/57.Watermelon Shake.jpg",
        en: {
            title: "Watermelon Shake",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Watermelon Shake",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 58,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/58.Avocado Shake.jpg",
        en: {
            title: "Avocado Shake",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Avocado Shake",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 59,
        category: "drink",
        price: "$3.00",
        img: "./images/drink/59.Mix Fruite Shake.jpg",
        en: {
            title: "Mix Fruite Shake",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "Mix Fruite Shake",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },


];

// Target UI elements
const menuContainer = document.getElementById("menu-container");
const filterBtns = document.querySelectorAll(".filter-btn");
const langToggleBtn = document.getElementById("lang-toggle");

// Current tracking states
let currentLanguage = "en"; // Options: 'en' or 'km'
let currentCategory = "all";

// Initial Load
window.addEventListener("DOMContentLoaded", function () {
    updateUIStrings();
    renderMenu();
});

// Main render function handles both language switching and filtering seamlessly
function renderMenu() {
    // 1. Filter items based on active category
    let filteredMenu = menu;
    if (currentCategory !== "all") {
        filteredMenu = menu.filter(item => item.category === currentCategory);
    }

    // 2. Generate HTML parsing the correct language node ('en' or 'km')
    let displayMenu = filteredMenu.map(function (item) {
        const langData = item[currentLanguage]; // Dynamically targets item.en or item.km
        
        return `<article class="menu-item">
            
            <div class="img-container">
                <img src="${item.img}" alt="${langData.title}" class="item-img">
            </div>
            <div class="item-info">
                <div class="item-header">
                    <h3>${item.id}. ${langData.title}</h3>
                </div>
                <h2 class="price">${item.price}</h2>
            </div>
        </article>`;
    });

    menuContainer.innerHTML = displayMenu.join("");
}

// Function to translate static sidebar headings and filter button texts
function updateUIStrings() {
    // Translate all active category filter buttons
    filterBtns.forEach(btn => {
        btn.innerText = btn.getAttribute(`data-${currentLanguage}`);
    });
}

// Language Switch Event Listener
langToggleBtn.addEventListener("click", function () {
    // Toggle active state value
    currentLanguage = currentLanguage === "en" ? "km" : "en";
    
    // Style toggle indicator or text change if desired
    langToggleBtn.innerText = currentLanguage === "en" ? "KHMER" : "ENGLISH";
    
    // Update structural layout text and refresh menu
    updateUIStrings();
    renderMenu();
});

// Category Filter Configurations
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        filterBtns.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active");

        currentCategory = e.currentTarget.dataset.id;
        renderMenu();
    });
});
