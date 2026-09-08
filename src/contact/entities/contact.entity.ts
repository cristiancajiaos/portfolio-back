import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'contact'})
export class Contact {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  medium: string;

  @Column()
  mediumUrl: string;
}
