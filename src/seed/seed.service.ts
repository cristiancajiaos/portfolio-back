import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';
import { projects } from './data/seed-data';
import { ProjectsService } from 'src/projects/projects.service';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private readonly projectsService: ProjectsService
  ) {

  }
  async executeSeed() {
    const myProjects = projects;
    await this.projectRepository.deleteAll();
    myProjects.forEach(async project => {
      await this.projectsService.create(project);
    });
    return {
      message: 'Seed executed'
    }
  }
}
