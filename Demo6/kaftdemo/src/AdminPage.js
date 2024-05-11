import React, { Component } from 'react'
import '../src/Css/admin.css'
import Body from '../src/components/AdminPage/Body'
export default class AdminPage extends Component {
    render() {
        return (
            <div>
                {/* SADECE İÇERİK ALANI DEĞİŞEÇEK O YUZDEN BODY BURADA */}
                <Body /> 
            </div>
        )
    }
}
