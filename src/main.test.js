import { describe, it, expect, vi } from 'vitest';
import { calculateDiscount, validateEmail, formatUserRole } from './logic';

const sendData = (callback, data) => {
  return callback(data); 
};

describe('Unit Tests: MVP Logic', () => {
  
  it('коректно рахує знижку 20%', () => {
    expect(calculateDiscount(100, 20)).toBe(80);
  });

  it('валідує правильний email', () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it('повертає роль "Адміністратор"', () => {
    expect(formatUserRole(true)).toBe("Адміністратор");
  });

  it('перевіряє, що знижка не може бути від’ємною', () => {
    expect(calculateDiscount(50, 10)).toBeGreaterThan(0);
  });

  it('перевіряє тип результату ролі', () => {
    expect(typeof formatUserRole(false)).toBe('string');
  });

  it('використовує Mock для імітації колбеку', () => {
    const mockFn = vi.fn(); 
    sendData(mockFn, "Успішно");
    
    expect(mockFn).toHaveBeenCalled(); 
    expect(mockFn).toHaveBeenCalledWith("Успішно"); 
  });
});