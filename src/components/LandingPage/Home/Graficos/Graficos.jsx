import React from 'react'
import SideBar from './SideBar';
import Styles from "./Graficos.module.css";


export default function Graficos() {

    const dataArray = [{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    },{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    },{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    },{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    },{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    },{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    },{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    },{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    },{
        Name: "Emilia",
        Mail: "Emilia@gmail.com.ar",
        Contraseña: "Contraseña123"
    }]


    return (
        <div className='flex'>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>AdminLTE 3 | General Form Elements</title>
            {/* Google Font: Source Sans Pro */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
            {/* Font Awesome */}
            <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
            {/* Theme style */}
            <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
            <div className="wrapper">
                {/* Main Sidebar Container */}
                <SideBar></SideBar>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /.content */}
                    <div className={Styles.divContenido}>
                        <div className='container-fluid row'>
                            <div className="col-lg-3">
                                {/* small card */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-user-plus" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        <i className="fas" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* small card */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>Compras Totales</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-shopping-cart" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        <i className="fas" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Lista de usuarios Registrados</h3>
                                            </div>
                                            {/* /.card-header */}
                                            <div className="card-body">
                                                <table id="example2" className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Nombre</th>
                                                            <th>Mail</th>
                                                            <th>Contraseña</th>
                                                        </tr>
                                                    </thead>
                                                    {dataArray.map( (dataMokeada) => {
                                                        return <tbody>
                                                            <tr>
                                                                <td>{dataMokeada.Name}</td>
                                                                <td>{dataMokeada.Mail}</td>
                                                                <td>{dataMokeada.Contraseña}</td>
                                                            </tr>
                                                        </tbody>
                                                    })}
                                                </table>
                                            </div>
                                            {/* /.card-body */}
                                        </div>
                                        {/* /.card */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                            {/* /.container-fluid */}
                        </section>

                    </div>
                </div>
                {/* /.content-wrapper */}
                <footer className="main-footer">

                </footer>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>

        </div>
    )
}
