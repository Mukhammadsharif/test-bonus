import React, {useEffect, useState} from 'react'
import Logo from '../assets/images/logo.svg'
import InfoButton from '../assets/images/information-button.svg'
import Card from "../components/Card";
import axios from "axios";
export default function Main() {
    const [information, setInformation] = useState({})
    const  generateToken = () => {
        axios({
            method: 'post',
            url: 'http://84.201.188.117:5021/api/v3/clients/accesstoken',
            headers: {
                'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c'
            },
            data: {
                "idClient": "2c44d8c2-c89a-472e-aab3-9a8a29142315",
                "accessToken": "",
                "paramName": "device",
                "paramValue": "7db72635-fd0a-46b9-813b-1627e3aa02ea",
                "latitude": 0,
                "longitude": 0,
                "sourceQuery": 0
            }
        })
            .then(function (response) {
               if(response?.data?.accessToken){
                   getInformation(response?.data?.accessToken);
               }
            })
    }

    useEffect(() => {
        generateToken()
    }, [])

    const getInformation = (token) => {
        axios.get(`http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${token}`,
            {
                headers: {
                    'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c'
                },
            }
            )
            .then(function (response) {
                setInformation(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className={'container'}>
            <div className={'navbar'}>
                <img src={Logo} alt={'logo'} />

                <img src={InfoButton} alt={'info-button'}/>
            </div>

            <div className={'main'}>
                <Card information={information}/>
            </div>
        </div>
    )
}
