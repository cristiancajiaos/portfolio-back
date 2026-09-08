import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { validate as isUUID } from 'uuid';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async create(createProjectDto: CreateProjectDto) {
    try {
      let newProject = this.projectRepository.create(createProjectDto);
      newProject = {
        ...newProject,
        slug: newProject.title.toLowerCase().replace(' ', '-'),
      };
      await this.projectRepository.save(newProject);
      return newProject;
    } catch (error) {
      this.handleDBRequests(error);
    }
  }

  findAll() {
    return this.projectRepository.find();
  }

  async findOne(term: string) {
    let project: Project | null = null;
    if (isUUID(term)) {
      project = await this.projectRepository.findOneBy({ id: term });
    } else {
      project = await this.projectRepository.findOneBy({ slug: term });
    }
    
    if (!project) {
      throw new NotFoundException(`Project with ID or slug ${term} not found`);
    }
    return project;
  }

  async remove(id: string) {
    let project = this.findOne(id);
    await this.projectRepository.delete(id);
    return {
      message: 'Proyecto eliminado'
    };
  }

  private handleDBRequests(error) {
    if (error.code == '23505') {
      throw new BadRequestException(error.detail);
    }

    throw new InternalServerErrorException(error);
  }
}
