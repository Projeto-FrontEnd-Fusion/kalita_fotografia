export type PackageStatus = 'Aprovado' | 'Rascunho';

export interface IPackage {
  idPackage: string;
  titlePackage: string;
  descriptionPackage: string;
  pricePackage: string;
  plusInformationPackage: string;
  isPublished: boolean;
  status: PackageStatus;
  images: string[]; 
}

export type PackageFormData = Omit<IPackage, 'idPackage' | 'isPublished' | 'status'>;

export interface PackageCardProps {
  idPackage: string;
  status: PackageStatus;
  title: string;
  description: string;
  price: string;
  isPublished: boolean;
  images?: string[]; 
}