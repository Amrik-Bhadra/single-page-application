<template>
    <div class="card" style="width: 18rem; height: 25rem;">
        <img :src="imageUrl" class="card-img-top" :alt="name">
        <div class="card-body">
            <h3 class="fs-4 text-dark">{{ name }}</h3>
            <p class="card-text fs-8">{{ bio }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props:['id', 'imageUrl','name', 'bio'],
    }
</script>