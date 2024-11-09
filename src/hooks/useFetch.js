import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_BASE_URL;

export const useFetch = (url) => {
  const [dataApi, setDataApi] = useState(null);
  const [errorData, setErrorData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/${url}`, {
          headers: {
            'api-key': 'RJS1-202413',
          },
        });
        setDataApi(response.data.data);
        setLoading(false);
      } catch (error) {
        setErrorData(error.response.data);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const getDataById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/${url}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'RJS1-202413',
        },
      });
      setDataApi(response.data.data);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const postData = async (newData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/${url}`, newData, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'RJS1-202413',
        },
      });
      setDataApi((prevData) => [...prevData, response.data.data]);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const putData = async (id, updatedData) => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/${url}/${id}`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'RJS1-202413',
        },
      });
      setDataApi((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...updatedData } : item
        )
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${url}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'RJS1-202413',
        },
      });
      setDataApi((prevData) => prevData.filter((item) => item.id !== id));
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    dataApi,
    errorData,
    loading,
    postData,
    putData,
    getDataById,
    deleteData,
  };
};
