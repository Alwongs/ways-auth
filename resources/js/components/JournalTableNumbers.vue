<template>
    <div class="journal-table-numbers">
        <div class="journal-table-numbers__column-1">1</div>
        <div class="journal-table-numbers__column-2">2</div>
        <div class="journal-table-numbers__column-3">3</div>
        <div class="journal-table-numbers__column-4">4</div>
        <div class="journal-table-numbers__column-5">5</div>
        <div class="journal-table-numbers__column-6">6</div>
        <div class="journal-table-numbers__column-7">7</div>
        <div class="journal-table-numbers__column-8">8</div>
        <div class="journal-table-numbers__column-9">9</div>
    </div>
</template>

<script>

export default {
    name: 'JournalTableNumbers'
}
</script>

<style lang="scss" scoped>

$bg-color: rgb(214, 214, 214);
$content-color: rgb(0, 76, 143);

$border-color: black;
$border-thin: 1px;
$border-middle: 2px;
$border-bold: 2.5px;
@mixin border($top, $right, $bottom, $left) {
    border-color: $border-color;
    border-style: solid;
    border-width: $top $right $bottom $left; 
}


.journal-table-numbers {
    width: 903px;
    @include border($border-middle, $border-middle, $border-middle, $border-middle);
    display: flex;
    text-align: center;
    color: black;        
    &__column-1 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 55px;
    }
    &__column-2 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 104px;  
    }
    &__column-3 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 256px;
    }
    &__column-4 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 74px;
    }
    &__column-5 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 86px; 
    }
    &__column-6 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 90px;
    }
    &__column-7 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 110px;
    }
    &__column-8 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 74px;
    }
    &__column-9 {        
        flex: 0 0 52px;
    }
}
</style>