<template>
  <div id="app">
    <toolbar :activeNote="activeNote" @addNote="addNote" @toggleFavorite="toggleFavorite" @deleteNote="deleteNote"></toolbar>
    <notes-list :notes="notes" :activeNote="activeNote" @updateActiveNote="updateActiveNote"></notes-list>
    <editor :activeNote="activeNote" @edit="edit"></editor>
  </div>
</template>

<script>
    import Toolbar from './Toolbar.vue'
    import NotesList from './NotesList.vue'
    import Editor from './Editor.vue'

    export default {
        create() {
        },
        data() {
            return {
                notes: [],
                activeNote: {},
                count: 0
            }
        },
        components: {
            Toolbar,
            NotesList,
            Editor
        },
        methods: {
            addNote() {
                const newNote = {
                    text: 'New note ' + this.count++,
                    favorite: false,
                    index: this.notes.length
                }
                this.notes.push(newNote);
                this.activeNote = newNote
            },
            toggleFavorite() {
              var index = this.activeNote.index;
              this.notes[index].favorite = !this.notes[index].favorite;
            },
            deleteNote() {
                this.notes.splice(this.activeNote.index, 1);
                for(var i = 0, len = this.notes.length; i < len; i++) {
                    this.notes[i].index = i;
                }

                if(this.notes.length) {
                    this.activeNote = this.notes[0];
                } else {
                    this.activeNote = {};
                }

            },
            updateActiveNote(note) {
                this.activeNote = note;
            },
            edit(activeNote, e) {
              this.activeNote.text = e.target.value;
            }
        }
    }
</script>