export const calculateDiscount = (price, percent) => price + (price * percent / 100);
export const validateEmail = (email) => email.includes('@');
export const formatUserRole = (admin) => admin ? "Адміністратор" : "Користувач";