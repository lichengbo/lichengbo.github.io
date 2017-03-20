<template>
    <div id="note-editor">
    <textarea class="form-control" @input="edit(activeNote)">{{activeNote.text}}</textarea>
    </div>
</template>

<script>
    export default {
        props: {
            activeNote: Object
        },
        methods: {
            edit(activeNote) {
                this.$emit("edit", activeNote, event);
            }
        }
    }
</script>