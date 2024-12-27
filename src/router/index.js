import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ServicesView from "@/views/ServicesView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/contact-us", name: "contactUs", component: ContactView },
  { path: "/services", name: "services", component: ServicesView },
  { path: "/portfolio", name: "portfolio", component: PortfolioView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router