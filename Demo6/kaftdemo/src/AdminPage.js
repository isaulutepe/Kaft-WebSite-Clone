import React, { Component } from 'react'
import '../src/Css/admin.css'
import Navbar from '../src/components/AdminPage/Navbar'
import Body from '../src/components/AdminPage/Body'
export default class AdminPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Body />
            </div>
        )
    }
}
