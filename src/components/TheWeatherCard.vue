<template>
  <div>
    <section class="lg:ml-3">
      <label class="" for="cityInput">{{ $t("searchForCity") }}</label>
      <div class="my-2">
        <input
          class="input input-bordered w-full max-w-xs"
          type="text"
          id="cityInput"
          v-model="inputValue"
          placeholder="Type to search city name..."
          @input="handleInput"
        />
        <ul
          class="flex flex-col gap-1 items-start my-4"
          v-if="filteredCities.length > 0 && !inputValue == ''"
        >
          <li
            class="text-primary btn btn-ghost"
            v-for="city in filteredCities"
            :key="city.name"
            @click="selectCity(city)"
          >
            {{ city.city }}
          </li>
        </ul>
      </div>
    </section>
    <section class="mt-10">
      <div class="card mx-2 shadow-xl image-full bg-white">
        <img class="rounded-xl h-full" src="/weather.webp" alt="weather" />
        <div
          v-if="weatherData"
          class="card-body flex justify-center items-center gap-y-5"
        >
          <h2 class="text-2xl font-bold">City : {{ selectedCity.city }}</h2>
          <span class="text-xl">
            Weather: {{ weatherData.current_weather.temperature }} °C
          </span>
          <span
            >Wind Speed : {{ weatherData.current_weather.windspeed }} km/h</span
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import citiesData from "../assets/ir.json";
import axios from "axios";

const inputValue = ref("");
const selectedCity = ref(null);
const weatherData = ref(null);
const cities = citiesData;

const handleInput = (event) => {
  inputValue.value = event.target.value;
};

const filteredCities = computed(() => {
  const inputLowerCase = inputValue.value.toLowerCase();
  return cities.filter((city) =>
    city.city.toLowerCase().includes(inputLowerCase)
  );
});
const selectCity = (city) => {
  selectedCity.value = city;
  inputValue.value = city.city;
  getDataFromApi();
};

const getDataFromApi = async () => {
  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.value.lat}&longitude=${selectedCity.value.lng}&current_weather=true`;

    const response = await axios.get(apiUrl);
    console.log(response.data);
    weatherData.value = response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
</script>

<style lang="scss" scoped></style>
