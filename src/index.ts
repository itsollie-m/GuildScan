import dotevv from 'dotenv';
import { client } from './bot/client';

dotevv.config();

client.login(process.env.DISCORD_TOKEN);