<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="recipe-content w-100 mt-5">
                    <router-link to="/"><font-awesome-icon icon="arrow-left" class="mr-2"/>Back to recipes</router-link>
                    <div class="d-flex justify-content-between mb-3 mt-4">
                        <h2 class="recipe__title text-primary">
                            {{ recipeData.title }}
                        </h2>
                        <span class="recipe__time"><b>{{ recipeData.time }}</b></span>
                    </div>
                    <div class="recipe__description">
                        {{ recipeData.description }}
                    </div>
                        <ul class="recipe__ingredients pl-0">
                            <h3>Ingredients</h3>
                            <li
                                v-for="ingredient in recipeData.ingredients"
                                :key="ingredient"
                                class="ml-3"
                            >
                                {{ ingredient }}
                            </li>
                        </ul>
                        <ol class="recipe__steps pl-0">
                            <h3 v-if="recipeData.stepsToCook.length !== 0">Preparation</h3>
                            <li
                                v-for="step in recipeData.stepsToCook"
                                :key="step"
                                class="ml-3"
                            >
                                {{ step }}
                            </li>
                        </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    export default {
        name: "Recipe",
        components: {
            FontAwesomeIcon
        },
        mounted() {
            this.$store.commit('checkRecipe')
        },
        watch: {
            recipeData: {
                handler(newRecipe) {
                    localStorage.recipe = JSON.stringify(newRecipe)
                },
                deep: true
            }
        },
        computed: {
            recipeData() {
                return this.$store.state.recipeData
            }
        },
    }
</script>

<style scoped>
.recipe-content {
    padding: 20px;
    border: 3px solid #a1a1a1;
    background-color: #efefef;
    border-radius: 5px;
}
.recipe__description {
    margin-bottom: 40px;
}
</style>