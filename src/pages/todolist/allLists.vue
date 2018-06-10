<template>
    <draggable
        v-model="lists"
        @end="dragEnd">
        <task-list 
            v-for="(i, index) in sortedLists"
            :key="index"
            :taskId="i.id"
            :taskObj="i"
            v-on:changeVal="changeVal($event)"/>
    </draggable>
</template>

<script>
import TaskList from '@/pages/todolist/taskList';
import Draggable from 'vuedraggable';

export default {
    components: {
        TaskList,
        Draggable
    },
    data () {
        return {
            lists: [
                {'id': 1, 'name': 'Task One', 'highlight': false, 'checked': false},
                {'id': 2, 'name': 'Task Two', 'highlight': true, 'checked': false},
                {'id': 3, 'name': 'Task Three', 'highlight': false, 'checked': false},
                {'id': 4, 'name': 'Task Four', 'highlight': false, 'checked': true}
            ]
        }
    },
    computed: {
        sortedLists() {
            this.lists = _.orderBy(this.lists, ['highlight'], ['desc']);
            return _.orderBy(this.lists, ['highlight'], ['desc']);
        }
    },
    methods: {
        changeVal(evt) {
            const index = _.findIndex(this.lists, {'id': evt.id});
            _.set(this.lists, [index, evt.type], evt.value);
        },
        dragEnd() {
        }
    }
}
</script>

<style lang="scss" scoped>
    .to-do-list {
        .ghost {
            opacity: 0.4;
        }
    }
</style>