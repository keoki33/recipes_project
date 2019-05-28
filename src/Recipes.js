import React, { Component } from "react";

import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";
import RecipeCardPlaceholder from "./RecipeCardPlaceholder";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Recipes extends Component {
  state = {
    recipe: [],
    test: [
      // {
      //   idMeal: 998,
      //   strMeal: "Brie wrapped in prosciutto & brioche",
      //   strCategory: "Side",
      //   strArea: "French",
      //   strInstructions:
      //     "Mix the flour, 1 tsp salt, caster sugar, yeast, milk and eggs together in a mixer using the dough attachment for 5 mins until the dough is smooth. Add the butter and mix for a further 4 mins on medium speed. Scrape the dough bowl and mix again for 1 min. Place the dough in a container, cover with cling film and leave in the fridge for at least 6 hrs before using.\r\nWrap the Brie in the prosciutto and set aside. Turn out the dough onto a lightly floured surface. Roll into a 25cm circle. Place the wrapped Brie in the middle of the circle and fold the edges in neatly. Put the parcel onto a baking tray lined with baking parchment and brush with beaten egg. Chill in the fridge for 30 mins, then brush again with beaten egg and chill for a further 30 mins. Leave to rise for 1 hr at room temperature. Heat oven to 200C/180C fan/gas 6, then bake for 22 mins. Serve warm.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
      //   strTags: "SideDish,Treat,Baking",
      //   strYoutube: "https://www.youtube.com/watch?v=FzNPPD8lbWg",
      //   strSource:
      //     "https://www.bbcgoodfood.com/recipes/1803634/brie-wrapped-in-prosciutto-and-brioche",
      //   time: 10,
      //   IngredientsArr: [
      //     "Plain Flour",
      //     "Caster Sugar",
      //     "Yeast",
      //     "Milk",
      //     "Eggs",
      //     "Eggs",
      //     "Butter",
      //     "Brie",
      //     "Prosciutto",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "375g",
      //     "50g",
      //     "7g",
      //     "75g",
      //     "3 Large",
      //     "To Glaze",
      //     "180g",
      //     "250g",
      //     "8 slices",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52913,
      //   strMeal: "Brie wrapped in prosciutto & brioche",
      //   strCategory: "Side",
      //   strArea: "French",
      //   strInstructions:
      //     "Mix the flour, 1 tsp salt, caster sugar, yeast, milk and eggs together in a mixer using the dough attachment for 5 mins until the dough is smooth. Add the butter and mix for a further 4 mins on medium speed. Scrape the dough bowl and mix again for 1 min. Place the dough in a container, cover with cling film and leave in the fridge for at least 6 hrs before using.\r\nWrap the Brie in the prosciutto and set aside. Turn out the dough onto a lightly floured surface. Roll into a 25cm circle. Place the wrapped Brie in the middle of the circle and fold the edges in neatly. Put the parcel onto a baking tray lined with baking parchment and brush with beaten egg. Chill in the fridge for 30 mins, then brush again with beaten egg and chill for a further 30 mins. Leave to rise for 1 hr at room temperature. Heat oven to 200C/180C fan/gas 6, then bake for 22 mins. Serve warm.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
      //   strTags: "SideDish,Treat,Baking",
      //   strYoutube: "https://www.youtube.com/watch?v=FzNPPD8lbWg",
      //   strSource:
      //     "https://www.bbcgoodfood.com/recipes/1803634/brie-wrapped-in-prosciutto-and-brioche",
      //   time: 10,
      //   IngredientsArr: [
      //     "Plain Flour",
      //     "Caster Sugar",
      //     "Yeast",
      //     "Milk",
      //     "Eggs",
      //     "Eggs",
      //     "Butter",
      //     "Brie",
      //     "Prosciutto",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "375g",
      //     "50g",
      //     "7g",
      //     "75g",
      //     "3 Large",
      //     "To Glaze",
      //     "180g",
      //     "250g",
      //     "8 slices",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52816,
      //   strMeal: "Roasted Eggplant With Tahini, Pine Nuts, and Lentils",
      //   strCategory: "Vegetarian",
      //   strArea: "American",
      //   strInstructions:
      //     "\r\nFor the Lentils: Adjust oven rack to center position and preheat oven to 450°F to prepare for roasting eggplant. Meanwhile, heat 2 tablespoons olive oil in a medium saucepan over medium heat until shimmering. Add carrots, celery, and onion and cook, stirring, until softened but not browned, about 4 minutes. Add garlic and cook, stirring, until fragrant, about 30 seconds. Add lentils, bay leaves, stock or water, and a pinch of salt. Bring to a simmer, cover with the lid partially ajar, and cook until lentils are tender, about 30 minutes. (Top up with water if lentils are at any point not fully submerged.) Remove lid, stir in vinegar, and reduce until lentils are moist but not soupy. Season to taste with salt and pepper, cover, and keep warm until ready to serve.\r\n\r\n2.\r\nFor the Eggplant: While lentils cook, cut each eggplant in half. Score flesh with the tip of a paring knife in a cross-hatch pattern at 1-inch intervals. Transfer to a foil-lined rimmed baking sheet, cut side up, and brush each eggplant half with 1 tablespoon oil, letting each brushstroke be fully absorbed before brushing with more. Season with salt and pepper. Place a rosemary sprig on top of each one. Transfer to oven and roast until completely tender and well charred, 25 to 35 minutes. Remove from oven and discard rosemary.\r\n\r\n3.\r\nTo Serve: Heat 2 tablespoons olive oil and pine nuts in a medium skillet set over medium heat. Cook, tossing nuts frequently, until golden brown and aromatic, about 4 minutes. Transfer to a bowl to halt cooking. Stir half of parsley and rosemary into lentils and transfer to a serving platter. Arrange eggplant halves on top. Spread a few tablespoons of tahini sauce over each eggplant half and sprinkle with pine nuts. Sprinkle with remaining parsley and rosemary, drizzle with additional olive oil, and serve.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg",
      //   strTags: "Vegetarian,Pulse,Nutty",
      //   strYoutube: "https://www.youtube.com/watch?v=HkywCtna9t0",
      //   strSource:
      //     "http://www.seriouseats.com/recipes/2016/03/roasted-eggplant-tahini-pine-nut-lentil-vegan-experience-recipe.html",
      //   time: 50,
      //   IngredientsArr: [
      //     "Olive Oil",
      //     "Carrots",
      //     "Celery",
      //     "Onion",
      //     "Garlic",
      //     "Brown Lentils",
      //     "Bay Leaves",
      //     "Water",
      //     "Salt",
      //     "Apple Cider Vinegar",
      //     "Pepper",
      //     "Egg Plants",
      //     "Rosemary",
      //     "Pine nuts",
      //     "Parsley",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "2 tablespoons",
      //     "2 small cut into chunks",
      //     "2 small stalks",
      //     "1 medium finely diced",
      //     "6 medium cloves sliced",
      //     "12 ounces (340g)",
      //     "2",
      //     "4 cups",
      //     "Pinch",
      //     "2 teaspoons (10ml)",
      //     "Pinch",
      //     "2 large",
      //     "4 sprigs",
      //     "1/4 cup ",
      //     "2 tablespoons",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52817,
      //   strMeal: "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
      //   strCategory: "Vegetarian",
      //   strArea: "American",
      //   strInstructions:
      //     "Heat the oil in a 12-inch skillet over high heat until shimmering. Add the eggplants and lower the heat to medium. Season with salt and pepper as you rotate the eggplants, browning them on all sides. Continue to cook, turning regularly, until a fork inserted into the eggplant meets no resistance (you may have to stand them up on their fat end to finish cooking the thickest parts), about 20 minutes, lowering the heat and sprinkling water into the pan as necessary if the eggplants threaten to burn or smoke excessively.\r\n\r\n2.\r\nMix the harissa, chickpeas and tomatoes together, then add to the eggplants. Cook until the tomatoes have blistered and broken down, about 5 minutes more. Season with salt and pepper and add water as necessary to thin to a saucy consistency. Meanwhile, combine the yogurt and cumin in a serving bowl. Season with salt and pepper.\r\n\r\n3.\r\nTop the eggplant mixture with the parsley, drizzle with more extra virgin olive oil, and serve with the yogurt on the side.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg",
      //   strTags: "Vegetarian",
      //   strYoutube: "https://www.youtube.com/watch?v=uYB-1xJp4lg",
      //   strSource:
      //     "http://www.seriouseats.com/2014/09/one-pot-wonders-stovetop-eggplant-harissa-chickpeas-cumin.html",
      //   time: 25,
      //   IngredientsArr: [
      //     "Olive Oil",
      //     "Egg Plants",
      //     "Harissa",
      //     "Chickpeas",
      //     "Cherry Tomatoes",
      //     "Greek yogurt",
      //     "Ground cumin",
      //     "Parsley",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "4 tablespoons",
      //     "6 small",
      //     "½ tablespoon",
      //     "1 can",
      //     "2 cups halved",
      //     "1 1/2 cups",
      //     "1 tablespoon",
      //     "½ cup ",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52840,
      //   strMeal: "Clam chowder",
      //   strCategory: "Starter",
      //   strArea: "American",
      //   strInstructions:
      //     "Rinse the clams in several changes of cold water and drain well. Tip the clams into a large pan with 500ml of water. Cover, bring to the boil and simmer for 2 mins until the clams have just opened. Tip the contents of the pan into a colander over a bowl to catch the clam stock. When cool enough to handle, remove the clams from their shells – reserving a handful of empty shells for presentation if you want. Strain the clam stock into a jug, leaving any grit in the bottom of the bowl. You should have around 800ml stock.\r\nHeat the butter in the same pan and sizzle the bacon for 3-4 mins until it starts to brown. Stir in the onion, thyme and bay and cook everything gently for 10 mins until the onion is soft and golden. Scatter over the flour and stir in to make a sandy paste, cook for 2 mins more, then gradually stir in the clam stock then the milk and the cream.\r\nThrow in the potatoes, bring everything to a simmer and leave to bubble away gently for 10 mins or until the potatoes are cooked. Use a fork to crush a few of the potato chunks against the side of the pan to help thicken – you still want lots of defined chunks though. Stir through the clam meat and the few clam shells, if you've gone down that route, and simmer for a minute to reheat. Season with plenty of black pepper and a little salt, if needed, then stir through the parsley just before ladling into bowls or hollowed-out crusty rolls.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg",
      //   strTags: null,
      //   strYoutube: "https://www.youtube.com/watch?v=fEN_fm6kX6k",
      //   strSource: "https://www.bbcgoodfood.com/recipes/clam-chowder",
      //   time: 50,
      //   IngredientsArr: [
      //     "Clams",
      //     "Butter",
      //     "Bacon",
      //     "Onion",
      //     "Thyme",
      //     "Bay Leaf",
      //     "Plain Flour",
      //     "Milk",
      //     "Double Cream",
      //     "Potatoes",
      //     "Parsley",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "1½ kg",
      //     "50g",
      //     "150g",
      //     "1 finely chopped ",
      //     "sprigs of fresh",
      //     "1",
      //     "1 tbls",
      //     "150ml",
      //     "150ml",
      //     "2 medium",
      //     "Chopped",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 998,
      //   strMeal: "Brie wrapped in prosciutto & brioche",
      //   strCategory: "Side",
      //   strArea: "French",
      //   strInstructions:
      //     "Mix the flour, 1 tsp salt, caster sugar, yeast, milk and eggs together in a mixer using the dough attachment for 5 mins until the dough is smooth. Add the butter and mix for a further 4 mins on medium speed. Scrape the dough bowl and mix again for 1 min. Place the dough in a container, cover with cling film and leave in the fridge for at least 6 hrs before using.\r\nWrap the Brie in the prosciutto and set aside. Turn out the dough onto a lightly floured surface. Roll into a 25cm circle. Place the wrapped Brie in the middle of the circle and fold the edges in neatly. Put the parcel onto a baking tray lined with baking parchment and brush with beaten egg. Chill in the fridge for 30 mins, then brush again with beaten egg and chill for a further 30 mins. Leave to rise for 1 hr at room temperature. Heat oven to 200C/180C fan/gas 6, then bake for 22 mins. Serve warm.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
      //   strTags: "SideDish,Treat,Baking",
      //   strYoutube: "https://www.youtube.com/watch?v=FzNPPD8lbWg",
      //   strSource:
      //     "https://www.bbcgoodfood.com/recipes/1803634/brie-wrapped-in-prosciutto-and-brioche",
      //   time: 10,
      //   IngredientsArr: [
      //     "Plain Flour",
      //     "Caster Sugar",
      //     "Yeast",
      //     "Milk",
      //     "Eggs",
      //     "Eggs",
      //     "Butter",
      //     "Brie",
      //     "Prosciutto",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "375g",
      //     "50g",
      //     "7g",
      //     "75g",
      //     "3 Large",
      //     "To Glaze",
      //     "180g",
      //     "250g",
      //     "8 slices",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52913,
      //   strMeal: "Brie wrapped in prosciutto & brioche",
      //   strCategory: "Side",
      //   strArea: "French",
      //   strInstructions:
      //     "Mix the flour, 1 tsp salt, caster sugar, yeast, milk and eggs together in a mixer using the dough attachment for 5 mins until the dough is smooth. Add the butter and mix for a further 4 mins on medium speed. Scrape the dough bowl and mix again for 1 min. Place the dough in a container, cover with cling film and leave in the fridge for at least 6 hrs before using.\r\nWrap the Brie in the prosciutto and set aside. Turn out the dough onto a lightly floured surface. Roll into a 25cm circle. Place the wrapped Brie in the middle of the circle and fold the edges in neatly. Put the parcel onto a baking tray lined with baking parchment and brush with beaten egg. Chill in the fridge for 30 mins, then brush again with beaten egg and chill for a further 30 mins. Leave to rise for 1 hr at room temperature. Heat oven to 200C/180C fan/gas 6, then bake for 22 mins. Serve warm.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
      //   strTags: "SideDish,Treat,Baking",
      //   strYoutube: "https://www.youtube.com/watch?v=FzNPPD8lbWg",
      //   strSource:
      //     "https://www.bbcgoodfood.com/recipes/1803634/brie-wrapped-in-prosciutto-and-brioche",
      //   time: 10,
      //   IngredientsArr: [
      //     "Plain Flour",
      //     "Caster Sugar",
      //     "Yeast",
      //     "Milk",
      //     "Eggs",
      //     "Eggs",
      //     "Butter",
      //     "Brie",
      //     "Prosciutto",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "375g",
      //     "50g",
      //     "7g",
      //     "75g",
      //     "3 Large",
      //     "To Glaze",
      //     "180g",
      //     "250g",
      //     "8 slices",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52816,
      //   strMeal: "Roasted Eggplant With Tahini, Pine Nuts, and Lentils",
      //   strCategory: "Vegetarian",
      //   strArea: "American",
      //   strInstructions:
      //     "\r\nFor the Lentils: Adjust oven rack to center position and preheat oven to 450°F to prepare for roasting eggplant. Meanwhile, heat 2 tablespoons olive oil in a medium saucepan over medium heat until shimmering. Add carrots, celery, and onion and cook, stirring, until softened but not browned, about 4 minutes. Add garlic and cook, stirring, until fragrant, about 30 seconds. Add lentils, bay leaves, stock or water, and a pinch of salt. Bring to a simmer, cover with the lid partially ajar, and cook until lentils are tender, about 30 minutes. (Top up with water if lentils are at any point not fully submerged.) Remove lid, stir in vinegar, and reduce until lentils are moist but not soupy. Season to taste with salt and pepper, cover, and keep warm until ready to serve.\r\n\r\n2.\r\nFor the Eggplant: While lentils cook, cut each eggplant in half. Score flesh with the tip of a paring knife in a cross-hatch pattern at 1-inch intervals. Transfer to a foil-lined rimmed baking sheet, cut side up, and brush each eggplant half with 1 tablespoon oil, letting each brushstroke be fully absorbed before brushing with more. Season with salt and pepper. Place a rosemary sprig on top of each one. Transfer to oven and roast until completely tender and well charred, 25 to 35 minutes. Remove from oven and discard rosemary.\r\n\r\n3.\r\nTo Serve: Heat 2 tablespoons olive oil and pine nuts in a medium skillet set over medium heat. Cook, tossing nuts frequently, until golden brown and aromatic, about 4 minutes. Transfer to a bowl to halt cooking. Stir half of parsley and rosemary into lentils and transfer to a serving platter. Arrange eggplant halves on top. Spread a few tablespoons of tahini sauce over each eggplant half and sprinkle with pine nuts. Sprinkle with remaining parsley and rosemary, drizzle with additional olive oil, and serve.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg",
      //   strTags: "Vegetarian,Pulse,Nutty",
      //   strYoutube: "https://www.youtube.com/watch?v=HkywCtna9t0",
      //   strSource:
      //     "http://www.seriouseats.com/recipes/2016/03/roasted-eggplant-tahini-pine-nut-lentil-vegan-experience-recipe.html",
      //   time: 50,
      //   IngredientsArr: [
      //     "Olive Oil",
      //     "Carrots",
      //     "Celery",
      //     "Onion",
      //     "Garlic",
      //     "Brown Lentils",
      //     "Bay Leaves",
      //     "Water",
      //     "Salt",
      //     "Apple Cider Vinegar",
      //     "Pepper",
      //     "Egg Plants",
      //     "Rosemary",
      //     "Pine nuts",
      //     "Parsley",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "2 tablespoons",
      //     "2 small cut into chunks",
      //     "2 small stalks",
      //     "1 medium finely diced",
      //     "6 medium cloves sliced",
      //     "12 ounces (340g)",
      //     "2",
      //     "4 cups",
      //     "Pinch",
      //     "2 teaspoons (10ml)",
      //     "Pinch",
      //     "2 large",
      //     "4 sprigs",
      //     "1/4 cup ",
      //     "2 tablespoons",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52817,
      //   strMeal: "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
      //   strCategory: "Vegetarian",
      //   strArea: "American",
      //   strInstructions:
      //     "Heat the oil in a 12-inch skillet over high heat until shimmering. Add the eggplants and lower the heat to medium. Season with salt and pepper as you rotate the eggplants, browning them on all sides. Continue to cook, turning regularly, until a fork inserted into the eggplant meets no resistance (you may have to stand them up on their fat end to finish cooking the thickest parts), about 20 minutes, lowering the heat and sprinkling water into the pan as necessary if the eggplants threaten to burn or smoke excessively.\r\n\r\n2.\r\nMix the harissa, chickpeas and tomatoes together, then add to the eggplants. Cook until the tomatoes have blistered and broken down, about 5 minutes more. Season with salt and pepper and add water as necessary to thin to a saucy consistency. Meanwhile, combine the yogurt and cumin in a serving bowl. Season with salt and pepper.\r\n\r\n3.\r\nTop the eggplant mixture with the parsley, drizzle with more extra virgin olive oil, and serve with the yogurt on the side.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg",
      //   strTags: "Vegetarian",
      //   strYoutube: "https://www.youtube.com/watch?v=uYB-1xJp4lg",
      //   strSource:
      //     "http://www.seriouseats.com/2014/09/one-pot-wonders-stovetop-eggplant-harissa-chickpeas-cumin.html",
      //   time: 25,
      //   IngredientsArr: [
      //     "Olive Oil",
      //     "Egg Plants",
      //     "Harissa",
      //     "Chickpeas",
      //     "Cherry Tomatoes",
      //     "Greek yogurt",
      //     "Ground cumin",
      //     "Parsley",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "4 tablespoons",
      //     "6 small",
      //     "½ tablespoon",
      //     "1 can",
      //     "2 cups halved",
      //     "1 1/2 cups",
      //     "1 tablespoon",
      //     "½ cup ",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52840,
      //   strMeal: "Clam chowder",
      //   strCategory: "Starter",
      //   strArea: "American",
      //   strInstructions:
      //     "Rinse the clams in several changes of cold water and drain well. Tip the clams into a large pan with 500ml of water. Cover, bring to the boil and simmer for 2 mins until the clams have just opened. Tip the contents of the pan into a colander over a bowl to catch the clam stock. When cool enough to handle, remove the clams from their shells – reserving a handful of empty shells for presentation if you want. Strain the clam stock into a jug, leaving any grit in the bottom of the bowl. You should have around 800ml stock.\r\nHeat the butter in the same pan and sizzle the bacon for 3-4 mins until it starts to brown. Stir in the onion, thyme and bay and cook everything gently for 10 mins until the onion is soft and golden. Scatter over the flour and stir in to make a sandy paste, cook for 2 mins more, then gradually stir in the clam stock then the milk and the cream.\r\nThrow in the potatoes, bring everything to a simmer and leave to bubble away gently for 10 mins or until the potatoes are cooked. Use a fork to crush a few of the potato chunks against the side of the pan to help thicken – you still want lots of defined chunks though. Stir through the clam meat and the few clam shells, if you've gone down that route, and simmer for a minute to reheat. Season with plenty of black pepper and a little salt, if needed, then stir through the parsley just before ladling into bowls or hollowed-out crusty rolls.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg",
      //   strTags: null,
      //   strYoutube: "https://www.youtube.com/watch?v=fEN_fm6kX6k",
      //   strSource: "https://www.bbcgoodfood.com/recipes/clam-chowder",
      //   time: 50,
      //   IngredientsArr: [
      //     "Clams",
      //     "Butter",
      //     "Bacon",
      //     "Onion",
      //     "Thyme",
      //     "Bay Leaf",
      //     "Plain Flour",
      //     "Milk",
      //     "Double Cream",
      //     "Potatoes",
      //     "Parsley",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "1½ kg",
      //     "50g",
      //     "150g",
      //     "1 finely chopped ",
      //     "sprigs of fresh",
      //     "1",
      //     "1 tbls",
      //     "150ml",
      //     "150ml",
      //     "2 medium",
      //     "Chopped",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52816,
      //   strMeal: "Roasted Eggplant With Tahini, Pine Nuts, and Lentils",
      //   strCategory: "Vegetarian",
      //   strArea: "American",
      //   strInstructions:
      //     "\r\nFor the Lentils: Adjust oven rack to center position and preheat oven to 450°F to prepare for roasting eggplant. Meanwhile, heat 2 tablespoons olive oil in a medium saucepan over medium heat until shimmering. Add carrots, celery, and onion and cook, stirring, until softened but not browned, about 4 minutes. Add garlic and cook, stirring, until fragrant, about 30 seconds. Add lentils, bay leaves, stock or water, and a pinch of salt. Bring to a simmer, cover with the lid partially ajar, and cook until lentils are tender, about 30 minutes. (Top up with water if lentils are at any point not fully submerged.) Remove lid, stir in vinegar, and reduce until lentils are moist but not soupy. Season to taste with salt and pepper, cover, and keep warm until ready to serve.\r\n\r\n2.\r\nFor the Eggplant: While lentils cook, cut each eggplant in half. Score flesh with the tip of a paring knife in a cross-hatch pattern at 1-inch intervals. Transfer to a foil-lined rimmed baking sheet, cut side up, and brush each eggplant half with 1 tablespoon oil, letting each brushstroke be fully absorbed before brushing with more. Season with salt and pepper. Place a rosemary sprig on top of each one. Transfer to oven and roast until completely tender and well charred, 25 to 35 minutes. Remove from oven and discard rosemary.\r\n\r\n3.\r\nTo Serve: Heat 2 tablespoons olive oil and pine nuts in a medium skillet set over medium heat. Cook, tossing nuts frequently, until golden brown and aromatic, about 4 minutes. Transfer to a bowl to halt cooking. Stir half of parsley and rosemary into lentils and transfer to a serving platter. Arrange eggplant halves on top. Spread a few tablespoons of tahini sauce over each eggplant half and sprinkle with pine nuts. Sprinkle with remaining parsley and rosemary, drizzle with additional olive oil, and serve.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg",
      //   strTags: "Vegetarian,Pulse,Nutty",
      //   strYoutube: "https://www.youtube.com/watch?v=HkywCtna9t0",
      //   strSource:
      //     "http://www.seriouseats.com/recipes/2016/03/roasted-eggplant-tahini-pine-nut-lentil-vegan-experience-recipe.html",
      //   time: 50,
      //   IngredientsArr: [
      //     "Olive Oil",
      //     "Carrots",
      //     "Celery",
      //     "Onion",
      //     "Garlic",
      //     "Brown Lentils",
      //     "Bay Leaves",
      //     "Water",
      //     "Salt",
      //     "Apple Cider Vinegar",
      //     "Pepper",
      //     "Egg Plants",
      //     "Rosemary",
      //     "Pine nuts",
      //     "Parsley",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "2 tablespoons",
      //     "2 small cut into chunks",
      //     "2 small stalks",
      //     "1 medium finely diced",
      //     "6 medium cloves sliced",
      //     "12 ounces (340g)",
      //     "2",
      //     "4 cups",
      //     "Pinch",
      //     "2 teaspoons (10ml)",
      //     "Pinch",
      //     "2 large",
      //     "4 sprigs",
      //     "1/4 cup ",
      //     "2 tablespoons",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // },
      // {
      //   idMeal: 52817,
      //   strMeal: "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
      //   strCategory: "Vegetarian",
      //   strArea: "American",
      //   strInstructions:
      //     "Heat the oil in a 12-inch skillet over high heat until shimmering. Add the eggplants and lower the heat to medium. Season with salt and pepper as you rotate the eggplants, browning them on all sides. Continue to cook, turning regularly, until a fork inserted into the eggplant meets no resistance (you may have to stand them up on their fat end to finish cooking the thickest parts), about 20 minutes, lowering the heat and sprinkling water into the pan as necessary if the eggplants threaten to burn or smoke excessively.\r\n\r\n2.\r\nMix the harissa, chickpeas and tomatoes together, then add to the eggplants. Cook until the tomatoes have blistered and broken down, about 5 minutes more. Season with salt and pepper and add water as necessary to thin to a saucy consistency. Meanwhile, combine the yogurt and cumin in a serving bowl. Season with salt and pepper.\r\n\r\n3.\r\nTop the eggplant mixture with the parsley, drizzle with more extra virgin olive oil, and serve with the yogurt on the side.",
      //   strMealThumb:
      //     "https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg",
      //   strTags: "Vegetarian",
      //   strYoutube: "https://www.youtube.com/watch?v=uYB-1xJp4lg",
      //   strSource:
      //     "http://www.seriouseats.com/2014/09/one-pot-wonders-stovetop-eggplant-harissa-chickpeas-cumin.html",
      //   time: 25,
      //   IngredientsArr: [
      //     "Olive Oil",
      //     "Egg Plants",
      //     "Harissa",
      //     "Chickpeas",
      //     "Cherry Tomatoes",
      //     "Greek yogurt",
      //     "Ground cumin",
      //     "Parsley",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ],
      //   MeasurementsArr: [
      //     "4 tablespoons",
      //     "6 small",
      //     "½ tablespoon",
      //     "1 can",
      //     "2 cups halved",
      //     "1 1/2 cups",
      //     "1 tablespoon",
      //     "½ cup ",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     "",
      //     ""
      //   ]
      // }
    ]
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:3000/api/recipes")
      .then(resp => resp.json())
      .then(x => this.setState({ recipe: x.recipes, loading: false }));
  }

  displayRecipes = () => {
    return this.state.loading ? (
      <RecipeCardPlaceholder />
    ) : (
      this.state.recipe.map(x => (
        <RecipeCard
          handleClick={() => this.props.history.push(`/recipe/${x.idMeal}`)}
          key={x.idMeal}
          recipe={x}
        />
      ))
    );
  };

  updateSearch = (search, time) => {
    console.log(search);
    console.log(time);
  };

  whatever = () => {};

  render() {
    return (
      <div className="Recipes">
        {/* {console.log(this.state.recipe)} */}
        <Navbar
          login={this.props.login}
          logout={this.props.logout}
          updateSearch={this.updateSearch}
          user={this.props.user}
          nav={this.props.nav}
        />
        <div className="RecipesWrapper">{this.displayRecipes()}</div>
      </div>
    );
  }
}

export default Recipes;
