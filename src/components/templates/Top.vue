<template>
    <div class="top">
        <div class="topinfo">
            <div>
            <i class="fa fa-phone"></i>
            (45)9-9953-5458
            </div>
            <div>
            <i class="fa fa-envelope"></i>
            wrc.rodrigues82@hotmail.com
            </div>
            <div>
            <i class="fa fa-clock-o"></i>
            Seg-Sex: 08:00-12:00 e 13:15-18:00
            </div>
            <div>
            <i class="fa fa-map-marker"></i>
            Rua Manoel Ribas, 3615 - Cancelli - Cascavel - PR
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Top'
}
</script>

<style>
    .top {
      grid-area: top;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #202B57;
      color: #fff;
    }

    .topinfo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .topinfo div {
        padding-right: 10px;
    }

    @media (max-width: 640px) {
        .top {
            display: none;
        }
    }
</style>