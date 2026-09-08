import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProjectsModule } from 'src/projects/projects.module';
import { CertificatesModule } from 'src/certificates/certificates.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProjectsModule, CertificatesModule]
})
export class SeedModule {}
