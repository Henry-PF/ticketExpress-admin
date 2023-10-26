import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../CreateCompany/CreateCompany.module.css';

export default function CreateCompany(){
    return (
        <div class="wrapper">
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="/" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                <a href="/create_bus" class="nav-link">Home</a>
                </li>
            </ul>
            </nav>


        <div class="content-wrapper">
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
    </div>
    )
}