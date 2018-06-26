<template>
    <div class="homepage grid p-40px">
        <div class="title font-weight-bold text-left">
            F2E Challenge
        </div>
        <router-link to="/ToDoList">
            <div class="task-img mx-auto cursor-pointer">
                <img src="../../src/assets/todolist.png"/>
                <div class="task-name">TODOLIST</div>
            </div>
        </router-link>
        <router-link to="/SearchFilter">
            <div class="task-img mx-auto cursor-pointer">
                <img src="../../src/assets/filter.png"/>
                <div class="task-name">FILTER</div>
            </div>
        </router-link>
        <router-link to="/AdminOrder">
            <div class="task-img mx-auto cursor-pointer">
                <img src="../../src/assets/adminorder.png"/>
                <div class="task-name">ADMINORDER</div>
            </div>
        </router-link>
        <router-link to="/ProductGallery cursor-pointer">
            <div class="task-img mx-auto">
                <img src="../../src/assets/productgallery.png"/>
                <div class="task-name">PRODUCTGALLERY</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .homepage {
        .title {
        font-size: 36px;
        text-transform: uppercase;
        }

        a {
            color: rgba(0,0,0,0.50);
            font-weight: 700;
            font-size: 14px;
            font-style: italic;

            &:hover {
                color: rgba(0,0,0,0.50);
                text-decoration: none;
                text-shadow: 0px -5px 3px rgba(0,0,0,0.20), 0px -10px 3px rgba(0,0,0,0.10);
            }

            .task-img {
                position: relative;
                width: 80%;
                
                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 100% 0 0 0;
                }

                img {
                    position: absolute;
                    object-fit: cover;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    filter:grayscale(100%);
                    transition: transform 0.3s ease-in-out, opacity 0.35s;

                    &:hover {
                        transform: scale(1.05);
                        filter:grayscale(0%);
                    }
                }

                .task-name {
                    position: absolute;
                    bottom: 0;
                }
            }
        }
    }
</style>
