import React from 'react'

export default function SideBar() {
    // --------------------------------Lista de Buses---------------------------------------
    const [Busesistrue, setBusesistrue] = React.useState(false);
    const [BusesOpen, setBusesOpen] = React.useState("nav-item menu-open");
    const [BusesClose, setBusesClose] = React.useState("nav-item");
    const BusesHandle = () => {
        return setBusesistrue(!Busesistrue);
    }
    // -----------------------------------------------------------------------
    // --------------------------------Lista de Empresas---------------------------------------
    const [Empresasistrue, setEmpresasistrue] = React.useState(false);
    const [EmpresasOpen, setEmpresasOpen] = React.useState("nav-item menu-open");
    const [EmpresasClose, setEmpresasClose] = React.useState("nav-item");
    const EmpresasHandle = () => {
        return setEmpresasistrue(!Empresasistrue);
    }
    // -----------------------------------------------------------------------
    // --------------------------------Lista de Terminales---------------------------------------
    const [Terminalesistrue, setTerminalesistrue] = React.useState(false);
    const [TerminalesOpen, setTerminalesOpen] = React.useState("nav-item menu-open");
    const [TerminalesClose, setTerminalesClose] = React.useState("nav-item");
    const TerminalesHandle = () => {
        return setTerminalesistrue(!Terminalesistrue);
    }
    // -----------------------------------------------------------------------

    return (
        <div>
            <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
            {/* Theme style */}
            <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="/admin/home" className="brand-link">
                    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Ticket Express Admin</span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className={Busesistrue === true ? BusesOpen : BusesClose} onClick={() => BusesHandle()}>
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Buses
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/admin/buses/create" className="nav-link ">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Create</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/buses/delete" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Delete</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/buses/read" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Read</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/buses/update" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Update</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className={Empresasistrue === true ? EmpresasOpen : EmpresasClose} onClick={() => EmpresasHandle()}>
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Empresas
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/admin/empresas/create" className="nav-link ">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Create</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/empresas/delete" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Delete</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/empresas/read" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Read</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/empresas/update" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Update</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className={Terminalesistrue === true ? TerminalesOpen : TerminalesClose} onClick={() => TerminalesHandle()}>
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Terminales
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/admin/terminales/create" className="nav-link ">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Create</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/terminales/delete" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Delete</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/terminales/read" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Read</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/admin/terminales/update" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Update</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

        </div>
    )
}
