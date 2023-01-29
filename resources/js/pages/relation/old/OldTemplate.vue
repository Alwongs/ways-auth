<template>
    <div>
        <!-- <div class="list-of-paper">
            <div class="bg-document"> -->
                <div class="document print">
                    <div class="big-top-block">
                        <div class="stamp-block">
                            <p>Место для штампа<br>
                            организации</p>
                        </div>
                        <div class="title-block">
                            <h1>ПУТЕВОЙ ЛИСТ ЛЕГКОВОГО АВТОМОБИЛЯ</h1>
                            <div class="title-block__series"></div>
                            <p><b>N</b></p>
                            <div class="title-block__number"><b>63</b></div>
                        </div>
                        <div class="date-block">
                            <p>"</p>
                            <div class="date-block__day">16-23</div>
                            <p>"</p>
                            <div class="date-block__month">Января</div>
                            <div class="date-block__year">2023</div>
                            <p>г.</p>
                            <div class="date-block__series-label">серия</div>                
                        </div>
                        <div class="company-block">
                            <div class="company-block__label">
                                Организация
                            </div>
                            <div class="company-block__info">
                                <p>ООО "Авиакомпания Волга-Днепр", ИНН7328510118, ОГРН 1077328004841, 432067,<br>
                                г.Ульяновск, ул. Карбышева, 14, тел.(8422)590127</p>
                            </div>
                        </div>
                        <div class="company-labels-block">
                            наименование, адрес, номер телефона
                        </div>
                        <div class="model-block">
                            <div class="model-block__label">Марка автомобиля</div>
                            <div class="model-block__type">Легковой</div>
                            <div class="model-block__model">Тойота RAV-4</div>
                        </div>
                        <div class="car-number-block">
                            <div class="car-number-block__label">Государственный номерной знак</div>
                            <div class="car-number-block__number">К 839 РН 82</div>
                        </div>
                        <div class="driver-block">
                            <div class="driver-block__label">Водитель</div>
                            <div class="driver-block__name">Мартынов Александр Владимирович</div>
                            <div class="driver-block__label-2">Табельный номер</div>
                            <div class="driver-block__person-number">10133</div>
                        </div>
                        <div class="driver-labels-block">
                            фамилия имя отчество
                        </div>
                        <div class="license-block">
                            <div class="license-block__label">Удостоверение №</div>
                            <div class="license-block__number">7318658814</div>
                            <div class="license-block__label-2">Класс</div>
                            <div class="license-block__class"></div>
                        </div>
                    </div>

                    <div class="big-bottom-block">
                        <div class="big-bottom-block__left">
                            <div class="license-card-block">
                                <div class="license-card-block__label">Лицензионная карточка</div>
                                <div class="license-card-block__right">
                                    <div class="license-card-block__value">стандартная, ограниченная</div>
                                    <div class="license-card-block__value-label">ненужное зачеркнуть</div>
                                </div>
                            </div>
                            <div class="task-header-block">
                                Задание водителю
                            </div>
                            <div class="customer-block">
                                <div class="customer-block__label">В распоряжение</div>
                                <div class="customer-block__right">
                                    <div class="customer-block__value">ООО АК "Волга-Днепр"</div>
                                    <div class="customer-block__value-label">наименование</div>
                                </div>
                            </div>
                            <div class="organization-block">
                                <div class="organization-block__value">ООО "Авиакомпания Волга-Днепр"</div>
                                <div class="organization-block__value-label">организация</div>
                            </div>
                            <div class="customer-address-block">
                                <div class="customer-address-block__label-block">
                                    <div class="customer-address-block__label">Адрес подачи</div>
                                    <div class="customer-address-block__value"></div>
                                </div>
                                <div class="customer-address-block__value-2">г. Ульяновск, ул. Карбышева, д. 14</div>
                                <div class="customer-address-block__value-3"></div>                            
                            </div>
                            <div class="departure-time-block">
                                <div class="departure-time-block__label">Время выезда из гаража, ч, мин.</div>
                                <div class="departure-time-block__value"></div>
                            </div>                        
                            <div class="dispetcher-block">
                                <div class="dispetcher-block__label">Диспетчер-нарядчик</div>
                                <div class="dispetcher-block__signature-block">
                                    <div class="dispetcher-block__signature-value"></div>
                                    <div class="dispetcher-block__signature-label">подпись</div>
                                </div>
                                <div class="dispetcher-block__name-block">
                                    <div class="dispetcher-block__name-value">Асташов Д.В.</div>
                                    <div class="dispetcher-block__name-label">расшифровка подписи</div>                                
                                </div>
                            </div>
                            <div class="arrive-time-block">
                                <div class="arrive-time-block__label">Время выозвращения в гараж, ч, мин.</div>
                                <div class="arrive-time-block__value"></div>
                            </div> 
                            <div class="dispetcher-block">
                                <div class="dispetcher-block__label">Диспетчер-нарядчик</div>
                                <div class="dispetcher-block__signature-block">
                                    <div class="dispetcher-block__signature-value"></div>
                                    <div class="dispetcher-block__signature-label">подпись</div>
                                </div>
                                <div class="dispetcher-block__name-block">
                                    <div class="dispetcher-block__name-value">Асташов Д.В.</div>
                                    <div class="dispetcher-block__name-label">расшифровка подписи</div>                                
                                </div>
                            </div>  
                            <div class="divider-block">
                            </div>  
                            <div class="comments-block">
                                <div class="comments-block__label">
                                    Опоздания, ожидания, простои в пути, заезды в гараж и прочее
                                </div>
                                <div class="comments-block__value"></div>
                            </div>
                            <div class="logistic-block">
                                <div class="logistic-block__routes">
                                    Вид сообщений: город, пригород, межгород
                                </div>
                                <div class="logistic-block__payload">
                                    Вид перевозок:
                                </div>
                            </div>
                            <div class="finish-drive-block">
                                <div class="finish-drive-block__label">Автомобиль сдал водитель</div>
                                <div class="finish-drive-block__value-1"></div>
                                <div class="finish-drive-block__value-2"></div>
                            </div>
                            <div class="bottom-labels-block">
                                <div class="bottom-labels-block__stamp-place">М.П.</div>
                                <div class="bottom-labels-block__label-1">подпись</div>
                                <div class="bottom-labels-block__label-2">расшифровка подписи</div>
                            </div>
                        </div>

                        <div class="big-bottom-block__right">
                            <div class="mechanic-check-title">
                                Автомобиль технически исправен
                            </div>
                            <div class="odometer-departure-block">
                                <div class="odometer-departure-block__label">
                                    Показание спидометра, км
                                </div>
                                <div class="odometer-departure-block__value"></div>
                            </div>
                            <div class="mechanic-departure-block">
                                <p>контроль технического состояния пройден</p>
                                <h3>выпуск на линию разрешен</h3>
                                <div class="mechanic-departure-block__date">
                                    <p>&laquo;</p>
                                    <div class="mechanic-departure-block__day"></div>
                                    <p>&raquo;</p>
                                    <div class="mechanic-departure-block__month"></div>  
                                    <p>202</p>     
                                    <div class="mechanic-departure-block__year"></div>   
                                    <p>г.</p>   
                                    <div class="mechanic-departure-block__hours"></div> 
                                    <p>ч.</p>                                                                                    
                                    <div class="mechanic-departure-block__minutes"></div> 
                                    <p>мин</p>                                 

                                </div>
                                <div class="mechanic-departure-block__signature">Братышев А.С.</div>
                                <div class="mechanic-departure-block__labels">
                                    <div class="mechanic-departure-block__label-1">подпись</div>
                                    <div class="mechanic-departure-block__label-2">расшифровка подписи</div>
                                </div>
                            </div>
                            <div class="driver-check-title">
                                <p>Автомобиль в технически исправном состоянии принял</p>
                            </div>
                            <div class="driver-check-block">
                                <div class="driver-check-block__label">Водитель</div>
                                <div class="driver-check-block__signature-block">
                                    <div class="driver-check-block__signature-value"></div>
                                    <div class="driver-check-block__signature-label">подпись</div>
                                </div>
                                <div class="driver-check-block__name-block">
                                    <div class="driver-check-block__name-value"></div>
                                    <div class="driver-check-block__name-label">расшифровка подписи</div>                                
                                </div>
                            </div> 
                            <div class="fuel-type-block">
                                <div class="fuel-type-block__label">
                                    Горючее
                                </div>
                                <div class="fuel-type-block__type">
                                    <div class="fuel-type-block__type-title">марка</div>
                                    <div class="fuel-type-block__type-value">АИ 95</div>
                                    <div class="fuel-type-block__type-value"></div>
                                </div>
                                <div class="fuel-type-block__code">
                                    <div class="fuel-type-block__code-title">код</div>
                                    <div class="fuel-type-block__code-value"></div>
                                    <div class="fuel-type-block__code-value"></div>
                                </div>
                            </div>
                            <div class="fuel-check-title">
                                Движение горючего
                            </div>
                            <div class="fuel-check-section">
                                <div class="fuel-check-section__left">
                                    <div class="fuel-check-section__left-title"></div>
                                    <div class="fuel-check-section__left-recieved">
                                        <div>Выдано:</div>
                                        <div>по заправочному</div>
                                        <p class="fuel-check-section__left-doc-number">листу №</p>
                                        <p class="fuel-check-section__left-devider"></p>
                                    </div>
                                    <div class="fuel-check-section__left-rest-before">Остаток: при везде</div>
                                    <div class="fuel-check-section__left-rest-after">при возвращении</div>
                                    <div class="fuel-check-section__left-spent-norm">Расход: по норме</div>
                                    <div class="fuel-check-section__left-spent-fact">фактически</div>
                                    <div class="fuel-check-section__left-economy">Экономия</div>
                                    <div class="fuel-check-section__left-spent-over">Перерасход</div>
                                </div>
                                <div class="fuel-check-section__right">
                                    <div class="fuel-check-section__right-title">
                                        Количество, л
                                    </div>
                                    <div class="fuel-check-section__right-recieved"></div>
                                    <div class="fuel-check-section__right-rest-before"></div>
                                    <div class="fuel-check-section__right-rest-after"></div>
                                    <div class="fuel-check-section__right-spent-norm"></div>
                                    <div class="fuel-check-section__right-spent-fact"></div>
                                    <div class="fuel-check-section__right-economy"></div>
                                    <div class="fuel-check-section__right-spent-over"></div>
                                </div>
                            </div>
                            <div class="odometer-arrive-block">
                                <div class="odometer-arrive-block__title">
                                    Автомобиль принял. Показание спидометра при возвращении в гараж, км
                                </div>
                                <div class="odometer-arrive-block__value">
                                    <div class="odometer-arrive-block__value-devider"></div>
                                    <div class="odometer-arrive-block__value-place"></div>
                                </div>
                            </div>
                            <div class="mechanic-arrive-block">
                                <div class="mechanic-arrive-block__label">Механик</div>
                                <div class="mechanic-arrive-block__signature-block">
                                    <div class="mechanic-arrive-block__signature-value"></div>
                                    <div class="mechanic-arrive-block__signature-label">подпись</div>
                                </div>
                                <div class="mechanic-arrive-block__name-block">
                                    <div class="mechanic-arrive-block__name-value">Братышев А.С.</div>
                                    <div class="mechanic-arrive-block__name-label">расшифровка подписи</div>                                
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </div>
        </div> -->
        <!-- <button class="app-btn align-button" @click="printDocument">Печать</button>  -->
    </div>
</template>

<script>
export default {
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
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);      
    position: relative;
    background-color: #fff;
    width: 600px;
    height: 850px;
    margin: 32px auto;  
}
.bg-document {
    position: absolute;
    right: 0;
    top: 0;
    width: 575px;
    height: 840px;
    background-image: url('../../../images/document.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.document {
    border: 1px solid red;
    background-color: rgba(255, 255, 255, 1);     
    color: black;
    width: 550px;
    height: 850px;
    margin-left: 20px;
    margin-bottom: 0;
    padding: 0 12px;
}

// top-block
.stamp-block {
    display: flex;
    align-items: flex-end;
    height: 110px;
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
</style>
