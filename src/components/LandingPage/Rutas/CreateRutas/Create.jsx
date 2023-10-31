import { getTerminales, createRoute, getCities} from '../../../../Redux/actions';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useDispatch, useSelector } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from 'react';
import SideBar from '../../Home/Graficos/SideBar';
import styles from "./Create.module.css";
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import DatePicker from "react-datepicker";

function Create(props) {
  const dispatch = useDispatch()
  const cities = props.terminales;

  let data = [];

  if (cities) {
    data = [...cities];
  }

  const [dataRoutes, setDataRoutes] = useState({
    origen: '',
    destino: '',
    fecha_salida: '',
    hora_salida: '',
    hora_llegada: '',
    precio: 0,
  });

  // console.log(dataRoutes);

  const [startDate, setStartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const onSubmit = (values, actions) => {
    const formData = new FormData();

    const dataRoute = {
      origen: dataRoutes.origen,
      destino: dataRoutes.destino,
      fecha_salida: dataRoutes.fecha_salida,
      hora_salida: values.hora_salida,
      hora_llegada: values.hora_llegada,
      precio: values.precio,
      statud: 1
    }
    // formData.append('data', JSON.stringify(dataRoute));
    dispatch(createRoute(dataRoute));
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

    // Valores iniciales que vamos a tener en nuestro formulario
    initialValues: {
      origen: "",
      destino: "",
      fecha_salida: "",
      hora_llegada: "",
      hora_salida: "",
      precio: 0,
    },
    // Esquema de validaciones, que declaramos e importamos

    // Funcion onSubmit que tomara el lugar en cualquier handleSubmit
    onSubmit
  });

  const handleDate = (date) => {
    const formatDate = date.toLocaleDateString().split('T')[0];;
    setStartDate(date)
    setDataRoutes({ ...dataRoutes, fecha_salida: formatDate })
  }

  useEffect(() => {
    dispatch(getTerminales());;
  }, [dispatch])



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
        <Form className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.input_container}>
            <div className={styles.input_name}>
              <FloatingLabel controlId="floatingPassword" label="Horario de Salida" className="w-100 me-2">
                <Form.Control
                  className={styles.form_input}
                  type="time"
                  placeholder="Horario de Salida"
                  name='hora_salida'
                  value={values.hora_salida}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Horario de Llegada" className="w-100 me-2">
                <Form.Control
                  className={styles.form_input}
                  type="time"
                  placeholder="Horario de Llegada"
                  name='hora_llegada'
                  value={values.hora_llegada}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </div>
            <div className={styles.input_name}>
              <FloatingLabel controlId="floatingPassword" label="Valor del Ticket" className="w-100">
                <Form.Control
                  className={styles.form_input}
                  type="number"
                  placeholder="Valor del Ticket"
                  name='precio'
                  value={values.precio}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </div>
            <div className={styles.input_name}>
            <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                <Form.Label className='text-black'>Ciudad de Origen</Form.Label>
                <Select
                  className={styles.form_input}
                  isClearable
                  options={data?.map(city => ({
                    value: city.id,
                    label: city.nombre,
                  }))}
                  placeholder='Ciudad de Origen'
                  onChange={(selectedOption) => {
                    console.log(selectedOption.value);
                    if (selectedOption) {
                      setDataRoutes({ ...dataRoutes, origen: selectedOption.value });
                    } else {
                      setDataRoutes({ ...dataRoutes, origen: '' });
                    }
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                <Form.Label className='text-black'>Ciudad de Destino</Form.Label>
                <Select
                  className={styles.form_input}
                  isClearable
                  options={data?.map(city => ({
                    value: city.id,
                    label: city.nombre
                  }))}
                  placeholder='Ciudad de Destino'
                  onChange={(selectedOption) => {
                    if (selectedOption) {
                      setDataRoutes({ ...dataRoutes, destino: selectedOption.value });
                    } else {
                      setDataRoutes({ ...dataRoutes, destino: '' });
                    }
                  }}
                  required
                />
              </Form.Group>
            </div>
            <div className={styles.input_name}>
            <Form.Group className={styles.formGroup} controlId="formBasicPassword">
                <Form.Label className='text-black'></Form.Label>
                <DatePicker
                  className={styles.select}
                  selected={startDate}
                  onChange={(date) => handleDate(date)}
                  minDate={new Date()}
                  // maxDate={addMonths(new Date(), 1)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText='Fecha de Salida'
                  showDisabledMonthNavigation
                  required
                />
              </Form.Group>
            </div>
            <Button className='w-100 my-4' variant="primary" type="submit">
              Crear Ruta
            </Button>
          </div>
        </Form>
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
    terminales: state.terminales
  };
}

export default connect(mapStateToProps, null)(Create)