<template>
    <div>
        组件1
        <br>
        <input type="number" v-model="cnt">
        <button @click="pushData">点我</button>
    </div>
</template>

<script>
    export default {
        name: "First",
        data:function(){
            return {
                cnt:0,
            }
        },
        methods:{
            pushData(){
                this.$store.commit('add',this.cnt)
            }
        }
    }
</script>

<style scoped>

</style>
