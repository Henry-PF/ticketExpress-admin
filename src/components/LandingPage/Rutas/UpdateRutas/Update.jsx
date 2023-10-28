import React from 'react'
import SideBar from '../../Home/Graficos/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Update.module.css";

export default function Update() {


  const dataMokeada = [{
    CiudadDeOrigen: "Model1",
    CiudadDeDestino: "Volvo",
    HorarioDeSalida: "1",
    HorarioDeLlegada: "1",
    Empresa: "100",
    ValorDeTicket: "34",
},{
  CiudadDeOrigen: "Model1",
  CiudadDeDestino: "Volvo",
  HorarioDeSalida: "1",
  HorarioDeLlegada: "1",
  Empresa: "100",
  ValorDeTicket: "34",
},{
  CiudadDeOrigen: "Model1",
  CiudadDeDestino: "Volvo",
  HorarioDeSalida: "1",
  HorarioDeLlegada: "1",
  Empresa: "100",
  ValorDeTicket: "34",
},{
  CiudadDeOrigen: "Model1",
  CiudadDeDestino: "Volvo",
  HorarioDeSalida: "1",
  HorarioDeLlegada: "1",
  Empresa: "100",
  ValorDeTicket: "34",
},{
  CiudadDeOrigen: "Model1",
  CiudadDeDestino: "Volvo",
  HorarioDeSalida: "1",
  HorarioDeLlegada: "1",
  Empresa: "100",
  ValorDeTicket: "34",
},{
  CiudadDeOrigen: "Model1",
  CiudadDeDestino: "Volvo",
  HorarioDeSalida: "1",
  HorarioDeLlegada: "1",
  Empresa: "100",
  ValorDeTicket: "34",
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
                <h1 className=''>Update</h1>
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
                      {dataMokeada.map ( (data) => {
                        return <tbody>
                        <tr>
                          <td className={styles.td}>{data.CiudadDeOrigen}</td>
                          <td className={styles.td}>{data.CiudadDeDestino}</td>
                          <td className={styles.td}>{data.HorarioDeSalida}</td>
                          <td className={styles.td}>{data.HorarioDeLlegada}</td>
                          <td className={styles.td}>{data.Empresa}</td>
                          <td className={styles.td}>{data.ValorDeTicket}</td>
                          <td className={styles.td}><button><FontAwesomeIcon icon={faPencil} style={{ color: "#dedb2b", }} />
                            </button></td>
                          <td className={styles.td}><button><FontAwesomeIcon icon={faTrash} style={{ color: "#dd3636", }} />
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
