import { createContext } from "react";

export const BillboardContext = createContext();

export const BillboardProvider = BillboardContext.Provider;
export const BillboardConsumer = BillboardContext.Consumer;
