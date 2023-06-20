import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard';
import Sekolah from '../views/Sekolah';
import Jurusan from '../views/Jurusan';
import Ruang from '../views/Ruang';
import Staf from '../views/Staf';
import Siswa from '../views/Siswa';
import Rombel from '../views/Rombel';

const routes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'Sekolah',
        path: '/sekolah',
        component: Sekolah
    },
    {
        name: 'Jurusan',
        path: '/jurusan',
        component: Jurusan
    },
    {
        name: 'Ruang',
        path: '/ruang',
        component: Ruang
    },
    {
        name: 'Staf',
        path: '/staf',
        component: Staf
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;