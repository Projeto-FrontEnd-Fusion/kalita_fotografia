import { IPackage } from "../types/package";

export const deletePackageUseCase = (
  currentPackages: IPackage[], 
  idToDelete: string
): IPackage[] => {
  return currentPackages.filter(pkg => pkg.idPackage !== idToDelete);
};