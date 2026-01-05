import { IPackage } from "../types/package";

const STORAGE_KEY = '@kalita:packages';

export const PackageStorage = {

  get: (): IPackage[] => {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Erro ao ler do LocalStorage:", error);
      return [];
    }
  },

  save: (packages: IPackage[]): void => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(packages));
    } catch (error) {
      console.error("Erro ao salvar no LocalStorage:", error);
    }
  },

  clear: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};