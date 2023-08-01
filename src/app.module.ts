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
      entities: [ProducerRural], // Adicione a entidade aqui
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProducerRural]), // Adicione se você estiver usando algum repositório específico
  ],
  controllers: [ProducerRuralController], // Adicione o ProducerRuralController (e outros controladores, se houver)
  providers: [ProducerRuralService], // Adicione o ProducerRuralService (e outros serviços, se houver)
})
export class AppModule {}
