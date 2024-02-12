import { Module } from '@nestjs/common';
import { EnrollController } from './enroll.controller';
import { EnrollService } from './enroll.service';

@Module({
  controllers: [EnrollController],
  providers: [{
    provide: 'EnrollService',
    useClass: EnrollService
  }]
})
export class EnrollModule {}
