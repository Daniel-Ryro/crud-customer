import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProducerRural {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf_cnpj: string;

  @Column()
  name: string;

  @Column()
  farm_name: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  total_hectares: number;

  @Column()
  arable_hectares: number;

  @Column()
  vegetation_hectares: number;

  @Column()
  planted_crops: string;
}
