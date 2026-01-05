import { IPackage, PackageFormData } from "../types/package";

export const editPackageUseCase = (
  currentPackages: IPackage[],
  idToEdit: string,
  newData: PackageFormData
): IPackage[] => {
  return currentPackages.map((pkg) => {
    if (pkg.idPackage === idToEdit) {
      return {
        ...pkg,        
        ...newData,    
      };
    }
    return pkg;
  });
};