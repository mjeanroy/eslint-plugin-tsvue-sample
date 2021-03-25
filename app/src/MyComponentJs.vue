<template>
    <div>Hello {{name}}</div>
</template>

<script>
    export default {
        created() {
            console.log('created');
        },

        data() {
            return {
                name() {
                    return 'John Doe';
                },
            };
        }
    }
</script>
