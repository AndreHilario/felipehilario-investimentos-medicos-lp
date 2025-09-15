import React, { createContext, useState } from "react";

type ObjectiveContextProps = {
  selectedObjective: string;
  setSelectedObjective: React.Dispatch<React.SetStateAction<string>>;
  CPF: string;
  setCPF: React.Dispatch<React.SetStateAction<string>>;
  CNPJ: string;
  setCNPJ: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  expirationDateTime: string;
  setExpirationDateTime: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  payment: boolean;
  setPayment: React.Dispatch<React.SetStateAction<boolean>>;
  transactionValue: string;
  setTransactionValue: React.Dispatch<React.SetStateAction<string>>;
  paymentConfirmed: boolean;
  setPaymentConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
  shareConfirmed: boolean;
  setShareConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUE: ObjectiveContextProps = {
  selectedObjective: "",
  setSelectedObjective: () => {},
  CPF: "",
  setCPF: () => {},
  CNPJ: "",
  setCNPJ: () => {},
  name: "",
  setName: () => {},
  expirationDateTime: "",
  setExpirationDateTime: () => {},
  token: "",
  setToken: () => {},
  payment: false,
  setPayment: () => {},
  transactionValue: "",
  setTransactionValue: () => {},
  paymentConfirmed: false,
  setPaymentConfirmed: () => {},
  shareConfirmed: false,
  setShareConfirmed: () => {},
};

const Context = createContext<ObjectiveContextProps>(DEFAULT_VALUE);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [selectedObjective, setSelectedObjective] = useState<string>(
    DEFAULT_VALUE.selectedObjective
  );
  const [CPF, setCPF] = useState<string>(DEFAULT_VALUE.CPF);
  const [CNPJ, setCNPJ] = useState<string>(DEFAULT_VALUE.CNPJ);
  const [name, setName] = useState<string>(DEFAULT_VALUE.CNPJ);
  const [expirationDateTime, setExpirationDateTime] = useState<string>(
    DEFAULT_VALUE.expirationDateTime
  );
  const [token, setToken] = useState<string>(DEFAULT_VALUE.token);
  const [payment, setPayment] = useState<boolean>(DEFAULT_VALUE.payment);
  const [transactionValue, setTransactionValue] = useState<string>(DEFAULT_VALUE.transactionValue);
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(DEFAULT_VALUE.paymentConfirmed);
  const [shareConfirmed, setShareConfirmed] = useState<boolean>(DEFAULT_VALUE.shareConfirmed);

  return (
    <Context.Provider
      value={{
        selectedObjective,
        setSelectedObjective,
        CPF,
        setCPF,
        CNPJ,
        setCNPJ,
        name,
        setName,
        expirationDateTime,
        setExpirationDateTime,
        token,
        setToken,
        payment,
        setPayment,
        transactionValue,
        setTransactionValue,
        paymentConfirmed,
        setPaymentConfirmed,
        shareConfirmed,
        setShareConfirmed
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
