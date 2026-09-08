import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';
import { certificates, contacts, projects } from './data/seed-data';
import { ProjectsService } from 'src/projects/projects.service';
import { Certificate } from 'crypto';
import { CertificatesService } from 'src/certificates/certificates.service';
import { Contact } from 'src/contact/entities/contact.entity';
import { ContactService } from 'src/contact/contact.service';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    private readonly projectsService: ProjectsService,
    private readonly certificatesService: CertificatesService,
    private readonly contactService: ContactService
  ) {

  }
  async executeSeed() {
    const myProjects = projects;
    const myCertificates = certificates;
    const myContacts = contacts;
    await this.projectRepository.deleteAll();
    await this.certificateRepository.deleteAll();
    await this.contactRepository.deleteAll();
    myProjects.forEach(async project => {
      await this.projectsService.create(project);
    });
    myCertificates.forEach(async certificate => {
      await this.certificatesService.create(certificate)
    });
    myContacts.forEach(async contact => {
      await this.contactService.create(contact);
    })
    return {
      message: 'Seed executed'
    }
  }
}
