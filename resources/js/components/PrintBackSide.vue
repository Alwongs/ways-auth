<template>
    <div class="back-side-list-of-paper print-back">
        <header class="print-header"></header>
        <div class="document-back-side">
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
        </div>
    </div>

</template>

<script>

export default {
    name: 'PrintBackSide',
    data() {
        return {
            linesCount: 17
        }
    }
}
</script>

<style lang="scss" scoped>

$border-color: black;
$border-thin: 1px;
$border-middle: 1.5px;
$border-bold: 2.5px;

@mixin border($top, $right, $bottom, $left) {
    border-color: $border-color;
    border-style: solid;
    border-width: $top $right $bottom $left; 
}
.back-side-list-of-paper {
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);  
    width: fit-content;
    margin: 0 auto;
}
.align-button {
    margin: 0 auto;
}

// back side of document
.document-back-side {
    position: relative;
    background-color: rgb(255, 255, 255); 
    color: black;
    width: 550px;
    height: 734px;
    padding: 0 12px; 
    img {
        width: 100%;
        height: auto;
    }   
}
.back-side-top-devider {
    height: 48px; 
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
