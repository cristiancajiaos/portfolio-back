import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Certificate } from './entities/certificate.entity';
import { Repository } from 'typeorm';
import { validate as isUUID } from 'uuid';
@Injectable()
export class CertificatesService {

  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>
  ) {}

  async create(createCertificateDto: CreateCertificateDto) {
    try {
      let certificate = this.certificateRepository.create(createCertificateDto);
      await this.certificateRepository.save(certificate);
      return certificate; 
    } catch (error) {
      this.handleDBRequests(error);
    }
  }

  findAll() {
    return this.certificateRepository.find();
  }

  async findOne(id: string) {
    if (isUUID(id)) {
      let certificate: Certificate | null = null;
      certificate = await this.certificateRepository.findOneBy({id: id});
      if (!certificate) {
        throw new NotFoundException(`Certificate with ID ${id} not found`);
      }
      return certificate;
    } else {
      throw new BadRequestException(`ID given, ${id}, is not an UUID value`);
    }
    
  }

  update(id: number, updateCertificateDto: UpdateCertificateDto) {
    return `This action updates a #${id} certificate`;
  }

  remove(id: number) {
    return `This action removes a #${id} certificate`;
  }

  private handleDBRequests(error) {
    if (error.code == '23505') {
      throw new BadRequestException(error.detail);
    }

    throw new InternalServerErrorException(error);
  }
}
