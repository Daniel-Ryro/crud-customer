import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerRural } from './entities/producer-rural.entity';
import { ProducerRuralController } from './controller/producer-ruralcontroller';
import { ProducerRuralService } from './service/producer-rural.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'appdata29',
      database: 'db_agro',
      entities: [ProducerRural], 
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProducerRural]), 
  ],
  controllers: [ProducerRuralController], 
  providers: [ProducerRuralService], 
})
export class AppModule {}
