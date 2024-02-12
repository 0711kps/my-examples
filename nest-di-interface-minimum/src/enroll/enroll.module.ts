import { Module } from '@nestjs/common';
import { EnrollController } from './enroll.controller';
import { EnrollService } from './enroll.service';
import { EnrollServiceInterface } from './enroll.service.interface'

@Module({
  controllers: [EnrollController],
  providers: [{
    provide: EnrollServiceInterface,
    useClass: EnrollService
  }]
})
export class EnrollModule {}
