import { Controller, Get } from '@nestjs/common';
import { EnrollService } from './enroll.service';

@Controller('enroll')
export class EnrollController {
  constructor(
    private readonly enrollService: EnrollService
  ){}

  @Get()
  async enroll () {
    return this.enrollService.enroll()
  }
}
