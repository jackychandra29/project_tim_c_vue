<template>
  <Header></Header>
  <Sidebar></Sidebar>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1 style="text-align: left;">Data Sebaran Ruang</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
          <li class="breadcrumb-item"><a href="/ruang">Ruang</a></li>

        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <!-- Table with stripped rows -->
              <div class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                <div class="datatable-top">
                  <div class="datatable-dropdown">
                    <label>
                      <select class="datatable-selector" v-model="selectedOption">
                        <option value="5">5</option>
                        <option value="10" selected="">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                      </select>
                      entries per page
                    </label>
                  </div>

                </div>
                <!-- <div class="datatable-search">
                  </div> -->
                <div class="datatable-container">
                  <table class="table datatable datatable-table">
                    <thead>
                      <tr>
                        <th data-sortable="true">
                          <a href="#" class="datatable-sorter" style="text-align: left;">Kode Ruang</a>
                        </th>
                        <th data-sortable="true">
                          <a href="#" class="datatable-sorter" style="text-align: left;">Nama Ruang</a>
                        </th>
                        <th data-sortable="true">
                          <a href="#" class="datatable-sorter" style="text-align: left;">Panjang</a>
                        </th>
                        <th data-sortable="true">
                          <a href="#" class="datatable-sorter" style="text-align: left;">Lebar</a>
                        </th>
                        <th data-sortable="true">
                          <a href="#" class="datatable-sorter" style="text-align: left;">Lantai</a>
                        </th>
                        <th data-sortable="true">
                          <a href="#" class="datatable-sorter" style="text-align: left;">Kode Bangunan</a>
                        </th>
                        <th data-sortable="true">
                          <a href="#" class="datatable-sorter" style="text-align: left;">Kode Jenis Ruang</a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(ruang, Kode_ruang) in paginated" :key="Kode_ruang">
                        <td style="text-align: left;">{{ ruang.Kode_ruang }}</td>
                        <td style="text-align: left;">{{ ruang.Nama_ruang }}</td>
                        <td style="text-align: left;">{{ ruang.Panjang }}</td>
                        <td style="text-align: left;">{{ ruang.Lebar }}</td>
                        <td style="text-align: left;">{{ ruang.Lantai }}</td>
                        <td style="text-align: left;">{{ ruang.Kode_bangunan }}</td>
                        <td style="text-align: left;">{{ ruang.Kode_jenis_ruang }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="datatable-bottom">
                  <div class="datatable-info"></div>
                  <nav class="datatable-pagination">
                    <ul class="datatable-pagination-list">
                      <li v-for="page in displayedPages" :key="page" :class="{ active: currentPage === page }">
                        <a @click="goToPage(page)">{{ page }}</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <!-- End Table with stripped rows -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer></Footer>
</template>

<script>
import axios from "axios";
import { onMounted, ref, computed } from "vue";

import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
  setup() {
    //reactive state
    let ruangs = ref([]);
    const selectedOption = ref('20');

    const currentPage = ref(1);
    const visiblePages = ref(5);

    const displayedPages = computed(() => {
      const startPage = Math.max(1, currentPage.value - Math.floor(visiblePages.value / 2));
      const endPage = Math.min(startPage + visiblePages.value - 1, totalPages.value);
      const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

      if (pages.length < visiblePages.value) {
        const diff = visiblePages.value - pages.length;
        const newStartPage = Math.max(1, startPage - diff);
        return Array.from({ length: visiblePages.value }, (_, index) => newStartPage + index);
      }

      return pages;
    });

    const totalPages = computed(() => {
      const limit = parseInt(selectedOption.value);
      return Math.ceil(ruangs.value.length / limit);
    });

    const goToPage = (page) => {
      currentPage.value = page;
    };

    const paginated = computed(() => {
      const limit = parseInt(selectedOption.value);
      const startIndex = (currentPage.value - 1) * limit;
      const endIndex = startIndex + limit;
      return ruangs.value.slice(startIndex, endIndex);
    });

    // const filteredRuangs = computed(() => {
    //   const limit = parseInt(selectedOption.value);
    //   return ruangs.value.slice(0, limit);
    // });

    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get("http://localhost:8000/api/ruang")
        .then((response) => {
          //asign state ruangs with response data
          ruangs.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    //method delete
    function ruangDelete(id) {
      //delete data ruang by ID
      axios
        .delete(`http://localhost:8000/api/ruang/${id}`)
        .then(() => {
          //splice ruangs
          ruangs.value.splice(ruangs.value.indexOf(id), 1);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    //return
    return {
      ruangs,
      ruangDelete,
      selectedOption,
      paginated,
      totalPages,
      goToPage,
      displayedPages,
      visiblePages,
      currentPage
    };
  },
};
</script>