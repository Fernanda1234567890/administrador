// src/main/autoridades/autoridades.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdministrativoCargoRegularUnidad } from 'src/administrativo-cargo-regular-unidad/entities/administrativo-cargo-regular-unidad.entity';
import { CargoIntermedioDocente } from 'src/cargo-intermedio-docente/entities/cargo-intermedio-docente.entity';

@Injectable()
export class AutoridadesService {
  constructor(
    @InjectRepository(AdministrativoCargoRegularUnidad)
    private readonly adminRepo: Repository<AdministrativoCargoRegularUnidad>,
    @InjectRepository(CargoIntermedioDocente)
    private readonly docenteRepo: Repository<CargoIntermedioDocente>,
  ) {}

  async getAdministrativos() {
    return this.adminRepo.find({
      relations: ['administrativo', 'administrativo.persona', 'cargo_regular', 'unidad'],
      order: { id: 'ASC' }, // del primero registrado al último
      where: { estado: true }, // si tu entidad tiene 'estado'
    });
  }

  async getDocentes() {
    return this.docenteRepo.find({
      relations: ['docente', 'docente.persona', 'cargo_intermedio', 'cargo_intermedio.unidad'],
      order: { id: 'ASC' },
      where: { estado: true }, // reemplaza 'activo' por la propiedad correcta
    });
  }

  async getTodasAutoridades() {
  const admins = await this.adminRepo.find({
    relations: ['administrativo', 'administrativo.persona', 'cargo_regular', 'unidad'],
    order: { id: 'ASC' },
    where: { estado: true },
  });

  const docentes = await this.docenteRepo.find({
    relations: ['docente', 'docente.persona', 'cargo_intermedio', 'cargo_intermedio.unidad'],
    order: { id: 'ASC' },
    where: { estado: true }, // reemplaza 'estado' según tu entidad
  });

  return [...admins, ...docentes];
}
}
