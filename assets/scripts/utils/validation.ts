export function isPhoneNumber(value: string): boolean {
  const phoneRegex = /^[0-9]{9,11}$/;
  return phoneRegex.test(value);
}

export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function isPasswordStrong(value: string): boolean {
  return value.length >= 6 && value.length <= 12 ;
}