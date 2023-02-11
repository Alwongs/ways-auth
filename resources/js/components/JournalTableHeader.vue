<template>
    <div class="journal-table-header">
        <div class="journal-table-header__number">№П/Л</div>
        <div class="journal-table-header__date">Дата выдачи<br>путевого листа</div>
        <div class="journal-table-header__driver">
            <div class="journal-table-header__driver-title">Водитель</div>
            <div class="journal-table-header__driver-subtitle-group">
                <div class="journal-table-header__driver-subtitle-item">Фамилия, Имя, Отчество</div>
                <div class="journal-table-header__driver-subtitle-item">Табельный<br>номер</div>
            </div>
        </div>
        <div class="journal-table-header__car-number">Гаражный<br>номер<br>автомобиля</div>
        <div class="journal-table-header__signature">
            <div class="journal-table-header__signature-title">Подпись</div>                    
            <div class="journal-table-header__signature-subtitle-group">
                <div class="journal-table-header__signature-subtitle-item">водителя в<br>получении<br>п.листа</div>
                <div class="journal-table-header__signature-subtitle-item">дисп. и дата<br>приемки п.листа<br>от водителя</div>
                <div class="journal-table-header__signature-subtitle-item">бух. и дата<br>приемки<br>п.листа</div>
            </div>                    
        </div>
        <div class="journal-table-header__comment">Прим.</div>
    </div>
</template>

<script>

export default {
    name: 'JournalTableHeader'
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

.journal-table-header { 
    font-size: 12px;
    margin: 30px 0 0 30px;
    width: 920px;
    @include border($border-middle, $border-middle, 0, $border-middle);
    display: flex;
    height: 72px;
    color: black;
    text-align: center;
    &__number {
        @include border(0, $border-middle, 0, 0);      
        flex: 0 0 55px;
        padding-top: 28px;
    }
    &__date {
        @include border(0, $border-middle, 0, 0);   
        flex: 0 0 121px;    
        padding-top: 20px;           
    }
    &__driver {
        @include border(0, $border-middle, 0, 0);          
        flex: 0 0 330px;
        display: flex;
        flex-direction: column;
    }
    &__driver-title {
        @include border(0, 0, $border-middle, 0);  
        padding: 2px 0;
    }
    &__driver-subtitle-group {
        flex-grow: 1;        
        display: flex;
    }    
    &__driver-subtitle-item {
        @include border(0, $border-middle, 0, 0);        
        &:first-child {
            flex: 0 0 256px;
            padding-top: 16px;
        }
        &:last-child {
            flex: 0 0 74px;
            padding-top: 8px;
        }
    }
    &__car-number {
        @include border(0, $border-middle, 0, 0);   
        flex: 0 0 86px;     
        padding-top: 14px;                     
    }
    &__signature {
        @include border(0, $border-middle, 0, 0);       
        flex: 0 0 274px; 
        display: flex;
        flex-direction: column;        
    }
    &__signature-title {
        @include border(0, 0, $border-middle, 0); 
        padding: 2px 0;        
    }
    &__signature-subtitle-group {
        flex-grow: 1;        
        display: flex;      
    }
    &__signature-subtitle-item {
        padding-top: 2px;
        flex: 0 0 110px;
        @include border(0, $border-middle, 0, 0); 
        &:first-child {
            flex: 0 0 90px;
        }
        &:last-child {
            flex: 0 0 74px;
        }
    }
    &__comment {
        flex: 0 0 52px;  
        padding-top: 30px;          
    }
}
</style>