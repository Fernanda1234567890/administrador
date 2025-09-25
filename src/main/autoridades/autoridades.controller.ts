// src/main/autoridades/autoridades.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AutoridadesService } from './autoridades.service';

@Controller('autoridades')
export class AutoridadesController {
  constructor(private readonly authService: AutoridadesService) {}

  @Get()
  async findAll() {
    return await this.authService.getTodasAutoridades();
  }
}
