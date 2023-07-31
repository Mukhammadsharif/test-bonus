import React from 'react'
import FireIcon from '../assets/images/fire.svg'
import ChevronRight from '../assets/images/chevron.svg'
import convertDate from "../helpers/convertDate";
export default function Card({ information }) {
    return (
        <div className={'card-container'}>
            <div className={'card-main'}>
                <p className={'card-title'}>{information?.currentQuantity} бонусов</p>

                <div className={'card-footer'}>
                    <p className={'card-subtitle'}>{convertDate(information?.dateBurning)} сгорит</p>

                    <img src={FireIcon} alt={'fire'} className={'card-footer-image'}/>

                    <p className={'card-subtitle'}>{information?.forBurningQuantity} бонусов</p>
                </div>
            </div>

            <img src={ChevronRight} alt={'chevron-right'}/>
        </div>
    )
}
