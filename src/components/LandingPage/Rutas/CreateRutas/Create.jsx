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
          <h1 className='text-center m-5'>Crear Ruta</h1>
          <Form className={styles.container}>
            <div className={styles.input_container}>
              <div className={styles.input_name}>
                <FloatingLabel controlId="floatingInput" label="Ciudad de Origen" className="w-100 me-2">
                  <Form.Control
                    className={styles.form_input}
                    type="text"
                    placeholder="Ciudad de Origen"
                    name='origin'
                  /*POR AHORA SIN VALUE NI ON CHANGE*/
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Ciudad de Destino" className="w-100 ">
                  <Form.Control
                    className={styles.form_input}
                    type="text"
                    placeholder="Ciudad de Destino"
                    name='destination'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/ />
                </FloatingLabel>
              </div>
              <div className={styles.input_name}>
                <FloatingLabel controlId="floatingPassword" label="Horario de Salida" className="w-100 me-2">
                  <Form.Control
                    className={styles.form_input}
                    type="time"
                    placeholder="Horario de Salida"
                    name='exitTime'
                  /*POR AHORA SIN VALUE NI ON CHANGE*/
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Horario de Llegada" className="w-100 me-2">
                  <Form.Control
                    className={styles.form_input}
                    type="time"
                    placeholder="Horario de Llegada"
                    name='arrivalTime'
                  /*POR AHORA SIN VALUE NI ON CHANGE*/
                  />
                </FloatingLabel>
              </div>
              <div className={styles.input_name}>
                <FloatingLabel controlId="floatingInput" label="Empresa" className="w-100 me-2">
                  <Form.Control
                    className={styles.form_input}
                    type="text"
                    placeholder="Empresa"
                    name='company'
                  /*POR AHORA SIN VALUE NI ON CHANGE*/
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Valor del Ticket" className="w-100">
                  <Form.Control
                    className={styles.form_input}
                    type="text"
                    placeholder="Valor del Ticket"
                    name='price'
                  /*POR AHORA SIN VALUE NI ON CHANGE*/
                  />
                </FloatingLabel>
              </div>
              <Button className='w-100 my-4' variant="primary" type="submit">
                Crear Ruta
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
