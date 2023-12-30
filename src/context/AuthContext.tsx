import React, { useState, createContext, ReactNode } from 'react';
import { UserModel } from '../models/User.interface';

// modelo de la informacion que utiliza el contexto
interface AuthContext {
  user: UserModel | null;
  login: (user:UserModel) => void;
  logup: () => void;
}

/**
 * Contexto de autenticacion
 */
export const AuthContext = createContext<AuthContext>({
  user: null, 
  login(user: UserModel) { },
  logup() { },
});

/**
 * Provedor de autenticacion
 * * Obtiene los elementos hijos y le inyecta la informacion del contexto de autenticacion
 * @param props : {children:ReactNode}
 * @returns React.JSX.Element
 */
export function AuthProvider({children}:{children:ReactNode}): React.JSX.Element {
  // estado para la informacion de la sesion
  const [auth, setAuth] = useState<UserModel | null>(null);

  /**
   * Funcion para habilitar una sesion
   * * Agrega informacion al contexto
   * @param user UserModel
   * @returns void
   */
  const login = (user:UserModel): void => setAuth(user);
  /**
   * Funcion para eliminar sesiones activas
   * * Remueve informacion del contexto 
   * @returns void
   */
  const logup = (): void => setAuth(null);

  // valores actualizados para el contexto
  const valueContext : AuthContext = {
    login,
    logup,
    user: auth
  };

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>;
}