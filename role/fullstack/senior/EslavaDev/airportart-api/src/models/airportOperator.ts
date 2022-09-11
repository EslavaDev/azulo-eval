import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('airport_operator')
export class AirportOperator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  name: string;
  
}
