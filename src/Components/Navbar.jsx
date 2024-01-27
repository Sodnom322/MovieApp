import React from "react";
import arrow from "../assets/images/icons8-expand-arrow-50.png";
import { Link } from "react-router-dom";
import upArrow from "../assets/images/icons8-up-arrow-50.png";

import downArrow from "../assets/images/icons8-down-arrow-50.png";

const Navbar = ({ search, setSearch }) => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            Фильмы <img src={arrow} alt="arrow" />
          </li>
          <li>
            Сериалы <img src={arrow} alt="arrow" />
          </li>
          <li>
            Мультфильмы <img src={arrow} alt="arrow" />
          </li>
          <li>
            Аниме <img src={arrow} alt="arrow" />
          </li>
          <Link to="/favorites" style={{ color: "black" }}>
            <li>Смотреть позже</li>
          </Link>

          <li>Подборки</li>
        </ul>
        <label htmlFor="search" className="label_search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="17px"
            height="17px"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
          <input
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            type="text"
            id="search"
            className="search"
            placeholder="Поиск фильмов и сериалов"
          />
          <svg
            className={search ? "closeSearch" : ""}
            onClick={() => setSearch("")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="15px"
            height="15px"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </label>
      </div>
      <div className="categories">
        <div className="categories_wrapper">
          <div className="categories_wrapper_list">
            <div className="wrapper_list_second">
              <div>
                <ul>
                  <li>Вестерны</li>
                  <li>Арт-хаус</li>
                  <li>Криминал</li>
                  <li>Фантастика</li>
                  <li>Ужасы</li>
                  <li>Документальные</li>
                  <li>Позновательные</li>
                  <li>Короткометражки</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Семейные</li>
                  <li>Боевики</li>
                  <li>Приключения</li>
                  <li>Комедия</li>
                  <li>Мюзиклы</li>
                  <li>Эротика</li>
                  <li>Театр</li>
                  <li>Русские</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Фэнтэзи</li>
                  <li>Военные</li>
                  <li>Драма</li>
                  <li>Мелодрамы</li>
                  <li>Музыкальные</li>
                  <li>Детские</li>
                  <li>Концрт</li>
                  <li>Украинские</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Биографические</li>
                  <li>Детективы</li>
                  <li>Спортивные</li>
                  <li>Триллеры</li>
                  <li>Исторические</li>
                  <li>Путешествия</li>
                  <li>Стендап</li>
                  <li>Зарубежные</li>
                </ul>
              </div>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                {" "}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M16.06,19.06 c0.51-0.58,1.31-0.96,2.02-1.06c0.1,0.77-0.2,1.55-0.61,2.03c-0.5,0.58-1.21,0.97-2.01,0.97C15.26,20.32,15.56,19.65,16.06,19.06z M20.39,29.1c-0.6,0.8-1.41,1.9-2.31,1.9c-0.91,0-1.11-0.6-2.22-0.5c-1.21,0-1.41,0.6-2.32,0.5c-1,0-1.71-0.9-2.21-1.8 c-1.51-2.3-1.71-5.1-0.71-6.6c0.71-1,1.71-1.6,2.72-1.6c1.01,0,1.71,0.6,2.52,0.6s1.31-0.6,2.52-0.6c0.91,0,1.81,0.5,2.52,1.3 c-2.22,1.2-1.82,4.3,0.4,5.2C20.9,28.2,20.7,28.5,20.39,29.1z M29.4,22.38h-2.6v5.22c0,1.2,0.3,1.9,1.4,1.9c0.5,0,0.8,0,1-0.1 l0.1,1.4C29,30.9,28.4,31,27.7,31c-0.8,0-1.5-0.3-2-0.8c-0.5-0.6-0.7-1.4-0.7-2.6v-5.22h-1.5V21H25v-2.5l1.8-0.5v3h2.6V22.38z M36.11,31h-1.7l-3.79-10h1.9l1.99,5.6c0.3,0.9,0.6,1.7,0.8,2.6h0.1c0.2-0.8,0.5-1.6,0.8-2.6l1.9-5.6H40L36.11,31z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 25.3125 3 C 19.210938 3 12.492188 5.3125 11.09375 12.8125 C 10.894531 13.613281 11.5 13.992188 12 14.09375 L 18.1875 14.6875 C 18.789063 14.6875 19.207031 14.101563 19.40625 13.5 C 19.90625 10.898438 22.101563 9.59375 24.5 9.59375 C 25.800781 9.59375 27.292969 10.113281 28.09375 11.3125 C 28.992188 12.613281 28.8125 14.40625 28.8125 15.90625 L 28.8125 16.8125 C 25.113281 17.210938 20.3125 17.5 16.8125 19 C 12.8125 20.699219 10 24.207031 10 29.40625 C 10 36.007813 14.199219 39.3125 19.5 39.3125 C 24 39.3125 26.5 38.195313 30 34.59375 C 31.199219 36.292969 31.585938 37.105469 33.6875 38.90625 C 34.1875 39.207031 34.789063 39.085938 35.1875 38.6875 L 35.1875 38.8125 C 36.488281 37.710938 38.792969 35.601563 40.09375 34.5 C 40.59375 34.199219 40.492188 33.5 40.09375 33 C 38.894531 31.398438 37.6875 30.09375 37.6875 27.09375 L 37.6875 17.1875 C 37.6875 12.988281 38.007813 9.085938 34.90625 6.1875 C 32.40625 3.789063 28.414063 3 25.3125 3 Z M 27 22 L 28.6875 22 L 28.6875 23.40625 C 28.6875 25.804688 28.792969 27.894531 27.59375 30.09375 C 26.59375 31.894531 24.988281 33 23.1875 33 C 20.789063 33 19.3125 31.207031 19.3125 28.40625 C 19.3125 23.707031 23 22.300781 27 22 Z M 44.59375 36.59375 C 42.992188 36.59375 41.085938 37 39.6875 38 C 39.289063 38.300781 39.3125 38.6875 39.8125 38.6875 C 41.414063 38.488281 44.988281 38.007813 45.6875 38.90625 C 46.289063 39.707031 45.007813 43.085938 44.40625 44.6875 C 44.207031 45.1875 44.601563 45.300781 45 45 C 47.699219 42.699219 48.40625 38.007813 47.90625 37.40625 C 47.605469 36.90625 46.195313 36.59375 44.59375 36.59375 Z M 2.1875 37.5 C 1.886719 37.5 1.695313 38.011719 2.09375 38.3125 C 8.09375 43.710938 16.007813 47 24.90625 47 C 31.207031 47 38.492188 45.011719 43.59375 41.3125 C 44.394531 40.710938 43.707031 39.695313 42.90625 40.09375 C 37.207031 42.492188 31.101563 43.6875 25.5 43.6875 C 17.199219 43.6875 9.1875 41.386719 2.6875 37.6875 C 2.488281 37.488281 2.289063 37.5 2.1875 37.5 Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M19.986,25.212c0,0,0.562-0.878,1.545-1.264s0.667,0.562,0.141,0.948C21.144,25.282,20.617,25.388,19.986,25.212z M20.512,23.631c-0.913,0.176-1.194,0.667-1.089,1.194C19.564,24.404,20.512,23.632,20.512,23.631z M34.771,27.882 c-0.387,0.351-1.159,1.616-1.159,1.616s1.194-0.141,1.546-1.089C35.508,27.46,35.157,27.531,34.771,27.882z M10.398,28.83 c0.667,0.597,1.861,1.089,1.861,1.089l0.07-2.247c-0.526,0-1.755,0.316-2.072,0.386C9.941,28.127,9.73,28.233,10.398,28.83z M46,13 v24c0,4.963-4.038,9-9,9H13c-4.962,0-9-4.037-9-9V13c0-4.963,4.038-9,9-9h24C41.962,4,46,8.037,46,13z M13.541,21.934l0.572,0.223 c0.073,0.006,0.143-0.029,0.182-0.091c2.349-3.742,6.583-6.256,11.456-6.256c5.798,0,10.708,3.552,12.578,8.508 c0.029,0.076,0.1,0.127,0.182,0.127h0.596c0.07,0,0.12-0.071,0.097-0.137c-1.904-5.398-7.217-9.294-13.46-9.294 c-5.214,0-9.786,2.724-12.282,6.764C13.421,21.842,13.466,21.927,13.541,21.934z M15.911,23.843c-2.81-1.37-3.793-1.546-5.971-1.405 c-2.177,0.141-2.177,1.229-1.651,1.265c0.311,0.021,0.487,0.044,0.58,0.055c0.078,0.009,0.089-0.011,0.115-0.046 c0.022-0.03,0.032-0.075,0.043-0.102c0.019-0.049-0.003-0.099-0.047-0.118c-0.045-0.02-0.55-0.245-0.55-0.245 s2.74-0.702,6.146,0.948c3.406,1.65,4.285,3.793,3.337,4.847c-0.948,1.054-2.599,1.581-4.636,1.124 c-0.035-1.44,0.035-2.494,0.035-2.494s1.897-0.07,2.389,0.281c0.42,0.3,0.174,0.497-0.103,0.614 c-0.047,0.02-0.052,0.107-0.009,0.132c0.393,0.218,0.706,0.269,0.99-0.078c0.316-0.386,0.667-2.037-3.196-1.932 c-0.07-0.667,0.141-1.124-0.421-1.791C12.4,24.228,12.4,26.722,12.4,26.722s-1.44,0.21-2.634,1.054 c-1.194,0.843,2.458,2.88,2.458,2.88s0.07,0.913,0.597,1.019c0.527,0.105,0.492-0.667,0.492-0.667s3.16,0.913,5.269-0.948 C20.688,28.197,18.721,25.212,15.911,23.843z M19.74,25.844c0.562,0.247,1.65,0.071,2.353-0.632c0.702-0.702,1.019-2.002-0.21-1.932 c0,0-0.457-0.597-1.44-0.316c-0.983,0.281-2.212,1.581-1.334,2.423C19.108,25.773,19.214,26.511,19.74,25.844z M20.723,30.305 c0-0.527-0.035-2.634-0.106-3.056c-0.07-0.421-0.456-0.773-0.667-0.351c0,0-0.176,2.037-0.106,3.301 C19.88,30.727,20.723,30.831,20.723,30.305z M22.654,27.53c0.737-0.07,1.265-0.106,1.897-0.21c0.632-0.105,0.667-0.562,0.175-0.667 c0,0-1.932-0.421-3.231,0.421c-0.632,0.421-0.457,1.194-0.106,1.229c0.351,0.035,2.142,0.106,2.564,0.386 c0.421,0.281,0.527,0.492,0.07,0.773c-0.457,0.281-1.475,0.421-1.897,0.281c-0.421-0.141-0.562-0.878,0.21-0.492 c0.773,0.386,2.177-0.07,1.229-0.386c-0.948-0.316-1.72-0.245-2.212,0.106c-0.492,0.351,0.176,1.089,0.737,1.334 c0.562,0.245,1.616,0.316,2.248-0.07c0.632-0.386,0.948-1.861-0.07-2.107c-1.019-0.245-1.651-0.21-2.107-0.281 C21.706,27.776,21.917,27.601,22.654,27.53z M27.783,26.338c-1.089-1.265-0.528,0.525-0.457,0.841 c0.07,0.316,0.351,1.51,0.351,2.002c-0.351-0.527-0.913-1.581-1.405-2.072c-0.492-0.492-0.632-0.07-0.632-0.07 s-0.492,1.791-0.351,2.95c0.141,1.159,0.737,0.351,0.773,0c0.035-0.351,0.106-1.51,0.106-1.826c0.316,0.702,0.808,1.51,1.194,1.897 c0.386,0.386,0.773,0.141,0.913-0.21S28.872,27.602,27.783,26.338z M31.54,29.917c0.386-0.316-0.071-0.631-0.457-0.595 c-0.386,0.035-1.51,0.21-1.51,0.21l0.245-0.737c0,0,0.737,0.035,1.334-0.035s0.176-0.737-0.035-0.737c-0.21,0-0.983,0-0.983,0 l0.176-0.492c0,0,1.299-0.035,1.72-0.106c0.421-0.07-0.245-0.773-0.737-0.808c-0.492-0.035-1.546,0.106-2.248,0.245 c-0.702,0.141,0.457,0.667,0.457,0.667s-0.106,0.351-0.245,0.597c-0.421,0.07-0.386,0.316-0.245,0.632 c-0.281,0.737-0.421,1.651,0.386,1.932C30.206,30.97,31.154,30.232,31.54,29.917z M35.826,27.882 c0.105-1.476-1.23-1.159-1.757-0.632c-0.527,0.527-1.44,1.897-1.44,1.897c0.106-0.913,0.351-1.159,0.913-2.072 c0.48-0.78-0.281-0.492-0.281-0.492s-1.791,1.51-1.019,3.231c-0.527,1.299-1.37,3.16-0.141,4.144c0.316,0.21,0.21-0.421,0.316-0.773 c0.106-0.351,0.457-2.142,0.808-2.634C34.07,30.481,35.58,30.165,35.826,27.882z M42.004,27.786c0.003-0.063-0.05-0.115-0.115-0.115 h-2.114c-0.044-0.699-0.128-1.445-0.282-2.146c-0.009-0.039-0.041-0.07-0.081-0.073c-0.287,0-0.331,0.002-0.601,0.002 c-0.078,0.002-0.131,0.075-0.111,0.149c0.088,0.323,0.216,1.147,0.258,2.067H36.95c-0.062,0-0.114,0.051-0.117,0.112l-0.053,0.532 c-0.004,0.085,0.069,0.155,0.154,0.146l2.048,0.007c0.012,0.754,0.018,1.207-0.046,2.004c-0.008,0.053,0.033,0.098,0.087,0.101 c0.322,0.02,0.526,0.045,0.647,0.047c0.049,0.001,0.089-0.036,0.093-0.085c0.019-0.256,0.068-1.06,0.044-2.064l2.08,0.007 c0.065,0,0.117-0.053,0.117-0.118V27.786z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
                clip-rule="evenodd"
              >
                {" "}
                <path
                  d="M 0 14 L 0 36 L 5 36 L 5 27 L 8 27 L 8 36 L 13 36 L 13 14 L 8 14 L 8 22 L 5 22 L 5 14 L 0 14 z M 15 14 L 15 36 L 23.375 36 C 26.53051 36 29.131743 33.659451 29.556641 30.621094 C 31.47606 33.838735 34.98126 36 39 36 C 45.075 36 50 31.075 50 25 C 50 18.925 45.075 14 39 14 C 34.98126 14 31.47606 16.161265 29.556641 19.378906 C 29.131743 16.340549 26.53051 14 23.375 14 L 15 14 z M 20 19 L 23 19 C 24.105 19 25 19.895 25 21 C 25 22.105 24.105 23 23 23 L 20 23 L 20 19 z M 39 19 C 42.314 19 45 21.686 45 25 C 45 28.314 42.314 31 39 31 C 35.686 31 33 28.314 33 25 C 33 21.686 35.686 19 39 19 z M 39 21 A 4 4 0 0 0 35 25 A 4 4 0 0 0 39 29 A 4 4 0 0 0 43 25 A 4 4 0 0 0 39 21 z M 28 23.75 C 27.883 24.257 27.864 25.745 28 26.25 C 27.619 25.672 27.03125 25.25 26.03125 25 C 27.03125 24.75 27.665 24.16 28 23.75 z M 20 27.75 L 23 27.75 C 24.105 27.75 25 28.645 25 29.75 C 25 30.855 24.105 31.75 23 31.75 L 20 31.75 L 20 27.75 z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 4.75 19 C 5.4375 19 6.171875 19 6.855469 19 C 6.847656 23.183594 6.839844 27.371094 6.835938 31.554688 C 6.097656 31.632813 5.289063 31.734375 4.558594 31.816406 C 3.621094 29.195313 3.042969 27.566406 2.101563 24.804688 C 2.101563 27.609375 2.097656 29.335938 2.097656 32.140625 C 1.414063 32.226563 0.683594 32.320313 0 32.417969 C 0 27.945313 0 23.472656 0 19 C 0.769531 19 1.25 19 2.019531 19 C 2.929688 21.9375 3.835938 23.785156 4.738281 26.578125 C 4.742188 23.714844 4.746094 21.863281 4.75 19 Z M 14.730469 21.074219 C 14.730469 20.46875 14.71875 19.601563 14.71875 19 C 12.765625 19 10.839844 19 8.886719 19 C 8.878906 23.125 8.871094 27.253906 8.863281 31.378906 C 10.8125 31.203125 12.765625 31.058594 14.71875 30.945313 C 14.722656 30.339844 14.722656 29.472656 14.722656 28.871094 C 13.453125 28.949219 12.238281 29.027344 10.96875 29.113281 C 10.972656 28.007813 10.972656 27.089844 10.976563 25.980469 C 11.902344 25.964844 12.878906 25.976563 13.824219 25.960938 C 13.824219 25.355469 13.828125 24.484375 13.828125 23.878906 C 12.890625 23.894531 11.902344 23.898438 10.980469 23.914063 C 10.980469 22.804688 10.984375 22.195313 10.988281 21.085938 C 11.566406 21.078125 14.246094 21.078125 14.730469 21.074219 Z M 16.082031 21.070313 C 16.175781 21.070313 18.199219 21.082031 18.269531 21.082031 C 18.265625 24.410156 18.261719 27.445313 18.257813 30.773438 C 18.945313 30.746094 19.679688 30.726563 20.367188 30.710938 C 20.367188 27.402344 20.371094 24.382813 20.375 21.074219 C 21.101563 21.070313 21.851563 21.066406 22.574219 21.066406 C 22.574219 20.476563 22.578125 19.601563 22.578125 19.011719 C 20.4375 19.011719 18.222656 19.011719 16.085938 19.011719 C 16.085938 19.609375 16.082031 20.472656 16.082031 21.070313 Z M 29.800781 19 C 27.847656 19 25.894531 19 23.945313 19 C 23.941406 22.882813 23.941406 26.769531 23.941406 30.652344 C 24.167969 30.652344 24.398438 30.652344 24.628906 30.652344 C 25.09375 30.652344 25.566406 30.652344 26.027344 30.65625 C 26.027344 29.007813 26.027344 27.503906 26.027344 25.855469 C 26.140625 25.855469 28.601563 25.851563 28.878906 25.855469 C 28.878906 25.265625 28.878906 24.386719 28.875 23.796875 C 28.613281 23.792969 26.132813 23.796875 26.027344 23.796875 C 26.027344 22.734375 26.023438 22.136719 26.023438 21.078125 C 26.253906 21.078125 29.230469 21.078125 29.800781 21.082031 C 29.800781 20.488281 29.800781 19.59375 29.800781 19 Z M 33.261719 28.773438 C 33.257813 25.414063 33.277344 22.367188 33.269531 19.007813 C 32.585938 19.007813 31.851563 19.007813 31.164063 19.007813 C 31.171875 22.929688 31.152344 26.851563 31.15625 30.773438 C 33.027344 30.84375 34.996094 30.917969 36.867188 31.050781 C 36.863281 30.445313 36.863281 29.578125 36.863281 28.976563 C 35.679688 28.90625 34.445313 28.820313 33.261719 28.773438 Z M 38.617188 31.175781 C 39.304688 31.230469 40.011719 31.285156 40.699219 31.347656 C 40.699219 27.238281 40.707031 23.121094 40.699219 19.011719 C 40.011719 19.011719 39.277344 19.011719 38.59375 19.011719 C 38.601563 23.066406 38.609375 27.121094 38.617188 31.175781 Z M 47.246094 25.328125 C 48.136719 23.222656 49.042969 21.214844 49.96875 19.011719 C 49.210938 19.011719 48.429688 19.011719 47.667969 19.011719 C 47.097656 20.371094 46.707031 21.246094 46.160156 22.542969 C 45.652344 21.195313 45.3125 20.320313 44.800781 19.011719 C 44.042969 19.011719 43.261719 19.011719 42.503906 19.011719 C 43.34375 21.0625 44.113281 23.117188 44.96875 25.296875 C 44.082031 27.386719 43.175781 29.464844 42.289063 31.472656 C 43.023438 31.542969 43.785156 31.648438 44.519531 31.730469 C 45.046875 30.441406 45.523438 29.445313 46.054688 28.117188 C 46.578125 29.53125 47.058594 30.625 47.585938 32.082031 C 48.316406 32.179688 49.269531 32.316406 50 32.417969 C 49.113281 30.046875 48.140625 27.574219 47.246094 25.328125 Z" />
              </svg>
            </div>
          </div>
          <div className="categories_search">
            <h4>Найти лучший фильм</h4>
            <span>
              Любой жанр
              <img src={upArrow} alt="asdf" />
              <img src={downArrow} alt="asd" />
            </span>
            <span>За все время</span>
            <button>Поехали!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;