import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/**
 * Hook que facilita el acceso a la informacion del contexto de autenticacion
 */
const useAuth = () => useContext(AuthContext);

export default useAuth;