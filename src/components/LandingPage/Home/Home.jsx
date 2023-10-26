import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar';
import './home.css'


const Home = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="sidebar col-auto px-0 min-vh-100 bg-dark">
                    <Sidebar />
                </div>
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Gráfico de área</font></font></h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                        </button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="chart">
                        <canvas id="areaChart" style={{ height: 250, width: 579 }} height={250} width={579} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home