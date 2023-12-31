import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard';
import Sekolah from '../views/Sekolah';
import Jurusan from '../views/Jurusan';
import Ruang from '../views/Ruang';
import Staff from '../views/Staff';
import Siswa from '../views/Siswa';
import Rombel from '../views/Rombel';
import AdminSMK from '../views/AdminSMK';
import Register from '../components/Register';
import Login from '../components/Login';
import JurusanSMK from '../views/jurusanSMK';
import SiswaSMK from '../views/siswaSMK';
import RuangSMK from '../views/ruangSMK';
import StaffSMK from '../views/staffSMK';
import RombelSMK from '../views/rombelSMK';
import profil from "../views/profil";

import TambahJurusan from '../views/TambahJurusan.vue';
import TambahRombel from '../views/TambahRombel.vue';
import TambahRuang from '../views/TambahRuang.vue';
import TambahSekolah from '../views/TambahSP.vue';
import TambahStaff from '../views/TambahStaff.vue';

//edit
import SekolahEdit from '../views/SekolahEdit.vue';
import JurusanEditSMK from '../views/JurusanEditSMK.vue';
import StaffEditSMK from '../views/StaffEditSMK.vue';
import SiswaEditSMK from '../views/SiswaEditSMK.vue';
import RombelEditSMK from '../views/RombelEditSMK.vue';
import RuangEditSMK from '../views/RuangEditSMK.vue';
import TambahSiswa from '../views/TambahSiswa.vue'

const routes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'Login',
        path: '/',
        component: Login
    },
    {
        name: 'Register',
        path: '/register',
        component: Register
    },
    {
      name: 'Profil',
      path: '/profil',
      component: profil
    },
    {
        name: 'AdminSMK',
        path: '/adminSMK',
        component: AdminSMK
    },
    {
        name: 'Sekolah',
        path: '/sekolah',
        component: Sekolah
    },
    {
      name: 'sekolah.edit',
      path: '/edit/:NPSN',
      component: SekolahEdit,
    },
    {
        name: 'Jurusan',
        path: '/jurusan',
        component: Jurusan
    },
    {
      name: 'staff.edit',
      path: '/staffSMK/edit/:ID_staff',
      component: StaffEditSMK,
    },
    {
      name: 'jurusan.edit',
      path: '/jurusanSMK/edit/:Kode_jurusan',
      component: JurusanEditSMK,
    },
    {
      name: 'siswa.edit',
      path: '/siswaSMK/edit/:ID',
      component: SiswaEditSMK,
    },
    {
      name: 'rombel.edit',
      path: '/rombelSMK/edit/:Kode_rombel',
      component: RombelEditSMK,
    },
    {
      name: 'ruang.edit',
      path: '/ruangSMK/edit/:Kode_ruang',
      component: RuangEditSMK,
    },
    {
        name: 'Ruang',
        path: '/ruang',
        component: Ruang
    },
    {
        name: 'Staff',
        path: '/staff',
        component: Staff
    },
    {
        name: 'Siswa',
        path: '/siswa',
        component: Siswa
    },
    {
        name: 'Rombel',
        path: '/rombel',
        component: Rombel
    },
  {
    name: 'jurusanSMK',
    path: '/jurusanSMK',
    component: JurusanSMK,
  },
  {
    name: 'siswaSMK',
    path: '/siswaSMK',
    component: SiswaSMK,
  },
  {
    name: 'ruangSMK',
    path: '/ruangSMK',
    component: RuangSMK,
  },
  {
    name: 'staffSMK',
    path: '/staffSMK',
    component: StaffSMK,
  },
  {
    name: 'rombelSMK',
    path: '/rombelSMK',
    component: RombelSMK,
  },
  {
    name: 'TambahJurusan',
    path: '/tambahjurusan',
    component: TambahJurusan
},
{
  name: 'TambahRombel',
  path: '/tambahrombel',
  component: TambahRombel
},
{
  name: 'TambahRuang',
  path: '/tambahruang',
  component: TambahRuang
},
{
  name: 'TambahSekolah',
  path: '/tambahsekolah',
  component: TambahSekolah
},
{
  name: 'TambahSiswa',
  path: '/tambahsiswa',
  component: TambahSiswa
},
{
  name: 'TambahStaff',
  path: '/tambahstaff',
  component: TambahStaff
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;