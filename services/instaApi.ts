import axios from 'axios';

const token = process.env['NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN'];

export const apiInstagram = axios.create({
  baseURL: 'https://graph.instagram.com',
  params: {
    fields: 'id,caption,media_type,media_url,username,timestamp,permalink',
    access_token: token
  }
});
