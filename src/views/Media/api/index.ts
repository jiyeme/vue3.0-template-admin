import request from '@/utils/axios';

export const getMediaList = ()=>request.get('/media/list')
export const deleteMediaItem = ()=>request.delete('/media/delete')