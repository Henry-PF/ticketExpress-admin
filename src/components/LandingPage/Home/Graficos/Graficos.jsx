import React from 'react'
import SideBar from './SideBar';

export default function Graficos() {
 

    
    return (
        <div>
            <div>
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
                                        <h1 className=''>Dashboard</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">General Form</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /.content */}
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
                {/* ./wrapper */}
                {/* jQuery */}
                {/* Bootstrap 4 */}
                {/* bs-custom-file-input */}
                {/* AdminLTE App */}
                {/* AdminLTE for demo purposes */}
                {/* Page specific script */}
            </div>
        </div>
    )
}
