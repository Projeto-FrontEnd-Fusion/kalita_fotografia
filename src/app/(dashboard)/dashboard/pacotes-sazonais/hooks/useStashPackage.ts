import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { IPackage, PackageFormData } from '../types/package';
import { PackageStorage } from '../services/storage';
import { deletePackageUseCase } from '../use-cases/deletePackageUseCase';
import { editPackageUseCase } from '../use-cases/editPackageUseCase';

export const useStashPackage = () => {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = PackageStorage.get();
    setPackages(stored);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      PackageStorage.save(packages);
    }
  }, [packages, isLoaded]);


  // FUNÇÕES

  const getPackageById = useCallback((id: string) => {
    return packages.find((pkg) => pkg.idPackage === id);
  }, [packages]);

  const addPackage = useCallback((newPackage: PackageFormData) => {
    const fullPackage: IPackage = {
      ...newPackage,
      idPackage: nanoid(10),
      isPublished: false,
      status: 'Rascunho',
      images: newPackage.images || [], 
    };
    setPackages((prev) => [...prev, fullPackage]);
  }, []);

  const updatePackage = useCallback((id: string, updatedData: PackageFormData) => {
    setPackages((prev) => editPackageUseCase(prev, id, updatedData));
  }, []);

  const deletePackage = useCallback((id: string) => {
    setPackages((prev) => deletePackageUseCase(prev, id));
  }, []);

  return { 
    packages, 
    addPackage, 
    deletePackage, 
    updatePackage, 
    getPackageById, 
    isLoaded 
  };
};