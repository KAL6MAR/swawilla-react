import React from 'react';
import { CreditCard, Refund, Shipped, Support } from '../img'
function Section2(props) {
    return (
        <div className="section 2-sec">
            <div className="row">
                <div className="col-md-3 desc">
                    <img src={Shipped} alt="" />
                    <h3>Бесплатная Доставка</h3>
                    <p>ПРИ ЗАКАЗЕ ОТ 1000 ГРН</p>
                </div>
                <div className="col-md-3 desc">
                    <img src={Support} alt="" />
                    <h3>Поддержка покупателя</h3>
                    <p>24 ЧАСА В ДЕНЬ</p>
                </div>
                <div className="col-md-3 desc">

                    <img src={CreditCard} alt="" />
                    <h3>Защищенные Покупки</h3>
                    <p>100% ЗАЩИЩОННАЯ ОПЛАТА</p>
                </div>
                <div className="col-md-3 desc">
                    <img src={Refund} alt="" />
                    <h3>30 Дневный Возврат</h3>
                    <p>ЛЕГКИЙ ВОЗВРАТ В ТЕЧЕНИИ 30 ДНЕЙ</p>
                </div>
            </div>
        </div>
    );
}

export default Section2;