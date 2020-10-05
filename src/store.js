import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [
            {
                title: "Pasta Carbonara",
                ingredients: ["spaghetti - 400g", "eggs - 2", "ham - 300g", "parmesan - 100g", "salt", "pepper"],
                stepsToCook: ["Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat, and bring to a boil. Fill a large bowl with hot water for serving, and set aside.",
                "In a mixing bowl, whisk together the eggs, yolks and pecorino and Parmesan. Season with a pinch of salt and generous black pepper.",
                "Set the water to boil. Meanwhile, heat oil in a large skillet over medium heat, add the pork, and sauté until the fat just renders, on the edge of crispness but not hard. Remove from heat and set aside.",
                "Add pasta to the water and boil until a bit firmer than al dente. Just before pasta is ready, reheat guanciale in skillet, if needed. Reserve 1 cup of pasta water, then drain pasta and add to the skillet over low heat. Stir for a minute or so.",
                "Empty serving bowl of hot water. Dry it and add hot pasta mixture. Stir in cheese mixture, adding some reserved pasta water if needed for creaminess. Serve immediately, dressing it with a bit of additional grated pecorino and pepper."],
                time: "30 minutes",
                description: "This dish is a deli egg-bacon-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower. Because America may have contributed to its creation, carbonara is Exhibit A in the back-and-forth between Italy and the United States when it comes to food. Remember: the main goal is creaminess."
            },
            {
                title: "Cheesecake",
                ingredients: ["graham cracker crumbs - 180g", "sugar - 50g", "unsalted butter - 75g", "package cream cheese, softened - 225g", "evaporated milk - 165ml"],
                stepsToCook: ["Heat oven to 325 degrees.",
                "In the bowl of a food processor, combine graham crackers, brown sugar, salt and cinnamon (if using) and process until you’ve got fine crumbs. Transfer the crumbs to a medium bowl and add melted butter. Using your hands, mix well until no dry spots remain (crumb mixture should not be sandy or dry, but hold small clumps when pressed together).",
                "Press crust evenly into the bottom and at least 1 1/2-inches up the sides of a 9-inch springform pan. Use the bottom of a measuring cup to make sure the bottom is as even as possible. Bake on the middle rack until crust is set and just starting to brown around the edges, 20 to 25 minutes.",
                "Remove pan from the oven and set aside while you prepare the filling. Reduce heat to 300 degrees.",
                "Prepare the filling: Combine cream cheese, sour cream, sugar, vanilla and salt in the bowl of a stand mixer. Using a paddle attachment, beat on high until mixture is completely smooth, scraping down the sides and bottom of the bowl as necessary, about 4 minutes.",
                "Reduce speed to medium and 1 at a time, add eggs and yolk, scraping down the sides and bottom of the bowl after each egg is added. With the mixer on low, add flour and beat just to blend, until no lumps remain.",
                "Pour filling into prepared crust (if filling goes above the crust, that is O.K.). Bake until the edges of the cheesecake are completely set and the 2-inch inner circle of the cheesecake wobbles just slightly, 60 to 70 minutes.",
                "Turn heat off and let cheesecake remain in the oven for another 10 minutes. Remove cheesecake from oven and let sit on a wire rack to cool completely at room temperature. When cool, transfer to refrigerator until totally set, at least 6 hours, preferably overnight."],
                time: "hour and half",
                description: "This recipe is adapted from a popular dessert served at Galatoire's, a famed New Orleans restaurant founded on Bourbon Street, in 1905. A simple graham cracker crust is filled with cinnamon-spiced sweet potato cheesecake then topped with a lightly-sweetened layer of sour cream. It is to die for."
            },
        ],
        recipeData: {
            title: '',
            ingredients: [],
            stepsToCook: [],
            time: '',
            description: ''
        }
    },
    mutations: {
        fullRecipeInfo(state, payload) {
            state.recipeData.title = payload.title
            state.recipeData.ingredients = payload.ingredients
            state.recipeData.stepsToCook = payload.stepsToCook
            state.recipeData.time = payload.time
            state.recipeData.description = payload.description
        },
        checkRecipes(state) {
            if(localStorage.recipes)
                state.recipes = JSON.parse(localStorage.recipes)
        },
        checkRecipe(state) {
            if(localStorage.recipe)
                state.recipeData = JSON.parse(localStorage.recipe)
        },

    }
})