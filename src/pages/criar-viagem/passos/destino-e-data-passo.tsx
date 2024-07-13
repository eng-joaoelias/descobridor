import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Botao } from "../../../components/botao";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface DestinoEDataPassoProps {
    isInputConvidadosVisivel: boolean;
    fecharInputConvidados: () => void;
    abrirInputConvidados: () => void;
    setDestino: (destino: string) => void;
    setDatasInicioFimEvento: (datas: DateRange | undefined) => void;
    datasInicioFimEvento: DateRange | undefined;
}

export function DestinoEDataPasso({
    isInputConvidadosVisivel,
    fecharInputConvidados,
    abrirInputConvidados,
    setDestino,
    setDatasInicioFimEvento,
    datasInicioFimEvento,
}: DestinoEDataPassoProps) {

    const [isSeletorDataAberto, setIsSeletorDataAberto] = useState(false);

    function abrirSeletorData() {
        return setIsSeletorDataAberto(true);
    }

    function fecharSeletorData() {
        return setIsSeletorDataAberto(false);
    }

    const dataExibida = datasInicioFimEvento &&
    (datasInicioFimEvento.from && datasInicioFimEvento.to) ?
    format(datasInicioFimEvento.from, "d ' de 'LLL").concat(' até ').concat(
        format(datasInicioFimEvento.to, "d' de 'LLL")
    ) : null;

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                type="text"
                placeholder="Para onde você vai?"
                disabled={isInputConvidadosVisivel}
                className="bg-transparent text-lg placeholder-zinc-400r outline-none flex-1"
                onChange={event => setDestino(event.target.value)}/>
            </div>

            <button onClick={abrirSeletorData} disabled={isInputConvidadosVisivel} className="flex items-center gap-2 outline-none text-left w-60">
                <Calendar className="size-5 text-zinc-400" />
                <span
                    className="text-lg text-zinc-400 w-40 flex-1">
                    {dataExibida || 'Quando?'}
                </span>
            </button>

            {isSeletorDataAberto ? (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

                    <div className="space-y-2">

                        <div className="flex items-center justify-between">

                            <h2 className=" text-lg font-semibold">Selecione a data.</h2>

                            <button type="button" onClick={fecharSeletorData}>
                                <X className="size-5 text-zinc-400" />
                            </button>
                        </div>

                    </div>

                    <DayPicker mode="range" selected={datasInicioFimEvento} onSelect={setDatasInicioFimEvento} />

                </div>
            </div>
            ) : null}

            <div className="w-px h-6 bg-zinc-800">

            </div>

            {isInputConvidadosVisivel ? (

                <Botao variant='secundario' tamanho="padrao" onClick={fecharInputConvidados}>
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Botao>

            ) : (

                <Botao variant='primario' tamanho="padrao" onClick={abrirInputConvidados}>
                    Continuar
                    <ArrowRight className="size-5 text-lime-950" />
                </Botao>

            )}

        </div>
    )
}