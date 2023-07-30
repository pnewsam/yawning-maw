import { Restaurant } from ".";

const google = {
  address_components: [
    {
      long_name: "ste b-111",
      short_name: "ste b-111",
      types: ["subpremise"],
    },
    {
      long_name: "1040",
      short_name: "1040",
      types: ["street_number"],
    },
    {
      long_name: "University Avenue",
      short_name: "University Ave",
      types: ["route"],
    },
    {
      long_name: "Hillcrest",
      short_name: "Hillcrest",
      types: ["neighborhood", "political"],
    },
    {
      long_name: "San Diego",
      short_name: "San Diego",
      types: ["locality", "political"],
    },
    {
      long_name: "San Diego County",
      short_name: "San Diego County",
      types: ["administrative_area_level_2", "political"],
    },
    {
      long_name: "California",
      short_name: "CA",
      types: ["administrative_area_level_1", "political"],
    },
    {
      long_name: "United States",
      short_name: "US",
      types: ["country", "political"],
    },
    {
      long_name: "92103",
      short_name: "92103",
      types: ["postal_code"],
    },
  ],
  adr_address:
    '<span class="street-address">1040 University Ave ste b-111</span>, <span class="locality">San Diego</span>, <span class="region">CA</span> <span class="postal-code">92103</span>, <span class="country-name">USA</span>',
  business_status: "OPERATIONAL",
  curbside_pickup: false,
  current_opening_hours: {
    open_now: true,
    periods: [
      {
        close: {
          date: "2023-07-02",
          day: 0,
          time: "2200",
        },
        open: {
          date: "2023-07-02",
          day: 0,
          time: "1100",
        },
      },
      {
        close: {
          date: "2023-06-26",
          day: 1,
          time: "2200",
        },
        open: {
          date: "2023-06-26",
          day: 1,
          time: "1100",
        },
      },
      {
        close: {
          date: "2023-06-27",
          day: 2,
          time: "2200",
        },
        open: {
          date: "2023-06-27",
          day: 2,
          time: "1100",
        },
      },
      {
        close: {
          date: "2023-06-28",
          day: 3,
          time: "2200",
        },
        open: {
          date: "2023-06-28",
          day: 3,
          time: "1100",
        },
      },
      {
        close: {
          date: "2023-06-29",
          day: 4,
          time: "2200",
        },
        open: {
          date: "2023-06-29",
          day: 4,
          time: "1100",
        },
      },
      {
        close: {
          date: "2023-06-30",
          day: 5,
          time: "2300",
        },
        open: {
          date: "2023-06-30",
          day: 5,
          time: "1100",
        },
      },
      {
        close: {
          date: "2023-07-01",
          day: 6,
          time: "2300",
        },
        open: {
          date: "2023-07-01",
          day: 6,
          time: "1100",
        },
      },
    ],
    weekday_text: [
      "Monday: 11:00 AM – 10:00 PM",
      "Tuesday: 11:00 AM – 10:00 PM",
      "Wednesday: 11:00 AM – 10:00 PM",
      "Thursday: 11:00 AM – 10:00 PM",
      "Friday: 11:00 AM – 11:00 PM",
      "Saturday: 11:00 AM – 11:00 PM",
      "Sunday: 11:00 AM – 10:00 PM",
    ],
  },
  delivery: true,
  dine_in: true,
  editorial_summary: {
    language: "en",
    overview:
      "Bright, modern Japanese eatery featuring ramen & an assortment of small plates & snacks.",
  },
  formatted_address: "1040 University Ave ste b-111, San Diego, CA 92103, USA",
  formatted_phone_number: "(619) 831-0101",
  geometry: {
    location: {
      lat: 32.7486792,
      lng: -117.1545047,
    },
    viewport: {
      northeast: {
        lat: 32.74996618029149,
        lng: -117.1531958697085,
      },
      southwest: {
        lat: 32.74726821970849,
        lng: -117.1558938302915,
      },
    },
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
  icon_background_color: "#FF9E67",
  icon_mask_base_uri:
    "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
  international_phone_number: "+1 619-831-0101",
  name: "Nishiki Ramen",
  opening_hours: {
    open_now: true,
    periods: [
      {
        close: {
          day: 0,
          time: "2200",
        },
        open: {
          day: 0,
          time: "1100",
        },
      },
      {
        close: {
          day: 1,
          time: "2200",
        },
        open: {
          day: 1,
          time: "1100",
        },
      },
      {
        close: {
          day: 2,
          time: "2200",
        },
        open: {
          day: 2,
          time: "1100",
        },
      },
      {
        close: {
          day: 3,
          time: "2200",
        },
        open: {
          day: 3,
          time: "1100",
        },
      },
      {
        close: {
          day: 4,
          time: "2200",
        },
        open: {
          day: 4,
          time: "1100",
        },
      },
      {
        close: {
          day: 5,
          time: "2300",
        },
        open: {
          day: 5,
          time: "1100",
        },
      },
      {
        close: {
          day: 6,
          time: "2300",
        },
        open: {
          day: 6,
          time: "1100",
        },
      },
    ],
    weekday_text: [
      "Monday: 11:00 AM – 10:00 PM",
      "Tuesday: 11:00 AM – 10:00 PM",
      "Wednesday: 11:00 AM – 10:00 PM",
      "Thursday: 11:00 AM – 10:00 PM",
      "Friday: 11:00 AM – 11:00 PM",
      "Saturday: 11:00 AM – 11:00 PM",
      "Sunday: 11:00 AM – 10:00 PM",
    ],
  },
  photos: [
    {
      height: 3024,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/110908555833473739403">Nishiki Ramen</a>',
      ],
      photo_reference:
        "AZose0nAq9NbuG6LiJAdIjFUFSbGVg2uzWmwJj80PnR7jI7kuMhCnPrxU0KHLFszUSL63xVr1rZNpelum-Ji-5Yx62PSaM6UFxdSpE2HKQwsOuonqfs7i_DUrKA7gI06xnM5Au9v6MINuiZmHrFGeC1mR2lC3MGKxEhFqZNhnx4AGJtBQngh",
      width: 4032,
    },
    {
      height: 3648,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/110908555833473739403">Nishiki Ramen</a>',
      ],
      photo_reference:
        "AZose0lifQhPGYUve_vKBCue4CI9LctSQs0rqhD0gF_7Yb8DjMhBxnp36mpdgJyAEivKn-TYY799UKtIRut_MyrUFkZBUqmHKJ-_5zysCa1uW_lvJOAUdZFdeOe4s8Wq42Y6uonSqsUvx-Jynb5bBvnwHg1LKU5zuliSbsEdQPAatVarLRu0",
      width: 5472,
    },
    {
      height: 3024,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/104818683814623787379">Allison</a>',
      ],
      photo_reference:
        "AZose0la9grfnJkpI9leW7cxs1tqPH5ZnLhTKn-9iw4XaoC6vGlB7Uym9zKrllaYnpFaUPW_-drrgVqaR6SWo1r-zoUSsoYTT5NWp_E92rMLHpdKED_d4SsKJXyy7WS6uyTGcQC84rMv8NsmxTrvvURA3ZEICC-ReeAwdn0g50gjaAtYZvBP",
      width: 4032,
    },
    {
      height: 6336,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/108008153668239929214">Chip Hayashi</a>',
      ],
      photo_reference:
        "AZose0kzqgSWoXEAl_ZF3JMv0GSrt-j3yRFEH9xp08U6FEuRcYAMw8oOhFHVGsVMYT0YXvl4GR_ZVO9qTFkFsq3WptX2ObxlFbZLS01gwPaLRr0mzr597GG0H-ues_L3GqIfSRGVYQM5W9NUjjJy5Lx9IncCDPFtplX5bJWcWJdKY4p_7YCa",
      width: 9504,
    },
    {
      height: 4624,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/103665628174852139887">Ana Noli</a>',
      ],
      photo_reference:
        "AZose0myvEo7bPb9dtLrqzxNDgNPlZ83VY7zg9swUJ9NVkcU2uh3sL3PyEQNJVHRMdZuNHPToUJpQM9Uh3F-G4vtRN8biXH0MOYyQ408XmH_LcTS3_v4sMHMgeGGl7pB7V7s_GurdOw1SBGIAUT5KWuVhHWCsWZEiUoh588-xC_fMRxEa-sV",
      width: 3472,
    },
    {
      height: 3072,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/114936433012511305612">Derek Harris</a>',
      ],
      photo_reference:
        "AZose0lSytPP3c3i_OHzlYWFQwvzm9jpx-nenuW0B5opwgmQo3O3FHuDpvu5OENfkRhksv6U9ijWEZrdlR5sDSvaVGpAUdKKKOhXQwcMrjo1UfMvJN4TkJ7Uv2ZkYaz2N4aYoNw1Vbj0nVK9cnK3VA0JJf22AMxHB4jY_n0HqLCLh-DZSgQO",
      width: 4080,
    },
    {
      height: 2124,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/110908555833473739403">Nishiki Ramen</a>',
      ],
      photo_reference:
        "AZose0nsZSkCPi7uzSlVzMKFoH1FiNvnypkDyH6_LlJ63nDCFKqFWNwaa64jxIHFDeMYL8nQCTjmvVbFqPEQMZ8bnpfc0wMBOAX5wj9iOKZoBgD127WBWEDK0lKx-cbamJmvolGjuEn1SfUMePfU5eXzhLUMOOe5TMX5Y5WKBpX8ciEW97hK",
      width: 2832,
    },
    {
      height: 3024,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/108425840847991149946">Roderick Luna</a>',
      ],
      photo_reference:
        "AZose0k_4sGUns2dcUDphD5tNLqa6AIzv5hR3aYdTIGMyqztVt-iUx_sW4hZ39umMKPXouS-1kKIMr2cje-oBJzkm5R6k8B8o_o8SQ3t7p2_yqmKqp6p58CMpm2Ip7RqvQ7kN6N0rKFrlIenZkcO4vH4Yq68S-b5jgq9JsvONOPWHtMfuVrI",
      width: 4032,
    },
    {
      height: 3072,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/111804887088196649766">Samuel dlC</a>',
      ],
      photo_reference:
        "AZose0kJWVhILEZsbKUoxbKSLO9g_zNP_iXsBGCk_FrA7ljloTXVuyKxj0VKYDzrdR3wV7CdX5vWiRrzjY5InIxUDYb6dTXtSDpsPPyrVa0b4egpaMXwqP7fbkiCIAeB0s2AHBpweFnzIagwLTBraxRRyEa7K2yiXoe3nfH9jRsVBbEpiDfl",
      width: 4080,
    },
    {
      height: 3023,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/100684071392404156842">A Tay</a>',
      ],
      photo_reference:
        "AZose0n0bS4HAYzyLDkuhE0KwIpxmQEq0s8XkLtb1Kct_K3YcwXt-LiCexg1z-hm7JkkdS7qmDw_j_zfUZ0Rh7XVO_er7MbiMWAUle1-dXfjr6yNTag9yp6irKFHMy3AQRKJ8cDLeLx4kbQi1sxh8Ce0mDRr6xuGaC47vk-TJ-p5kyonkeoD",
      width: 4031,
    },
  ],
  place_id: "ChIJqbE_KchV2YARTO4Oa7cLQQU",
  plus_code: {
    compound_code: "PRXW+F5 San Diego, CA, USA",
    global_code: "8544PRXW+F5",
  },
  price_level: 2,
  rating: 4.3,
  reference: "ChIJqbE_KchV2YARTO4Oa7cLQQU",
  reservable: true,
  reviews: [
    {
      author_name: "A Tay",
      author_url:
        "https://www.google.com/maps/contrib/100684071392404156842/reviews",
      language: "en",
      original_language: "en",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/AD_cMMRrW-VxH6WxWvRMPtWcrow91QpQ11jj3LGrSK4CRn_uzHM=s128-c0x00000000-cc-rp-mo-ba4",
      rating: 4,
      relative_time_description: "10 months ago",
      text: "Nice open patio for outdoor dining is always a huge plus for me.  Great variety of ramen and curry’s.  I tried the Akuma ramen.  The spice lvl was mild but I enjoyed the broth a lot.  The noodles were a tad more on the firm side but nothing crazy. The service and wait staff were ion top of everything with prompt service and cleaning.  The tip is already billed onto your order before you pay, finding that alittle odd but no biggie",
      time: 1660693364,
      translated: false,
    },
    {
      author_name: "Gastón Akerman",
      author_url:
        "https://www.google.com/maps/contrib/112091652627049286034/reviews",
      language: "en",
      original_language: "en",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/AD_cMMQ_dMOdVouYKwojWUoM3EVq5tQtWnVg3TyaO7tyauPcVy4=s128-c0x00000000-cc-rp-mo-ba3",
      rating: 3,
      relative_time_description: "2 months ago",
      text: "First time visiting and the food and service were great. Generous portions. I had the Nishiki ramen, and since I saw \"creamy broth\" I asked if it contained milk or any lactose products. The server went to ask and said all dishes are dairy free. That's not exactly true because I suffered the consequences after. It's a pity because I liked it but I won't be coming back.",
      time: 1680291525,
      translated: false,
    },
    {
      author_name: "Juan R Gonzalez",
      author_url:
        "https://www.google.com/maps/contrib/108418278267130842299/reviews",
      language: "en",
      original_language: "en",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/AAcHTtdx3HiYbsNhqFy0piJd_E1AXzWcxLfeKpPRBzQRkEzD=s128-c0x00000000-cc-rp-mo-ba3",
      rating: 1,
      relative_time_description: "4 months ago",
      text: "Placed an order to go and was told to wait outside. Understood..went outside under the heaters and was then asked to not be in the area because it was for customers that could possibly want to sit there. I had already paid for my food. SINCE others were also waiting there.  Manager Jessie turned off the heaters. This in the middle of COLD WINDS. VERY BAD SERVICE and inhumane to turn off exterior heaters leaving customers in the FREEZING COLD. LAST TIME I WILL COME HERE!",
      time: 1677296360,
      translated: false,
    },
    {
      author_name: "Allison",
      author_url:
        "https://www.google.com/maps/contrib/104818683814623787379/reviews",
      language: "en",
      original_language: "en",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/AD_cMMTb2Xg3Ul6A-cKf2Em4oafS1DkR5JUlOZMb6upIuKliWUDs=s128-c0x00000000-cc-rp-mo-ba3",
      rating: 5,
      relative_time_description: "in the last week",
      text: "If you are vegan/vegetarian and want some GOOD ramen, this is the place! It’s by far the best vegan/vegetarian ramen broth I’ve ever had. It’s crazy how flavorful it is, we loved both the spicy vegan delight and vegetarian ramen bowls.",
      time: 1687450760,
      translated: false,
    },
    {
      author_name: "Josh Borrego",
      author_url:
        "https://www.google.com/maps/contrib/112568002255315810670/reviews",
      language: "en",
      original_language: "en",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/AAcHTtddJ41MLf-YBjlKOKOXV-3RsHTCRk8jj-PXzMRodvc6=s128-c0x00000000-cc-rp-mo",
      rating: 4,
      relative_time_description: "2 months ago",
      text: "Not a bad spot. Service was nice. Pretty pricey for what it is though. Would like it if they had additional sauces/chili powder laid out for the ramen and soy sauce for gyoza and other sides. The pork in the ramen wasn’t very generous either.",
      time: 1681605855,
      translated: false,
    },
  ],
  serves_beer: true,
  serves_dinner: true,
  serves_lunch: true,
  serves_vegetarian_food: true,
  serves_wine: true,
  takeout: true,
  types: ["restaurant", "food", "point_of_interest", "establishment"],
  url: "https://maps.google.com/?cid=378596726078893644",
  user_ratings_total: 578,
  utc_offset: -420,
  vicinity: "1040 University Avenue ste b-111, San Diego",
  website: "https://nishikiramen.com/",
  wheelchair_accessible_entrance: true,
};

export const mockRestaurant = {
  id: 1,
  name: "JoJo's Fantastic Pancakes",
  slug: "jojos-fantastic-pancakes",
  genres: ["American", "Breakfast", "Brunch"],
  google,
};
