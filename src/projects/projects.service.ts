import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ) {

  }
  async create(createProjectDto: CreateProjectDto) {
    try {
      let newProject = this.projectRepository.create(createProjectDto);
      newProject = {
        ...newProject,
        slug: newProject.title.toLowerCase().replace(' ', '-')
      };
      await this.projectRepository.save(newProject);
      return newProject;
    } catch (error) {
      this.handleDBRequests(error);
    }
    
  }

  findAll() {
    return `This action returns all projects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }

  private handleDBRequests(error) {
    if (error.code == '23505') {
      throw new BadRequestException(error.detail);
    }

    throw new InternalServerErrorException(error);
  }
}
