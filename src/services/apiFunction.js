import axiosRequest from "./Axios";
const url = 'https://api.openweathermap.org',
    key = '14025f6404f594ff7907711d0418cbf9';

export const getCity = async (city, limit) => {
    return await axiosRequest(
        "GET",
        url + `/geo/1.0/direct?q=${city}&limit=${limit}&appid=${key}`,
        ["Authorization", "jsonType"]
    );
};

export const getWeather = async (lat, lon, cnt, lang) => {
    return await axiosRequest(
        "GET",
        url + `/data/2.5/forecast?lat=${lat}&units=metric&lon=${lon}&appid=${key}&cnt=${cnt}&lang=${lang}`,
        ["Authorization", "jsonType"]
    );
};
export const getSelfIp = async (lat, lon) => {
    return await axiosRequest(
        "GET",
        "https://ipinfo.io/json?token=df052badb5a1bc",
        ["Authorization", "jsonType"]
    );
};