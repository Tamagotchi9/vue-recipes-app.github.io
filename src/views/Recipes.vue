<template>
    <div class="container">
        <div class="row justify-content-center">
            <add-recipe/>
            <div class="col-lg-8 col-sm-12 recipes-list">
                <ul class="list-group list-group-flush">
                    <li

                            class="list-group-item d-flex align-items-start"
                            v-for="(recipe,index) in recipes"
                            :key ="recipe.title"

                    >
                        <div class="w-100">
                            <div class="d-flex justify-content-between mb-3">
                                <h2
                                    @click="showFullRecipe(recipe)"
                                    class="recipe__title"
                                >
                                    <router-link  :to="'/recipe/' + recipe.title" >{{ recipe.title }}</router-link>
                                </h2>
                                <span class="recipe__title"><b>{{ recipe.time }}</b></span>
                            </div>
                            <div class="recipe__description mb-4"
                                 contenteditable="true"
                                 @blur="editDescription(index, 'description', $event.target.innerText)"
                            >
                                {{ recipe.description }}
                            </div>
                            <div class="d-flex justify-content-between">
                            <div class="full-info" @click="showFullRecipe(recipe)">
                                <router-link
                                        tag="button"
                                        class="btn btn-primary"
                                        :to="'/recipe/' + recipe.title"
                                >
                                   Full recipe
                                </router-link>
                            </div>
                            <button class="btn btn-danger" @click="deleteRecipe(index)">
                                <font-awesome-icon icon="trash"/>
                            </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import AddRecipe from '../components/AddRecipe'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
export default {
    name: 'Recipes',
    components: {
        AddRecipe,
        FontAwesomeIcon
    },
    mounted() {
        this.$store.commit('checkRecipes')
    },
    watch: {
       recipes: {
           handler(newRecipes) {
               localStorage.recipes = JSON.stringify(newRecipes)
           },
           deep: true
       }
    },
    computed: {
      recipes() {
          return this.$store.state.recipes
      },
      recipeData() {
          return this.$store.state.recipeData
      }

    },
    methods: {
        showFullRecipe(recipe) {
            this.$store.commit("fullRecipeInfo", recipe)
        },
        deleteRecipe(recipeIndex) {
            this.recipes.splice(recipeIndex, 1)
        },
        editDescription(index, field, text) {
            this.recipes[index][field] = text
        }
    }
}
</script>

<style scoped>

</style>