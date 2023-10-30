import React from 'react';
import SideBar from '../../Home/Graficos/SideBar';
import styles from "./Create.module.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Create() {
  return (
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
                <h1 className=''>Create</h1>
              </div>
            </div>
          </div>
        </section>
        {/* /.content */}
        <section class="content-header">
            <h1 className='text-center m-5'>Crear Empresa</h1>
            <Form className={styles.container}>
                <div className={styles.input_container}>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Nombre" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Nombre"
                                name='name'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                                
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Direccion" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Direccion"
                                name='address'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/ />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Correo Electronico" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="email"
                                placeholder="Correo Electronico"
                                name='mail'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Telefono" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="number"
                                placeholder="Numero de Telefono"
                                name='phone'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                            />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="CUIT" className="w-100 me-6">
                            <Form.Control
                                className={styles.form_input}
                                type="number"
                                placeholder="CUIT"
                                name='cuit'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                            />
                        </FloatingLabel>
                    </div>
                    <Button className='w-100 my-4' variant="primary" type="submit">
                        Crear Empresa
                    </Button>
                </div>
            </Form>
            <div className={styles.botonBack}>
                <a href="/" class="btn btn-primary" role="button" data-bs-toggle="button">Volver</a>
            </div>
        </section>
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
  )
}
