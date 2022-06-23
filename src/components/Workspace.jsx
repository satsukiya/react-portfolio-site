import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const citys = [
  { id: 0, name: "選択してください", lat: 0, lng: 0 },
  { id: 1, name: "札幌", lat: 43.06417, lng: 141.34694 },
  { id: 2, name: "新宿", lat: 35.68944, lng: 139.69167 },
  { id: 3, name: "名古屋", lat: 35.18028, lng: 136.90667 },
  { id: 4, name: "大阪", lat: 34.68639, lng: 135.52 },
  { id: 5, name: "岡山", lat: 34.66167, lng: 133.935 },
  { id: 6, name: "福岡", lat: 33.60639, lng: 130.41806 },
];
const time_now = moment();

const Workspace = (props) => {

  const initCityData = Object.assign(citys[0], { sunrise_time: "", sunset_time: "" });
  const [target_city, setItem] = useState(initCityData);

  useEffect(() => {
  });

  const fetchReposApi = (src) => {
    //let url = "https://api.github.com/users/satsukiya/repos";
    //let url = "https://zipcloud.ibsnet.co.jp/api/search";

    let url = "https://labs.bitmeister.jp/ohakon/json";
    axios.get(url, {
      params: {
        // ここにクエリパラメータを指定する
        mode: "sun_moon_rise_set",
        year: time_now.year(),
        month: time_now.month() + 1,
        day: time_now.date(),
        lat: src.lat,
        lng: src.lng
      }
    }
    )
      .then((response) => {
        let raw_data = response.data.rise_and_set;
        let risetime = moment([time_now.year(), time_now.month(), time_now.date()].concat(raw_data.sunrise_hm.split(":")))
        let settime = moment([time_now.year(), time_now.month(), time_now.date()].concat(raw_data.sunset_hm.split(":")))

        let diff_time = settime.diff(risetime, 'minutes');

        //console.log(raw_data.sunrise_hm.split(":"));
        let dst = Object.assign(src, {
          sunrise_time: raw_data.sunrise_hm,
          sunset_time: raw_data.sunset_hm,
          sunshine_duration: parseInt(diff_time / 60) + ":" + parseInt(diff_time % 60),
        });
        console.log(dst);
        setItem(dst);
      })
      .catch((err) => {
        console.log("error!!");
        console.log(err);
      });
  }

  const SelectUI = (prop) => {
    return (
      <select value={prop.city_data.id} onChange={(event) => handleChange(event)}>
        {citys.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}
      </select>
    );
  }

  const handleChange = (event) => {
    let city_id = event.target.value;
    if (0 < parseInt(city_id)) {
      let city_element = citys.filter(city => parseInt(city.id) === parseInt(city_id));
      fetchReposApi(city_element[0]);
    } else {
      let init_city_element = citys.filter(city => parseInt(city.id) === 0);
      setItem(init_city_element);
    }
    //setItem(Object.assign(city_element[0], fetchReposApi(citys[0].lat, citys[0].lng)));
    //this.setState({ value: event.target.value });
  }

  return (
    <div id="workspace" >

      <div className="container">
        <h2>
          {props.title}
        </h2>
        <p className="description">{props.description}</p>
        <div className="workspace-contents block">
          <div>{time_now.format("YYYY-MM-DD HH:mm:SS")}</div>
          <SelectUI city_data={target_city} id="select_city"></SelectUI>
        </div>
        {
          target_city.id === 0 && (
            <div className="workspace-contents block"></div>
          )
        }
        {
          target_city.id !== 0 && (
            <div className="workspace-contents block">
              <div>
                {target_city.name}
              </div>
              <div>
                緯度 : {target_city.lat}
              </div>
              <div>
                経度 : {target_city.lng}
              </div>
              <div>
                日の出 : {target_city.sunrise_time}
              </div>
              <div>
                日の入り : {target_city.sunset_time}
              </div>
              <div>
                日照時間 : {target_city.sunshine_duration}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export { Workspace };
