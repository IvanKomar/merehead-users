import { notification } from 'antd'

export const handleError = function* (ex) {
  if (ex && ex.status) {
    switch (ex.status) {
      case 404: {
        return notification.error({
          message: 'Error 404',
          description: 'requestred things not found'
        });
      }
      case ex.status > 500: {
        return notification.error({
          message: 'Server errors',
          description: 'there is a problem on the server, please wait a few minutes'
        });
      }

      default:
        break;
    }
  }

  yield;
  return null;
};
