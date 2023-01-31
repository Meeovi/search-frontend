<template>
    <div>
        <v-tabs fixed-tabs>
            <v-tab value="one" prepend-icon="fas fa-search">All</v-tab>
            <v-tab value="two" prepend-icon="fas fa-newspaper">News</v-tab>
            <v-tab value="three" prepend-icon="fas fa-images">Images</v-tab>
            <v-tab value="four" prepend-icon="fas fa-location-dot">Maps</v-tab>
            <v-tab value="five" prepend-icon="fas fa-video">Videos</v-tab>

            <v-menu v-if="more.length">
                <template v-slot:activator="{ props }">
                    <v-btn variant="plain" rounded="0" class="align-self-center me-4" height="100%" v-bind="props">
                        more
                        <v-icon end>
                            mdi-menu-down
                        </v-icon>
                    </v-btn>
                </template>

                <v-list class="bg-grey-lighten-3">
                    <v-list-item title="Shopping" value="shopping"><shopping /></v-list-item>
                    <v-list-item title="Books" value="books"><books /></v-list-item>
                    <v-list-item title="Finance" value="finance"><finance /></v-list-item>
                </v-list>
            </v-menu>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <search />
                </v-window-item>

                <v-window-item value="two">
                    <news />
                </v-window-item>

                <v-window-item value="three">
                    <images />
                </v-window-item>

                <v-window-item value="four">
                    <maps />
                </v-window-item>

                <v-window-item value="five">
                    <videos />
                </v-window-item>
            </v-window>
        </v-card-text>
    </div>
</template>

<script>
import search from '../components/Search/search.vue'
import news from '../components/Search/news.vue'
import images from '../components/Search/images.vue'
import maps from '../components/Search/maps.vue'
import videos from '../components/Search/videos.vue'
import shopping from '../components/Search/shopping.vue'
import books from '../components/Search/books.vue'
import finance from '../components/Search/finance.vue'

    export default {
        components: { search, news, images, maps, videos, shopping, books, finance },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Search',
    })
</script>