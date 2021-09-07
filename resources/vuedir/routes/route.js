
import DashboardLayout from '../layout/DashboardLayout.vue'
import CompanyLayout from '../layout/CompanyLayout.vue'
import CompanyUserLayout from '../layout/CompanyUserLayout.vue'

import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
    {
        path: '/admin.dashboard',
            component:DashboardLayout,
    },
    {
        path: '/company.dashboard',
            component:CompanyLayout
    },
    {
        path: '/company.userdashboard',
            component:CompanyUserLayout
    },
    { path: '*', component: NotFoundPage }
]

export default routes
