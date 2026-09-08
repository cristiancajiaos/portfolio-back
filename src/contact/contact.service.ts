import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { validate as isUUID } from 'uuid';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>
  ) {}

  async create(createContactDto: CreateContactDto) {
    try {
      let contact = this.contactRepository.create(createContactDto);
      await this.contactRepository.save(contact);
      return contact;
    } catch (error) {
      this.handleDBRequests(error);
    }
  }

  findAll() {
    return this.contactRepository.find();
  }

  async findOne(id: string) {
    let medium: Contact | null = null;
    if (isUUID(id)) {
      medium = await this.contactRepository.findOneBy({id: id});
      if (!medium) {
        throw new NotFoundException(`Contact with ID ${id} not found`); 
      }
      return medium;
    } else {
      throw new BadRequestException(`ID given, ${id}, is not a valid ID`);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }

  private handleDBRequests(error) {
    if (error.code == '23505') {
      throw new BadRequestException(error.detail);
    }

    throw new InternalServerErrorException(error);
  }
}
