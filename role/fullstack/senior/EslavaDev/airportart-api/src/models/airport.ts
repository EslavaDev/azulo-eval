import { Location } from './location';
import { AirportOperator } from './airportOperator';

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('airport')
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Location, location => location.id, { eager: true })
  @JoinColumn({name: 'location_id'})
  locationId: number;

  @ManyToOne(() => AirportOperator, airportOperator => airportOperator.id, { eager: true })
  @JoinColumn({name: 'airport_operator_id'})
  airportOperatorId: number;

  @Column({
    type: 'varchar',
    name: 'airport_code'
  })
  airportCode: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'priority_order'
  })
  priorityOrder: number;

}
