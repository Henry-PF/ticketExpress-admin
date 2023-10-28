import React from 'react';
import SideBar from '../../Home/Graficos/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Update.module.css";

export default function Update() {

  const dataMokeada = [{
    Nombre: "Model1",
    Direccion: "Volvo",
    Correo: "1",
    Telefono: "1",
    Cuit: "100",
    Editar: "34",
    Eliminar: "ABC 123",
},{
  Nombre: "Model1",
  Direccion: "Volvo",
  Correo: "1",
  Telefono: "1",
  Cuit: "100",
  Editar: "34",
  Eliminar: "ABC 123",
},{
  Nombre: "Model1",
  Direccion: "Volvo",
  Correo: "1",
  Telefono: "1",
  Cuit: "100",
  Editar: "34",
  Eliminar: "ABC 123",
},{
  Nombre: "Model1",
  Direccion: "Volvo",
  Correo: "1",
  Telefono: "1",
  Cuit: "100",
  Editar: "34",
  Eliminar: "ABC 123",
},{
  Nombre: "Model1",
  Direccion: "Volvo",
  Correo: "1",
  Telefono: "1",
  Cuit: "100",
  Editar: "34",
  Eliminar: "ABC 123",
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
                          <th className={styles.td}>Nombre</th>
                          <th className={styles.td}>Direccion</th>
                          <th className={styles.td}>Correo Electronico</th>
                          <th className={styles.td}>Telefono</th>
                          <th className={styles.td}>CUIT</th>
                          <th className={styles.td}>Editar</th>
                          <th className={styles.td}>Eliminar</th>
                        </tr>
                      </thead>
                      {dataMokeada.map ( (data) => {
                        return <tbody>
                        <tr>
                          <td className={styles.td}>{data.Nombre}</td>
                          <td className={styles.td}>{data.Direccion}</td>
                          <td className={styles.td}>{data.Correo}</td>
                          <td className={styles.td}>{data.Telefono}</td>
                          <td className={styles.td}>{data.Cuit}</td>
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
