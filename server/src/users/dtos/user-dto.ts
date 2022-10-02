import { CreateUserDTO } from './create-user-dto';

export interface UserDTO extends CreateUserDTO {
  // recoge datos de las meves dades
  email: string;
  address: string;
  phone: string;
  city: string;
  provincia: string;
  CP: string;
  country: string;
}
