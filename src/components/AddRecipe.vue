<template>
    <div class="col-12">
        <div class="card mt-3">
            <div class="card-header bg-primary text-white" @click="hidePanel = !hidePanel">
               <font-awesome-icon icon="plus" class="mr-3"/> Add Recipe
            </div>
            <div class="card-body" :class="{ 'd-none': hidePanel }">
                <form
                    id="recipeForm"
                    @submit.prevent="addRecipe"
                >
                    <div class="form-group form-row">
                        <label class="col-md-2 col-form-label text-md-right" for="dishName">Dish Name</label>
                        <div class="col-md-10">
                            <input
                                    type="text"
                                    class="form-control"
                                    name="dishName"
                                    id="dishName"
                                    placeholder="Dish name"
                                    v-model="formData.title"
                            >
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label class="col-md-2 col-form-label text-md-right" for="ingredients">Ingredients</label>
                        <div class="col-md-8">
                            <input
                                    type="text"
                                    class="form-control"
                                    name="ingredients"
                                    id="ingredients"
                                    placeholder="Ingredient"
                                    v-model="EnteredIngredient"
                            >
                        </div>
                        <button class="col-md-2 btn btn-primary" @click.prevent="addIngredient">Add Ingredient</button>

                    </div>
                    <ul class="ingredients-list col-12">
                        <li
                                v-for="ingredient in this.arrIngr"
                                :key="ingredient"
                        >
                            {{ ingredient }}
                        </li>
                    </ul>
                    <div class="form-group form-row">
                        <label class="col-md-2 col-form-label text-md-right" for="preparation">Preparation Steps</label>
                        <div class="col-md-8">
                            <input
                                    type="text"
                                    class="form-control"
                                    name="preparation"
                                    id="preparation"
                                    placeholder="Preparation step"
                                    v-model="EnteredStep"
                            >
                        </div>
                        <button class="col-md-2 btn btn-primary" @click.prevent="addPrepStep">Add Step</button>

                    </div>
                    <ol class="preparation-list col-12">
                        <li
                                v-for="prepStep in this.prepSteps"
                                :key="prepStep"
                        >
                            {{ prepStep }}
                        </li>
                    </ol>
                    <div class="form-group form-row">
                        <label class="col-md-2 col-form-label text-md-right" for="time">Cook Time</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" name="time" id="time" v-model="formData.time">
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label class="col-md-2 text-md-right" for="description">Description</label>
                        <div class="col-md-10">
                            <textarea
                                    class="form-control"
                                    name="description"
                                    id="description"
                                    placeholder="Recipe description"
                                    cols="50"
                                    rows="4"
                                    v-model="formData.description"
                            ></textarea>
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <div class="offset-md-2 col-md-10">
                            <button type="submit" class="btn btn-primary d-block ml-auto">Add Recipe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    export default {
        name: "Recipe",
        data() {
            return {
                hidePanel: true,
                formData: [],
                arrIngr: [],
                prepSteps: [],
                EnteredStep: '',
                EnteredIngredient: ''
            }
        },
        components: {
            FontAwesomeIcon
        },
        methods: {
            addRecipe() {
                const addData = {
                    title: this.formData.title,
                    ingredients: this.arrIngr,
                    stepsToCook: this.prepSteps,
                    time: this.formData.time,
                    description: this.formData.description
                }
                this.$store.state.recipes.push(addData)
                this.formData = []
                this.arrIngr = []
                this.prepSteps = []
                this.hidePanel = true
            },
            addIngredient() {
                if(this.EnteredIngredient === '') {
                    return
                }
                this.arrIngr.push(this.EnteredIngredient)
                this.EnteredIngredient = ''
            },
            addPrepStep() {
                if(this.EnteredStep === '') {
                    return
                }
                this.prepSteps.push(this.EnteredStep)
                this.EnteredStep = ''
            }
        }

    }
</script>

<style scoped>
.ingredients-list {
    display: flex;
    flex-wrap: wrap;
}
.ingredients-list li {
    margin-right: 25px;
}

.preparation-list {
    max-height: 200px;
    overflow-y: scroll;
}
</style>