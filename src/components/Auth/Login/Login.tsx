import { View, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
// librerias externas
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
// hooks personalizados
import useAuth from '../../../hooks/useAuth';
// estilos
import Styles from './Login.styles';
// utilidades
import { purple } from '../../../utils/Colors';
// interfaces
import { AuthUserModel as  FormDataModel } from '../../../models/User.interface';
import { requestLogin } from '../../../api/login.api';


const Login = () => {

  // accediendo al contexto para obtener los valores
  const { login } = useAuth();

  // estado para mostrar u ocultar la contrasena en el input de contrasena
  const [showPassword, setShowPassword] = useState<boolean>(true);

  // objeto encargado de controlar el formulario, valores, errores y envio de data
  const formik = useFormik<FormDataModel>({
    initialValues: initialValues(), // (valores inciales) se puede colocar el objeto directamente
    validationSchema: yup.object(validationSchema()), // (valores de validaciones) se pueden conlocar directamente
    validateOnChange: false, // realizar las validaciones mientras se realiza recolecta los valores
    onSubmit: (formValues:FormDataModel, formikHelpers:FormikHelpers<FormDataModel>) => {
      hableLogin(formValues);
    },
  });

  // resolver el login
  const hableLogin = async (formData:FormDataModel) => {
    try {
      const response = await requestLogin(formData);
      console.log('[+] Login succes');
      // guardando la informacion en el contexto de autenticacion
      if(response) login(response);
    } catch (error) {
      console.log('[-] Login error');
      // cargando los errores a los inputs
      formik.setErrors({userName: 'User name no found', password: 'Password no match'})
    }
  }

  return (
    <View style={Styles.container}>

      <View style={Styles.bgImageLogin}></View>

      <Image 
        source={require('../../../assets/picachu-transparent.png')}
        style={Styles.imageLogin}
      />

      <Text style={Styles.title}>Login</Text>

      <View style={[Styles.imputContainer, (formik.errors.userName) ? Styles.inputContainerError : {}]}>
        <TextInput
          style={Styles.textInput} 
          placeholder='User Name'
          autoCapitalize='none'
          inputMode='text'
          autoComplete='username'
          selectionColor={purple}
          value={formik.values.userName}
          onChangeText={(value:string)=> formik.setFieldValue('userName', value)}
        />
        <Icon name='user' style={Styles.inputIcon} />
      </View>

      {
        // errores para userName
        (formik.errors.userName) ? <Text style={Styles.inputTextError}>*{formik.errors.userName}</Text> : <></>
      }

      <View style={[Styles.imputContainer, (formik.errors.password) ? Styles.inputContainerError : {}]}>
        <TextInput
          style={Styles.textInput} 
          placeholder='Pssword'
          autoCapitalize='none'
          inputMode='text'
          autoComplete='password'
          secureTextEntry={showPassword}
          selectionColor={purple}
          value={formik.values.password}
          onChangeText={(value:string)=> formik.setFieldValue('password', value)}
        />
        <TouchableNativeFeedback onPress={()=>setShowPassword(!showPassword)}>
            <Icon 
              name={(showPassword) ? 'lock' : 'lock-open'} 
              size={14}
              style={Styles.inputIcon} 
            />
        </TouchableNativeFeedback>
      </View>

      {
        // errores para password
        (formik.errors.password) ? <Text style={Styles.inputTextError}>*{formik.errors.password}</Text> : <></>
      }

      <TouchableOpacity onPress={formik.submitForm} style={Styles.loginButtonContainer}>
          <Text style={Styles.loginButtonText}>Login</Text>
          <Icon name='sign-in-alt' style={Styles.loginButtonText} />
      </TouchableOpacity>

    </View>
  );
};

/**
 * funcion para devolver los valores iniciales del formulario
 * * Se usa exclusivamente para el objeto inicial del Formik
 * @returns FormDataModel
 */
const initialValues = () : FormDataModel => ({
  userName: '',
  password: ''
});

/**
 * funcion para devolver los valores de las validaciones del formulario
 * * Se usa exclusivamente para el objeto de valiudaciones del Formik
 * @returns validationSchema
 */
const validationSchema = () => ({
  userName: yup.string().required('This field is required').min(2, 'Min lenght 2 charts'),
  password: yup.string().required('This field is required').min(6, 'Min lenght 6 charts').max(12, 'Max lenght 12 charts'),
});


export default Login;