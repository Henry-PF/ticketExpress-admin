import React from 'react';
import SideBar from '../../Home/Graficos/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Update.module.css";

export default function Update() {

  const dataMokeada = [{
    Modelo: "Model1",
    Marca: "Volvo",
    TypeService: "1",
    Empresa: "1",
    Capacidad: "100",
    Ruta: "34",
    Patente: "ABC 123",
},{
  Modelo: "Model1",
  Marca: "Volvo",
  TypeService: "1",
  Empresa: "1",
  Capacidad: "100",
  Ruta: "34",
  Patente: "ABC 123",
},{
  Modelo: "Model1",
  Marca: "Volvo",
  TypeService: "1",
  Empresa: "1",
  Capacidad: "100",
  Ruta: "34",
  Patente: "ABC 123",
},{
  Modelo: "Model1",
  Marca: "Volvo",
  TypeService: "1",
  Empresa: "1",
  Capacidad: "100",
  Ruta: "34",
  Patente: "ABC 123",
},{
  Modelo: "Model1",
  Marca: "Volvo",
  TypeService: "1",
  Empresa: "1",
  Capacidad: "100",
  Ruta: "34",
  Patente: "ABC 123",
},{
  Modelo: "Model1",
  Marca: "Volvo",
  TypeService: "1",
  Empresa: "1",
  Capacidad: "100",
  Ruta: "34",
  Patente: "ABC 123",
},{
  Modelo: "Model1",
  Marca: "Volvo",
  TypeService: "1",
  Empresa: "1",
  Capacidad: "100",
  Ruta: "34",
  Patente: "ABC 123",
},]

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
                <h1 className=''>Update Buses</h1>
              </div>
            </div>
          </div>
        </section>
        {/* /.content */}
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">MIRAR PARA AGREGAR PAGINADO, FLECHAS DE ORDENAMIENTO Y CENTRAR TODO </h3>
                  </div>
                  <div class="card-body">
                    <table id="example2" class="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th className={styles.th}>Modelo</th>
                          <th className={styles.th}>Marca</th>
                          <th className={styles.th}>Tipo de Servicio</th>
                          <th className={styles.th}>Empresa</th>
                          <th className={styles.th}>Capacidad</th>
                          <th className={styles.th}>Ruta(s)</th>
                          <th className={styles.th}>Patente</th>
                          <th className={styles.th}>Editar</th>
                          <th className={styles.th}>Eliminar</th>
                        </tr>
                      </thead>
                      {dataMokeada.map ( (data) => {
                        return <tbody>
                        <tr>
                          <td className={styles.td}>{data.Modelo}</td>
                          <td className={styles.td}>{data.Marca}</td>
                          <td className={styles.td}>{data.TypeService}</td>
                          <td className={styles.td}>{data.Empresa}</td>
                          <td className={styles.td}>{data.Capacidad}</td>
                          <td className={styles.td}>{data.Ruta}</td>
                          <td className={styles.td}>{data.Patente}</td>
                          <td className={styles.td}><button className={styles.button}><FontAwesomeIcon icon={faPencil} style={{ color: "#a1a1a1cc", }} />
                            </button></td>
                          <td className={styles.td}><button className={styles.button}><FontAwesomeIcon icon={faTrash} style={{ color: "#dd3636", }} />
                            </button></td>
                        </tr>
                      </tbody>
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
