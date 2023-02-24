import "../assets/sidebar.css"
import { Link, useNavigate } from "react-router-dom"

export default function Sidebar(){
  const navigate = useNavigate()

  const logoutHandler = (e) => {
    localStorage.clear()
    e.preventDefault()
    navigate('/login')
  }
  return <body>
  <div class="area"></div>
  <nav class="main-menu">
    <ul>
    <li class="has-subnav">

      </li>
      <li class="has-subnav">
        <Link to="/">
          <i className="fa fa-bowl-food fa-2x"></i>
          <span class="nav-text">
            Counting
          </span>
        </Link>

      </li>
      <li class="has-subnav">
        <Link to="/guessing">
          <i class="fa fa-cubes-stacked fa-2x"></i>
          <span class="nav-text">
            Guessing
          </span>
        </Link>

      </li>

      <li class="has-subnav">
        <Link to="/learning">
          <i class="fa fa-cubes-stacked fa-2x"></i>
          <span class="nav-text">
            Learning
          </span>
        </Link>

      </li>
      
    </ul>

    <ul class="logout">
      <li>
        <a href="#" onClick={logoutHandler}>
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
            Logout
          </span>
        </a>
      </li>
    </ul>
  </nav>
</body>
}