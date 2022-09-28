import { CreateUserDTO } from './create-user-dto';

export interface UserDTO extends CreateUserDTO {
  // recoge datos de las meves dades
  address: string;
  city: string;
  CP: string;
  country: string;
  phone: string;
}
