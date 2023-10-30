import React from 'react'
import SideBar from '../../Home/Graficos/SideBar'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from "./Create.module.css"

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
            <h1 className='text-center m-5'>Crear Colectivo</h1>
            <Form className={styles.container}>
                <div className={styles.input_container}>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Modelo" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Modelo"
                                name='model'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                                
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Marca" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Marca"
                                name='brand'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/ />
                        </FloatingLabel>
                    </div>

                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Tipo de Servicio" className="w-100 me-2">
                            <Form.Select className={styles.form_input} aria-label="Default select example">
                                <option value="1">Servicio 1</option>
                                <option value="2">Servicio 2</option>
                                <option value="3">Servicio 3</option>
                            /</Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Empresa" className="w-100 me-2">
                            <Form.Select className={styles.form_input} >
                                <option value="1">Empresa 1</option>
                                <option value="2">Empresa 2</option>
                                <option value="3">Empresa 3</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>

                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Capacidad" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="number"
                                placeholder="Capacidad"
                                name='capacity'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Ruta" className="w-100 me-2">
                            <Form.Select className={styles.form_input} aria-label="Default select example">
                                <option value="1">Ruta 1</option>
                                <option value="2">Ruta 2</option>
                                <option value="3">Ruta 3</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>

                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Numero de Patente" className="w-100 me-6">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Numero de Patente"
                                name='patent'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                            />
                        </FloatingLabel>
                    </div>

                    <Button className='w-100 my-4' variant="primary" type="submit">
                        Crear Colectivo
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
