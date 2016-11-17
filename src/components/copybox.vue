<template lang="html">

<div class="">

    <input id="box" type="text" onclick="this.select()" :model="content">

    <button data-clipboard-target="#box">
        Copy
    </button>
</div>

</template>

<script>

export default {
    name: 'copybox',
    props: ['content']
}

</script>
