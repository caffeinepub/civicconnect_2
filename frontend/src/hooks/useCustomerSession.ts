export interface CustomerSession {
  customerId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  businessName: string;
}

const SESSION_KEY = 'ymw_customer_session';

export function clearCustomerSession(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

export function getCustomerSession(): CustomerSession | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw || raw.trim() === '') return null;
    const parsed = JSON.parse(raw) as CustomerSession;
    // Validate required fields
    if (!parsed || !parsed.customerId) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setCustomerSession(data: CustomerSession): void {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
}

export function useCustomerSession() {
  const getSession = (): CustomerSession | null => {
    return getCustomerSession();
  };

  const setSession = (data: CustomerSession): void => {
    setCustomerSession(data);
  };

  const clearSession = (): void => {
    clearCustomerSession();
  };

  const session = getSession();

  return { session, setSession, clearSession, getSession };
}
