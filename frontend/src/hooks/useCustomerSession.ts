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

export function useCustomerSession() {
  const getSession = (): CustomerSession | null => {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      return JSON.parse(raw) as CustomerSession;
    } catch {
      return null;
    }
  };

  const setSession = (data: CustomerSession): void => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  };

  const clearSession = (): void => {
    clearCustomerSession();
  };

  const session = getSession();

  return { session, setSession, clearSession };
}
