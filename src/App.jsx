import { Route, Routes } from 'react-router-dom'
import { ShopLayout } from './components/layout/ShopLayout'
import './App.css'
import { Home } from './pages/Home/Home'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Profile } from './pages/Profile/Profile'
import { NotFound } from './pages/NotFound/NotFound'
import { DeObras } from './pages/Gestion/deObras'
import { DeConvenios } from './pages/Gestion/deConvenios'
import { DeContrataciones } from './pages/Gestion/deContrataciones'
import { DeProyectos } from './pages/Gestion/deProyectos'
function App() {
  return (
    <ShopLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/gestor-de-obras" element={<DeObras />} />
        </Route>
        <Route path="/gestor-de-convenios" element={<DeConvenios />} />
        <Route
          path="/gestor-de-contrataciones"
          element={<DeContrataciones />}
        />
        <Route path="/gestor-de-proyectos" element={<DeProyectos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ShopLayout>
  )
}

export default App
