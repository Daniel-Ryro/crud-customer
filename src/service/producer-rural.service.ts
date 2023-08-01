import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProducerRural } from 'src/entities/producer-rural.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class ProducerRuralService {
  constructor(
    @InjectRepository(ProducerRural)
    private readonly producerRuralRepository: Repository<ProducerRural>,
  ) {}

  findAll(): Promise<ProducerRural[]> {
    return this.producerRuralRepository.find();
  }

  findOne(id: number): Promise<ProducerRural> {
    return this.producerRuralRepository.findOne({ where: { id } });
  }

  create(producerRural: ProducerRural): Promise<ProducerRural> {
    return this.producerRuralRepository.save(producerRural);
  }

  async update(id: number, producerRural: ProducerRural): Promise<ProducerRural> {
    await this.producerRuralRepository.update(id, producerRural);
    return this.producerRuralRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const deleteResult: DeleteResult = await this.producerRuralRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Produtor rural com ID ${id} não encontrado para exclusão.`);
    }
  }
}
