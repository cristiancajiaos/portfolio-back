import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';
import { certificates, projects } from './data/seed-data';
import { ProjectsService } from 'src/projects/projects.service';
import { Certificate } from 'crypto';
import { CertificatesService } from 'src/certificates/certificates.service';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
    private readonly projectsService: ProjectsService,
    private readonly certificatesService: CertificatesService
  ) {

  }
  async executeSeed() {
    const myProjects = projects;
    const myCertificates = certificates;
    await this.projectRepository.deleteAll();
    await this.certificateRepository.deleteAll();
    myProjects.forEach(async project => {
      await this.projectsService.create(project);
    });
    myCertificates.forEach(async certificate => {
      await this.certificatesService.create(certificate)
    });
    return {
      message: 'Seed executed'
    }
  }
}
