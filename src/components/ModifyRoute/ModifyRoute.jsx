import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../ModifyRoute/ModifyRoute.module.css";

export default function ModifyBus(){
    return (
      <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="/" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href="/" class="nav-link">Home</a>
            </li>
          </ul>
        </nav>

        <div class="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Rutas</h1>
                </div>
              </div>
            </div>
          </section>

          <section class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">MIRAR PARA AGREGAR PAGINADO, FLECHAS DE ORDENAMIENTO Y CENTRAR TODO</h3>
                    </div>
                    <div class="card-body">
                      <table id="example2" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th className={styles.th}>Ciudad de Origen</th>
                            <th className={styles.th}>Ciudad de Destino</th>
                            <th className={styles.th}>Hora de Salida</th>
                            <th className={styles.th}>Hora de Llegada</th>
                            <th className={styles.th}>Empresa</th>
                            <th className={styles.th}>Valor del Ticket</th>
                            <th className={styles.th}>Editar</th>
                            <th className={styles.th}>Eliminar</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>       
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>    
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>    
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>   
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>   
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>   
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>     
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>   
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>    
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>   
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>   
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>   
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>    
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>     
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>   
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>     
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>     
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>      
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>    
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>    
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>     
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>    
                        </tr>
                        <tr>
                            <td className={styles.td}>Origen 1</td>
                            <td className={styles.td}>Destino 1</td>
                            <td className={styles.td}>00:00</td>
                            <td className={styles.td}>12:00</td>
                            <td className={styles.td}>Empresa 1</td>
                            <td className={styles.td}>$ 10.000</td>
                            <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                            <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>    
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <th className={styles.th}>Ciudad de Origen</th>
                            <th className={styles.th}>Ciudad de Destino</th>
                            <th className={styles.th}>Hora de Salida</th>
                            <th className={styles.th}>Hora de Llegada</th>
                            <th className={styles.th}>Empresa</th>
                            <th className={styles.th}>Valor del Ticket</th>
                            <th className={styles.th}>Editar</th>
                            <th className={styles.th}>Eliminar</th>
                        </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer class="main-footer">
          <div class="float-right d-none d-sm-block">
            <b>Version</b> 3.2.0
          </div>
          <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>
    </div>
  )
}