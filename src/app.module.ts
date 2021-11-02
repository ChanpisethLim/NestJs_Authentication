import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FacebookStrategy } from './authentication/strategy/facebook.strategy';
import { GoogleStrategy } from './authentication/strategy/google.strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule
  ],
  providers: [FacebookStrategy, GoogleStrategy]
})
export class AppModule {}
