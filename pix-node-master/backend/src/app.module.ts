import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioServico } from './servicos/usuario.servico';
import { TransacaoController } from './controllers/transacao.controller';
import { TransacaoServico } from './servicos/transacao.servico'; 
import { ContaController } from './controllers/conta.controller';
import { ContaServico } from './servicos/conta.servico';
import { UsuarioRepositorio } from './repositorios/usuario.repositorio';
import { ContaRepositorio } from './repositorios/conta.repositorio';
import { TransacaoRepositorio } from './repositorios/transacao.repositorio';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entidades/usuario.entidade';
import { Conta } from './entidades/conta.entidade';
import { Transacao } from './entidades/transacao.entidade';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pix-node',
      entities: [
        Usuario,
        Conta,
        Transacao
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Usuario,
      Conta,
      Transacao
    ])
  ],
  controllers: [
    UsuarioController, 
    TransacaoController,
    ContaController
  ],
  providers: [ 
    AppService, 
    UsuarioServico, 
    TransacaoServico,
    ContaServico,
    UsuarioRepositorio,
    ContaRepositorio,
    TransacaoRepositorio
  ],
})
export class AppModule {}
