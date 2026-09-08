import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Certificate } from './entities/certificate.entity';
import { Repository } from 'typeorm';

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
    return `This action returns all certificates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} certificate`;
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
