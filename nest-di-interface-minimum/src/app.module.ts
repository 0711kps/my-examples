import { Module } from '@nestjs/common';
import { EnrollModule } from './enroll/enroll.module';

@Module({
  imports: [EnrollModule]
})
export class AppModule {}
