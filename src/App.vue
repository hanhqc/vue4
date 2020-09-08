<template>
    <div id="app">
        <first></first>
        <hr>
        <second></second>
    </div>
</template>

<script>
    import First from "./components/First";
    import Second from "./components/Second";

    export default {
        name: 'App',
        components:{
            first:First,
            second:Second
        },
    }
</script>

<style>

</style>
