<template>
    <div class="contato">
        <div>
            <div class="infos">
                <i class="fa fa-phone"></i> (45)9-9953-5458
            </div>
            <div class="infos">
                wrc.rodrigues82@hotmail.com
            </div>
            <div class="infos">
                <a class="btn btn-success" target="_blank" href="http://api.whatsapp.com/send?1=pt_BR&phone=5545999535458">
             <i class="fa fa-whatsapp fa-2x"></i></a>
             <a class="btn btn-primary" target="_blank" href="">
                <i class="face fa fa-facebook fa-2x"></i>
             </a>
            </div>
            <div class="atend">
                <strong>ATENDIMENTO</strong>
                <hr>
                <span>Segunda à sexta</span>
                <span>Das 08:00h às 12:00h</span>
                <span>Das 13:15h às 18:00h</span>
            </div>
        </div>
        <div>
            <h2><strong>LOCALIZAÇÃO</strong></h2>
            <hr>
            <div class="infos">
                Rua Manoel Ribas, 3615 - Cancelli - Cascavel - PR
            </div>
            <a class="btn btn-primary mb-4 mt-4" target="_blank" href="https://www.google.com.br/maps/place/R.+Manoel+Ribas,+3615+-+Vila+Tolentino,+Cascavel+-+PR,+85802-180/@-24.9467554,-53.4700046,19.25z/data=!4m5!3m4!1s0x94f3d3f89dbe2991:0xb78faa8a9b122d3c!8m2!3d-24.9463866!4d-53.4698407">
            Localização no Maps</a>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4302.045771163222!2d-53.46974754976311!3d-24.94654875688216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d3f89dbe2991%3A0xb78faa8a9b122d3c!2sR.%20Manoel%20Ribas%2C%203615%20-%20Vila%20Tolentino%2C%20Cascavel%20-%20PR%2C%2085802-180!5e0!3m2!1spt-BR!2sbr!4v1591666075967!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</template>

<script>
export default {
    name: 'Contato'
}
</script>

<style>
    .contato {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #eee;
        font-size: 1.2rem;
    }

    .contato div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ddd;
    }

    .contato .infos {
        flex-direction: row;
        padding: 10px 0px;
    }

    .contato .infos a {
        margin: 0px 10px;
    }

    .face {
        padding: 0px 5px;
    }

    hr {
        width: 100%;
    }

    .contato > div {
        padding: 20px;
        margin: 10px;
        width: 50vw;
    }

    @media (max-width: 640px) {
        .contato > div {
            width: 100%;
        }

        .contato > h2 {
            font-size: 1.4rem;
            text-align: center;
        }
    }
</style>