import React, { useEffect } from 'react'
import SideBar from '../../Home/Graficos/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Update.module.css";
import { connect, useDispatch } from 'react-redux';
import { getAllRutes } from '../../../../Redux/actions';

function Update(props) {
  const dispatch = useDispatch();
const allRutas = props.rutas;


  // const [allRutas, setAllRutas] = React.useState([...props.rutas.data]);

  useEffect(() => {
    dispatch(getAllRutes());
    console.log(props.rutas);
  },[])
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
                            <th className={styles.th}>Fecha de salida</th>
                            <th className={styles.th}>Valor del Ticket</th>
                            <th className={styles.th}>Status</th>
                            <th className={styles.th}>Editar</th>
                            <th className={styles.th}>Eliminar</th>
                        </tr>
                      </thead>
                      {allRutas.map ( (data) => {
                        return <tbody>
                        <tr>
                          <td className={styles.td}>{data.origen}</td>
                          <td className={styles.td}>{data.destino}</td>
                          <td className={styles.td}>{data.hora_salida}</td>
                          <td className={styles.td}>{data.hora_llegada}</td>
                          <td className={styles.td}>{data.fecha_salida}</td>
                          <td className={styles.td}>{data.precio}</td>
                          <td className={styles.td}>{"Activo o inactivo"}</td>
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

const mapStateToProps = (state) => {
  return {
    rutas: state.trips
  };
}

export default connect(mapStateToProps, null)(Update)