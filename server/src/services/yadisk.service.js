import axios from 'axios';
import config from '../config';

const yadiskService = {
  upload: async (file) => {
    const fileName = Date.now() + file.name;

    const instance = axios.create({
      headers: {
        Authorization: `OAuth ${config.YANDEX_KEY}`,
      },
    });

    const loadUrl = (
      await instance.get(
        `https://cloud-api.yandex.net/v1/disk/resources/upload?path=%2Fapi%2F${encodeURIComponent(
          fileName
        )}`
      )
    ).data.href;

    await instance.put(loadUrl, file.data);

    return `media/${fileName}`;
  },
};

export default yadiskService;
