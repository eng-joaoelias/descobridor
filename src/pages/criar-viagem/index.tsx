import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConvidarModal } from "./convidar-modal";
import { ConfirmaViagemModal } from "./confirm-viagem-modal";
import { DestinoEDataPasso } from "./passos/destino-e-data-passo";
import { ConvidarPasso } from "./passos/convidar-passo";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function CriarViagemPagina() {

    const navigate = useNavigate();

    const [isInputConvidadosVisivel, setIsInputConvidadosVisivel] = useState(false);
    const [isModalConvidadosVisivel, setIsModalConvidadosVisivel] = useState(false);
    const [emailsParaConvidar, setEmailsParaConvidar] = useState<string[]>([]); //O tipo string[] garante que emailsParaConvidar é um array que só pode conter strings. Isso deve resolver muitos dos problemas relacionados a tipos que envolvem arrays de strings.
    const [isModalConfirmaViagemAberto, setIsModalConfirmaViagemAberto] = useState(false);

    const [destino, setDestino] = useState('');
    const [nomeCriador, setNomeCriador] = useState('');
    const [emailCriador, setEmailCriador] = useState('');
    const [datasInicioFimEvento, setDatasInicioFimEvento] = useState<DateRange | undefined>();

    function abrirInputConvidados() {
        setIsInputConvidadosVisivel(true);
    }

    function fecharInputConvidados() {
        setIsInputConvidadosVisivel(false);
    }

    function abrirModalConvidados() {
        setIsModalConvidadosVisivel(true);
    }

    function fecharModalConvidados() {
        setIsModalConvidadosVisivel(false);
    }

    function abrirModalConfirmaViagem() {
        setIsModalConfirmaViagemAberto(true);
    }

    function fecharModalConfirmaViagem() {
        setIsModalConfirmaViagemAberto(false);
    }

    function addEmailNaLista(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const dados = new FormData(event.currentTarget);

        const email = dados.get('email')?.toString();

        if (!email) {
            return;
        }

        if (emailsParaConvidar.includes(email)) { //email ja convidado
            return;
        }

        setEmailsParaConvidar([
            ...emailsParaConvidar,
            email
        ]);

        event.currentTarget.reset();
    }

    function removeEmailDaLista(emailParaRemover: string) {
        const novaListaEmail = emailsParaConvidar.filter(convidado => convidado !== emailParaRemover);
        setEmailsParaConvidar(novaListaEmail);
    }

    async function criarViagem(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
        console.log(destino);
        console.log(datasInicioFimEvento);
        console.log(emailsParaConvidar);
        console.log(nomeCriador);
        console.log(emailCriador);

        if (!destino) {
            return;
        }

        if (!datasInicioFimEvento?.from || !datasInicioFimEvento?.to) {
            return;
        }

        if (emailsParaConvidar.length === 0 ) {
            return;
        }

        if (!nomeCriador || !emailCriador) {
            return;
        }

        const resposta = await api.post('/trips', {
            destination: destino,
            starts_at: datasInicioFimEvento.from,
            ends_at: datasInicioFimEvento.to,
            emails_to_invite: emailsParaConvidar,
            owner_name: nomeCriador,
            owner_email: emailCriador
        });

        const {tripId} = resposta.data

        navigate(`/trips/${tripId}`);

    }


    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className="flex flex-col items-center gap-3">
                    <img src="./public/logo.svg" alt="Logo do aplicativo" />
                    <p className="text-zinc-300 text-lg">Planeje, explore e viva experiências inesquecíveis.</p>
                </div>

                <div className="space-y-4">

                    <DestinoEDataPasso
                        isInputConvidadosVisivel={isInputConvidadosVisivel}
                        fecharInputConvidados={fecharInputConvidados}
                        abrirInputConvidados={abrirInputConvidados}
                        setDestino={setDestino}
                        datasInicioFimEvento={datasInicioFimEvento}
                        setDatasInicioFimEvento={setDatasInicioFimEvento}
                    />

                    {isInputConvidadosVisivel ? (
                        <ConvidarPasso
                            abrirModalConvidados={abrirModalConvidados}
                            emailsParaConvidar={emailsParaConvidar}
                            abrirModalConfirmaViagem={abrirModalConfirmaViagem}
                        />
                    ) : null}

                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pelo Descobridor, você automaticamente concorda <br /> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
                </p>
            </div>

            {isModalConvidadosVisivel ? (

                <ConvidarModal
                    emailsParaConvidar={emailsParaConvidar}
                    addEmailNaLista={addEmailNaLista}
                    fecharModalConvidados={fecharModalConvidados}
                    removeEmailDaLista={removeEmailDaLista}
                />

            ) : null}

            {isModalConfirmaViagemAberto ? (
                <ConfirmaViagemModal
                    fecharModalConfirmaViagem={fecharModalConfirmaViagem}
                    criarViagem={criarViagem}
                    setNomeCriador={setNomeCriador}
                    setEmailCriador={setEmailCriador}
                />
            ) : null}



        </div>
    )

}
