import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProducerRural } from 'src/entities/producer-rural.entity';
import { ProducerRuralService } from 'src/service/producer-rural.service';

@Controller('producers-rural')
export class ProducerRuralController {
  constructor(private readonly producerRuralService: ProducerRuralService) {}

  @Get()
  findAll(): Promise<ProducerRural[]> {
    return this.producerRuralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProducerRural> {
    return this.producerRuralService.findOne(id);
  }

  @Post()
  create(@Body() producerRural: ProducerRural): Promise<ProducerRural> {
    return this.producerRuralService.create(producerRural);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() producerRural: ProducerRural): Promise<ProducerRural> {
    return this.producerRuralService.update(id, producerRural);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.producerRuralService.remove(id);
  }
}
