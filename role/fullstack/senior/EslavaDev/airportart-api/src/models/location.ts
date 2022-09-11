import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('location')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  country: string;

  @Column({
    type: 'varchar'
  })
  latitude: string;

  @Column({
    type: 'varchar'
  })
  longitude: string;

  @Column({
    type: 'varchar',
    name: 'province_or_state'
  })
  provinceOrState: string;

}
