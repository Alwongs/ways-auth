<template>
    <div>
        <div class="list-of-paper print">
            <div class="list-of-paper__left">

            </div>
            <div class="list-of-paper__right">
                <div class="document-back-side">
                    <!-- <div class="bg-document"> -->
                        <div class="back-side-top-devider"></div>
                        <div class="back-side-top-label">Оборотная сторона</div>

                        <div class="table">
                            <div class="table-number">
                                <div class="table-number__header">Номер по порядку</div>
                                <div v-for="n in linesCount" :key="n"  class="table-number__value">{{n}}.</div>
                            </div>

                            <div class="table-place">
                                <div class="table-place__header">Место</div>
                                <div class="table-place__columns">
                                    <div class="table-place__departure">
                                        <div class="table-place__departure-header">отправления</div>
                                        <div v-for="n in linesCount" :key="n" class="table-place__departure-value"></div>
                                    </div>
                                    <div class="table-place__arrive">
                                        <div class="table-place__arrive-header">назначения</div>  
                                        <div v-for="n in linesCount" :key="n" class="table-place__arrive-value"></div>                                                                          
                                    </div>
                                </div>
                            </div>

                            <div class="table-time">
                                <div class="table-time__header">Время</div>
                                <div class="table-time__columns">
                                    <div class="table-time__departure">
                                        <div class="table-time__departure-header">выезда</div>
                                        <div class="table-time__departure-columns">
                                            <div class="table-time__departure-hours">
                                                <div class="table-time__departure-hours-header">ч</div>
                                                <div v-for="n in linesCount" :key="n" class="table-time__departure-hours-value"></div>

                                            </div>
                                            <div class="table-time__departure-minutes">
                                                <div class="table-time__departure-minutes-header">мин</div>
                                                <div v-for="n in linesCount" :key="n" class="table-time__departure-minutes-value"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-time__arrive">
                                        <div class="table-time__arrive-header">возвращения</div>   
                                        <div class="table-time__arrive-columns">
                                            <div class="table-time__arrive-hours">
                                                <div class="table-time__arrive-hours-header">ч</div>
                                                <div v-for="n in linesCount" :key="n" class="table-time__arrive-hours-value"></div>

                                            </div>
                                            <div class="table-time__arrive-minutes">
                                                <div class="table-time__arrive-minutes-header">мин</div>
                                                <div v-for="n in linesCount" :key="n" class="table-time__arrive-minutes-value"></div>
                                            </div>                                           
                                        </div>                                                                             
                                    </div>
                                </div>
                            </div>

                            <div class="table-distance">
                                <div class="table-distance__header">Пройдено,<br> км</div>
                                <div v-for="n in linesCount" :key="n" class="table-distance__value"></div>
                            </div>

                            <div class="table-signature">
                                <div class="table-signature__header">
                                    Подпись<br>
                                    лица, пользо-<br>
                                    вавшегося<br>
                                    автомо-<br>
                                    билем
                                </div>
                                <div v-for="n in linesCount" :key="n" class="table-signature__value"></div>
                            </div>

                        </div>       
                    <!-- </div> -->
                </div>
            </div>
        </div>
        <button class="app-btn align-button" @click="printDocument">Печать</button> 
    </div>
</template>

<script>

export default {
    name: 'PrintDocument',
    data() {
        return {
            linesCount: 18
        }
    },
    methods: {
        printDocument() {
            let body = document.querySelector('body');
            const bodyContent = body.innerHTML;

            let el = document.querySelector('.print');

            body.innerHTML = el.innerHTML;
            window.print();
            body.innerHTML = bodyContent;            
        }
    }
}
</script>

<style lang="scss" scoped>

$border-color: black;
$border-thin: 1px;
$border-middle: 2px;
$border-bold: 2.5px;

@mixin border($top, $right, $bottom, $left) {
    border-color: $border-color;
    border-style: solid;
    border-width: $top $right $bottom $left; 
}

.align-button {
    margin: 0 auto;
}
.list-of-paper {
    display: flex;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);  
    background-color: #fff;
    width: 1270px;
    height: 890px;
    margin: 32px auto;  
    &__left {
        width: 635px;
        height: 100%;
        border-right: 1px dotted blue;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__right {
        width: 635px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;        
    }
}


.document {
    border: 1px solid red;
    background-color: rgba(255, 255, 255, 1);     
    color: black;
    width: 550px;
    height: 734px;
    margin-bottom: 0;
    padding: 0 12px;
}
// top-block
.stamp-block {
    display: flex;
    align-items: flex-end;
    height: 41px;
    p {
        text-align: center;
        font-size: 10px;
        width: 177px;
        height: 30px;
    }
}
.title-block {
    display: flex;
    align-items: flex-end;  
    height: 41px;
    font-size: 13px;
    h1 {
        font-size: inherit;
        text-align: start;
        margin: 0;
        margin-right: 16px;
    }
    &__series {
        width: 85px;
        border-bottom: $border-thin solid $border-color;
        margin-right: 6px;
    }
    &__number {
        width: 75px;
        border-bottom: $border-thin solid $border-color;
        text-align: center;
        margin-left: 4px;
    }
}
.date-block {   
    display: flex;   
    align-items: flex-end;    
    height: 16px; 
    padding-left: 21px;
    font-size: 12px;
    font-weight: 700;    
    &__day {
        border-bottom: $border-thin solid $border-color;
    }
    &__month {
        width: 145px;
        text-align: center;
        border-bottom: $border-thin solid $border-color;  
        margin-left: 12px;      
    }
    &__year {      
        width: 42px;
        text-align: end;
        padding-right: 6px;
        border-bottom: $border-thin solid $border-color;        
    }
    &__series-label {
        font-weight: 500;  
        width: 150px;
        text-align: center;
        align-self: flex-start;  
        font-size: 7px;      
    }
}
.company-block { 
    display: flex;   
    align-items: flex-end;    
    height: 32px; 
    font-size: 9px;  
    &__label {
        margin-right: 25px;
        align-self: center;
    }
    &__info {
        text-align: center;
        border-bottom: $border-thin solid $border-color;
    }       
}
.company-labels-block {   
    display: flex;   
    align-items: flex-start;  
    justify-content: center; 
    padding-right: 100px;
    height: 12px; 
    font-size: 8px;       
}
.model-block {       
    display: flex;   
    height: 26px;   
    &__label {
        align-self: center; 
        font-size: 9px; 
        margin-right: 16px; 
        margin-bottom: -8px;
    }   
    &__type {
        font-size: 14px;
        font-weight: 700;         
        width: 140px;
        text-align: end;
        padding-right: 12px;
        align-self: flex-end;   
        border-bottom: $border-thin solid $border-color;             
    }
    &__model {
        font-size: 14px;
        font-weight: 700;         
        min-width: 160px;        
        text-align: start;
        align-self: flex-end; 
        border-bottom: $border-thin solid $border-color;                
    }
}
.car-number-block {       
    display: flex; 
    align-items: flex-end;  
    height: 16px; 
    &__label {
        font-size: 9px;
        margin-right: 14px;
        align-self: center;
    }
    &__number {
        font-size: 13px; 
        font-weight: 700;       
        width: 155px;
        text-align: center;
        border-bottom: $border-thin solid $border-color;         
    }
}
.driver-block {     
    display: flex; 
    align-items: flex-end;  
    height: 15px;    
    &__label {
        font-size: 9px;
        margin-right: 6px;
        align-self: center;
    } 
    &__name {
        line-height: 15px;
        font-size: 14px; 
        font-weight: 700;       
        width: 270px;
        text-align: start;
        padding-left: 4px;
        margin-right: 24px;
        border-bottom: $border-thin solid $border-color;   
        white-space: nowrap;    
    }   
    &__label-2 {
        font-size: 9px;
        margin-right: 4px;
        align-self: center;
    }
    &__person-number {
        border: $border-bold solid $border-color;
        height: 18px;
        flex-grow: 1;
        font-size: 12px;   
        align-self: center;        
        text-align: center;    
    }
}
.driver-labels-block {  
    display: flex;   
    align-items: flex-start;  
    justify-content: center; 
    padding-right: 140px;
    height: 12px; 
    font-size: 8px;     
}
.license-block {   
    display: flex;   
    align-items: flex-end;  
    height: 13px;  
    &__label {
        font-size: 9px;  
        line-height: 9px;
        margin-right: 24px; 
        align-self: center;    
    }
    &__number {
        width: 220px;
        border-bottom: $border-thin solid $border-color;
        font-size: 12px; 
        line-height: 12px;
        font-weight: 700;
        margin-right: 16px;
        padding-left: 8px;
    }
    &__label-2 {
        font-size: 9px; 
        line-height: 9px;
        align-self: center;
        margin-right: 14px;          
    }
    &__class {
        border-bottom: $border-thin solid $border-color;
        flex-grow: 1;
    }
}
// bottom-left block
.big-bottom-block {
    display: flex;
    height: 530px;
    &__left {       
        width: 270px;
        height: 100%;
        padding-right: 5px;
    }
    &__right {
        height: 100%;
        padding-left: 5px;
        flex-grow: 1;
    }
}
.license-card-block { 
    display: flex;
    align-items: center;
    height: 21px;
    &__label {
        font-size: 9px;
        margin-right: 14px;
    }
    &__right {
        flex-grow: 1;
        text-align: center;
    }
    &__value {
        border-bottom: $border-thin solid $border-color; 
        font-size: 9px;       
    }
    &__value-label {
        font-size: 8px;
    }
}
.task-header-block {
    height: 39px;  
    text-align: center;  
    vertical-align: bottom;
    font-size: 12px;
    font-weight: 700;
    padding-top: 18px;
}
.customer-block {
    display: flex;
    align-items: center;
    height: 36px;
    &__label {
        font-size: 9px;
        margin-right: 8px;
    }
    &__right {
        flex-grow: 1;
        text-align: center;
    }
    &__value {
        border-bottom: $border-thin solid $border-color;
        font-size: 14px;  
        font-weight: 700;     
    }
    &__value-label {
        font-size: 8px;
    }    
}
.organization-block {
    height: 35px;  
    padding-top: 5px; 
    text-align: center; 
    width: 170px;
    &__value {
        border-bottom: $border-thin solid $border-color;
        font-size: 9px;      
    }
    &__value-label {
        font-size: 8px;
    }     
}
.customer-address-block {
    height: 51px;
    &__label-block {
        display: flex;
        height: 21px;
    }
    &__label {      
        font-size: 9px;
        margin-right: 16px;
        padding-top: 8px;
    }
    &__value {
        border-bottom: $border-thin solid $border-color;
        font-size: 8px;
        flex-grow: 1; 
    }
    &__value-2 {
        border-bottom: $border-thin solid $border-color;
        text-align: center;
        height: 14px;
        font-size: 13px;
        font-weight: 700;
        line-height: 13px;
        flex-grow: 1;         
    }
    &__value-3 {
        border-bottom: $border-thin solid $border-color;
        height: 14px;
        font-size: 13px;
        font-weight: 700;
        line-height: 13px;
        flex-grow: 1;         
    }
}
.departure-time-block {
    display: flex;
    align-items: center;
    height: 32px;
    padding-left: 29px;
    &__label {
        font-size: 9px;
        margin-right: 24px;
    }
    &__value {
        flex-grow: 1;
        height: 32px;
        border: $border-bold solid $border-color;      
    }    
}
.dispetcher-block { 
    display: flex;
    align-items: flex-end;
    height: 35px;
    &__label {
        font-size: 9px;
        margin-right: 10px;
        align-self: center;
    }
    &__signature-block {
        margin-right: 16px;
    }
    &__signature-value {
        width: 54px;
        border-bottom: $border-thin solid $border-color;       
    }
    &__signature-label{
        font-size: 8px;
        text-align: center;
    }
    &__name-block {
        flex-grow: 1;
    }    
    &__name-value {
        font-size: 12px;
        font-weight: 700;
        text-align: center;
        border-bottom: $border-thin solid $border-color;;         
    }        
    &__name-label {
        font-size: 8px;
        text-align: center;
    }
}
.arrive-time-block {
    display: flex;
    align-items: center;
    height: 36px;
    padding-left: 15px;
    &__label {
        font-size: 9px;
        margin-right: 15px;
    }
    &__value {
        flex-grow: 1;
        height: 32px;
        border: $border-bold solid $border-color;      
    }    
}
.divider-block {    
    border-bottom: $border-thin solid $border-color;
    height: 20px;    
}
.comments-block { 
    &__label {
        border-bottom: $border-thin solid $border-color;              
        font-size: 8px;
        text-align: center;
        height: 28px; 
    }   
    &__value {
        border-bottom: $border-thin solid $border-color;
        height: 14px;   
        font-size: 8px;      
    }
}
.logistic-block {
    &__routes {
        border-bottom: $border-thin solid $border-color;
        height: 14px;   
        font-size: 8px; 
        padding-left: 2px;
    }   
    &__payload {
        border-bottom: $border-thin solid $border-color;
        height: 14px;   
        font-size: 8px; 
        padding-left: 2px;
    } 
}
.finish-drive-block {
    display: flex;
    align-items: flex-end; 
    height: 37px;   
    &__label {              
        font-size: 8px;
        text-align: end;
        width: 70px;
        margin-right: 30px;
    }   
    &__value-1 {
        border-bottom: $border-thin solid $border-color;
        margin-right: 20px; 
        width: 54px;     
    }    
    &__value-2 {
        border-bottom: $border-thin solid $border-color;
        flex-grow: 1;       
    }    
}
.bottom-labels-block {
    display: flex; 
    height: 30px;    
    &__stamp-place {   
        align-self: flex-end;           
        font-size: 9px;
        text-align: end;
        width: 70px;
        margin-right: 30px;
        padding-right: 10px;
    }   
    &__label-1 {
        text-align: center;
        margin-right: 20px; 
        width: 54px;  
        font-size: 8px;   
    }    
    &__label-2 {
        text-align: center;
        flex-grow: 1;   
        font-size: 8px;    
    }        
}
// bottom-right block
.mechanic-check-title {
    height: 25px;
    font-size: 11px;
    text-align: center;
    padding-top: 8px;
}
.odometer-departure-block {
    display: flex;
    align-items: center;
    height: 22px;
    margin-bottom: 3px;
    &__label {
        font-size: 10px;
        width: 150px;
        text-align: center;
    }   
    &__value {
        height: 100%;        
        flex-grow: 1;
        border: $border-bold solid $border-color; 
    }
}
.mechanic-departure-block {
    border: $border-thin solid $border-color; 
    p {
        text-align: center;
        font-size: 9px;
    }  
    h3 {
        text-align: center;        
        font-size: 9px;
        text-transform: uppercase;
    }
    &__date {
        display: flex;
        justify-content: center; 
        height: 15px;
        font-size: 9px; 
        padding-top: 4px;        
        div {
            border-bottom: $border-thin solid $border-color;             
        }  
        p {
            margin: 0 1px;
        }    
    }
    &__day {
        width: 28px;       
    }
    &__month {
        width: 38px; 
        margin-left: 4px;
        margin-right: 2px;     
    }
    &__year {
        width: 20px; 
        margin-left: 2px;               
    }
    &__hours {
        width: 18px; 
        margin-left: 4px;               
    }
    &__minutes {
        width: 18px;  
        margin-left: 2px;              
    }
    &__signature {
        height: 25px;
        text-align: end;
        padding-right: 8px;
        padding-top: 8px;
        font-size: 13px;
        font-weight: 700;
        border-bottom: $border-thin solid $border-color;          
    }
    &__labels { 
        display: flex;
        height: 12px;
        text-align: end;
        font-size: 8px;         
    }
    &__label-1 { 
        text-align: center;
        width: 140px;         
    }
    &__label-2 {
        text-align: center;
        flex-grow: 1;   
    }
}
.driver-check-title {
    p {
        text-align: center;
        font-size: 11px;  
        width: 160px;    
        margin: 0 auto; 
        line-height: 11px;
    }
}
.driver-check-block {   
    display: flex;
    align-items: flex-end;
    height: 28px;
    margin-bottom: 3px;
    &__label {
        font-size: 9px;
        margin-right: 14px;
        align-self: center;
    }
    &__signature-block {
        margin-right: 16px;
    }
    &__signature-value {
        width: 62px;
        border-bottom: $border-thin solid $border-color;       
    }
    &__signature-label{
        font-size: 8px;
        text-align: center;
    }
    &__name-block {
        flex-grow: 1;
    }    
    &__name-value {
        font-size: 12px;
        font-weight: 700;
        text-align: center;
        border-bottom: $border-thin solid $border-color;       
    }        
    &__name-label {
        font-size: 8px;
        text-align: center;
    }    
}
.fuel-type-block {   
    display: flex;
    height: 50px;  
    &__label {
        font-size: 9px;
        width: 95px;
        padding-top: 7px;
    }  
    &__type {
        font-size: 8px;
        width: 75px;       
    }  
    &__type-title {
        text-align: center;
        height: 15px;
        @include border($border-thin, 0, $border-thin, $border-thin);
    }
    &__type-value {
        text-align: center;
        height: 15px;
        @include border(0, 0, $border-thin, $border-thin);
    }
    &__code {
        font-size: 8px;
        flex-grow: 1;         
    }     
    &__code-title {
        text-align: center;
        height: 15px;  
        @include border($border-thin, $border-thin, $border-bold, $border-thin);          
    }   
    &__code-value {
        text-align: center;
        height: 15px;  
        &:not(:last-child) {
            @include border(0, $border-bold, $border-thin, $border-bold); 
        }
        &:last-child {
            @include border(0, $border-bold, $border-bold, $border-bold);                 
        }        
    }          
}
.fuel-check-title {
    font-size: 10px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
}
.fuel-check-section {
    display: flex;
    background-color: rgba(255, 255, 255, 1);    
    //border: 1px solid blue;
    //height: 190px;
    &__left {
        height: 100%;
        width: 170px;
        font-size: 9px;
    }
    &__left-title {
        height: 17px;
        text-align: center;
    }
    &__left-recieved { 
        background-color: rgba(255, 255, 255, 1);         
        position: relative;
        height: 34px;
        font-size: 9px;
        padding-right: 45px;
        div {
            text-align: center;
            height: 13px;
            margin-top: -3px;
        }
    }
    &__left-doc-number {
        position: absolute;
        left: 0;
        bottom: 0;
        display: inline-block;
        height: 13px;
        line-height: 13px;       
        margin-right: 4px;
        padding-left: 8px;
    }    
    &__left-devider {
        display: inline-block;   
        height: 14px;     
        width: 60px;
        margin-left: 51px;
        border-bottom: $border-thin solid $border-color;        
    }    
    &__left-rest-before {
        height: 24px;
        padding-top: 11px;
    }
    &__left-rest-after {             
        height: 21px;
        padding-top: 9px;
        text-align: end;
        padding-right: 16px;
    }
    &__left-spent-norm {
        height: 14px;
    }
    &__left-spent-fact {          
        height: 14px;
        text-align: end;
        padding-right: 16px;        
    }
    &__left-economy {            
        height: 14px;
    }
    &__left-spent-over {
        height: 14px;
    }












    &__right {
        //border: 1px solid blue;
        background-color: rgba(255, 255, 255, 1);         
        height: 100%;
        flex-grow: 1;
    }
    &__right-title {
        @include border($border-thin, $border-thin, 0, $border-thin); 
        height: 17px;
        font-size: 10px;
        text-align: center;
    }
    &__right-recieved {
        @include border($border-bold, $border-bold, 0, $border-bold); 
        height: 34px;
    }
    &__right-rest-before {
        @include border($border-thin, $border-bold, 0, $border-bold); 
        height: 21px;
    }
    &__right-rest-after {
        @include border($border-thin, $border-bold, 0, $border-bold);             
        height: 21px;
    }
    &__right-spent-norm {
        @include border($border-thin, $border-bold, 0, $border-bold); 
        height: 14px;
    }
    &__right-spent-fact {
        @include border($border-thin, $border-bold, 0, $border-bold);            
        height: 14px;
    }
    &__right-economy {
        @include border($border-thin, $border-bold, 0, $border-bold);            
        height: 14px;
    }
    &__right-spent-over {
        @include border($border-thin, $border-bold, $border-bold, $border-bold);
        height: 14px;
    }
}
.odometer-arrive-block {   
    margin-bottom: 16px;
    &__title {
        font-size: 9px;
        width: 190px;
        height: 25px;
    }   
    &__value {
        display: flex;
        font-size: 9px;
    }   
    &__value-devider {
        font-size: 9px;
        width: 150px;
        height: 22px;
    }   
    &__value-place {
        font-size: 9px;
        flex-grow: 1;
        height: 22px;
        border: $border-bold solid $border-color;
    }   
}
.mechanic-arrive-block {   
    display: flex;
    align-items: flex-end;
    height: 28px;
    margin-bottom: 3px;
    &__label {
        font-size: 9px;
        margin-right: 14px;
        align-self: center;
    }
    &__signature-block {
        margin-right: 16px;
    }
    &__signature-value {
        width: 62px;
        border-bottom: $border-thin solid $border-color;       
    }
    &__signature-label{
        font-size: 8px;
        text-align: center;
    }
    &__name-block {
        flex-grow: 1;
    }    
    &__name-value {
        font-size: 12px;
        font-weight: 700;
        text-align: center;
        border-bottom: $border-thin solid $border-color;       
    }        
    &__name-label {
        font-size: 8px;
        text-align: center;
    }     
}


// back side of document
.document-back-side {
    position: relative;
    border: 1px solid red;
    background-color: rgba(255, 255, 255, 0.5);     
    color: black;
    width: 550px;
    height: 734px;
    margin-bottom: 0;
    padding: 0 12px; 
    img {
        width: 100%;
        height: auto;
    }   
}
.back-side-top-devider {
    height: 38px;    
}
.back-side-top-label {
    text-align: end;
    font-size: 12px;
    padding-right: 2px;
}
.table {
    display: flex;
    @include border($border-middle, $border-middle, 0, $border-middle)
}
.table-number {
    flex-basis: 26px;
    height: 100%;
    border-right: $border-middle solid $border-color;
    &__header {
        height: 78px;
        line-height: 11px;
        width: 100%;
        text-align: center;
        writing-mode: vertical-rl;
        transform: scale(-1);
        font-size: 9px;
        border-top: $border-middle solid $border-color;
    }
    &__value {
        border-bottom: $border-middle solid $border-color;
        height: 31px;
        text-align: center;
        line-height: 31px;
        font-size: 10px;
    }
}
.table-place {
        flex-basis: 225px;    
        height: 100%;
        border-right: $border-middle solid $border-color;
    &__header {
        height: 25px;
        font-size: 10px;
        line-height: 25px;
        text-align: center;
        border-bottom: $border-middle solid $border-color;        
    }
    &__columns {
        display: flex;
    }
    &__departure {
        width: 50%;
        border-right: $border-middle solid $border-color;        
    }
    &__departure-header {
        height: 53px;
        line-height: 53px;
        font-size: 10px;        
        text-align: center;
        border-bottom: $border-middle solid $border-color;        
    }
    &__departure-value {
        height: 31px;
        border-bottom: $border-middle solid $border-color;        
    }
    &__arrive {
        width: 50%;     
    }
    &__arrive-header {
        height: 53px;
        line-height: 53px;
        font-size: 10px;        
        text-align: center;
        border-bottom: $border-middle solid $border-color;        
    }
    &__arrive-value {
        height: 31px;
        border-bottom: $border-middle solid $border-color;        
    }
}
.table-time {
    border-right: $border-middle solid $border-color;
    flex-basis: 148px;  
    &__header {
        height: 25px;
        font-size: 10px;
        line-height: 25px;
        text-align: center;
        border-bottom: $border-middle solid $border-color;        
    } 
    &__columns {
        display: flex;
    }   
        &__departure {
            width: 50%;
            border-right: $border-middle solid $border-color;
        } 
            &__departure-header {
                height: 27px;
                font-size: 10px;
                text-align: center;
                line-height: 27px;
                border-bottom: $border-middle solid $border-color;          
            }
            &__departure-columns {
                display: flex;
            }    
                &__departure-hours {
                    width: 50%;
                    border-right: $border-middle solid $border-color;          
                }
                &__departure-hours-header {
                    font-size: 10px;
                    text-align: center;
                    height: 26px;
                    line-height: 26px;
                    border-bottom: $border-middle solid $border-color;          
                }
                &__departure-hours-value {
                    height: 31px;
                    border-bottom: $border-middle solid $border-color; 
                }
                &__departure-minutes {
                    width: 50%;      
                }
                &__departure-minutes-header {
                    font-size: 10px;
                    text-align: center;
                    height: 26px;
                    line-height: 26px;
                    border-bottom: $border-middle solid $border-color;          
                }    
                &__departure-minutes-value {
                    height: 31px;
                    border-bottom: $border-middle solid $border-color; 
                }    
        &__arrive {
            width: 50%;
        }   
            &__arrive-header {
                height: 27px;
                font-size: 10px;
                text-align: center;
                line-height: 27px;
                border-bottom: $border-middle solid $border-color;          
            }
            &__arrive-columns {
                display: flex;
            }    
                &__arrive-hours {
                    width: 50%;
                    border-right: $border-middle solid $border-color;          
                }
                &__arrive-hours-header {
                    font-size: 10px;
                    text-align: center;
                    height: 26px;
                    line-height: 26px;
                    border-bottom: $border-middle solid $border-color;          
                }
                &__arrive-hours-value {
                    height: 31px;
                    border-bottom: $border-middle solid $border-color; 
                }                
                &__arrive-minutes {
                    width: 50%;       
                }
                &__arrive-minutes-header {
                    font-size: 10px;
                    text-align: center;
                    height: 26px;
                    line-height: 26px;
                    border-bottom: $border-middle solid $border-color;          
                }   
                &__arrive-minutes-value {
                    height: 31px;
                    border-bottom: $border-middle solid $border-color; 
                }    
}
.table-distance  {
    width: 56px;
    height: 100%;
    border-right: $border-middle solid $border-color;
    &__header {
        height: 78px;
        font-size: 9px; 
        text-align: center;
        padding-top: 25px;
        border-bottom: $border-middle solid $border-color;             
    }
    &__value {
        border-bottom: $border-middle solid $border-color;
        height: 31px;       
    }
}
.table-signature  {
    flex-grow: 1;
    height: 100%;
    &__header {
        height: 78px;
        font-size: 9px; 
        line-height: 11px;
        text-align: center;
        padding-top: 4px;
        border-bottom: $border-middle solid $border-color;             
    }
    &__value {
        border-bottom: $border-middle solid $border-color;
        height: 31px;       
    }
}
</style>
