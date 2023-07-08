import { useState } from 'react';
import { postFetcher } from '@/utils/httpClient';

export const useTopPage = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [music, setMusic] = useState('');
  const handleChange = (value: string) => {
    setInput(value);
  };
  const handleSubmit = async () => {
    setLoading(true);
    const requestBody = {
      prompt_a: input,
    };
    try {
      const data = await postFetcher(
        '/v2/p-a7dd4047/generate-music/predict',
        requestBody,
        {
          Authorization:
            process.env.NEXT_PUBLIC_AUTH_PUBLIC_KEY,
        }
      );
      setMusic(data.result.audio);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    handleChange,
    handleSubmit,
    loading,
    music,
  };
};
