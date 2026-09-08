import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'certificates'})
export class Certificate {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true
  })
  title: string;

  @Column('text')
  place: string;

  @Column('int')
  year: number;

  @Column('text')
  certificateUrl: string;
}
