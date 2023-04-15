import React, { useState, useEffect } from "react"
import "./style.css"

export default function Movie() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch("https://yts.mx/api/v2/list_movies.json") // Ref: 평점 색깔 테스트 용
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  console.log(movies)

  const render = movies.map((item) => {
    const ratingStatus =
      item.rating >= 9 ? "good" : item.rating >= 7 ? "normal" : "bad"

    return (
      <div key={item.id}>
        <div>
          {item.title} [{item.year}]
        </div>
        <div>
          평점: <span className={ratingStatus}>{item.rating}</span> / 10점
        </div>
        <img src={item.medium_cover_image} alt={item.title}></img>
      </div>
    )
  })

  return (
    <div>
      <h1>영화 앱</h1>
      <div>{render}</div>
    </div>
  )
}
