import { Module } from '@nestjs/common';
import { EnrollController } from './enroll.controller';
import { Enroll2Service } from './enroll2.service';

@Module({
  controllers: [EnrollController],
  providers: [{
    provide: 'EnrollService',
    useClass: Enroll2Service
  }]
})
export class EnrollModule {}
