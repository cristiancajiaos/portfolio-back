import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'projects'})
export class Project {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true
  })
  slug: string;

  @Column('text', {
    unique: true
  })
  title: string; 

  @Column('int')
  year: number;

  @Column('text')
  imgUrl: string;

  @Column('text')
  sampleUrl: string;

  @Column('text')
  description: string;

  @Column('text', {
    array: true
  })
  tools: string[];
}
