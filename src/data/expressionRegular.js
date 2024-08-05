export const expresionRegularUser = /[a-z0-9]+(\.[a-z0-9]+)*/;

export const expresionRegularCorreo =
    /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    
export const expresionRegularContraseña =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;