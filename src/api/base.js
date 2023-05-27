import axios from "axios"

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // 조건부에 따라 아래의 헤더 값이 들어가면 좋을 것 같습니다.
    "X-Naver-Client-Id": "94fGFH09Kp151eWNW9h8",
    "X-Naver-Client-Secret": "YvsfmSVRlf",
  },
  withCredentials: true,
})


export const axiosGET = async (
  url,
  params,
  options
) => {
  return axiosInstance
    .get(url, { params, ...options })
    .then((response) => {
      return response.data
    })
}

export const axiosPOST = async (url, data, options) => {
  return axiosInstance.post, { csrfmiddlewaretoken: string } > (
    url,
    { ...data, },
    {
      ...options,
    }
  )
    .then((response) => {
      return response.data
    })
}
