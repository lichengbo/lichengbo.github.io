<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script>

    export default {
        props: {
            activeNote: Object
        },
        methods: {
            addNote () {
                this.$emit("addNote");
            },
            toggleFavorite() {
                this.$emit("toggleFavorite");
            },
            deleteNote () {
                this.$emit("deleteNote");
            }
        }
    }
</script>
