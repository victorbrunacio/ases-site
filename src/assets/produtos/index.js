import {autobBrilho,ceraBrilho,ceraPrix} from "./automotivos"

import {fitaAntiderrapante,fitaAntiderrapanteNeon,fitaDemarca,fitaEmbalagm} from "./colasAdesivos"

import {belaDucha,caboFlexivel,caboParalelo,caboRigido,cabop,disjuntores,duchaAdvanced,fisolido,fisolido2,fita33,fitaColorida,fitaImperial,lampada3u,lampadaEspiral,lampadaLed,lampadaTubular,maxiDucha} from "./eletrica"

import {arcoSerra,broca,fechadura2Voltas,fechaduraSobrepor
,hasteLonga,m1,segredo,serra,standard,trena,wd,whiteLub} from "./ferragensFerramentas"

import {altaTemperatura,alumen,antiDerraPanteneon,antiderrapante,decor,demarcacao,embalagem,esmalteSintetico,ferro,lugbin,luminosa,massamont,metalik1125,metalik2350,pintura211q,pintura283c,roloAntiRespngo,roloEspuma,roloLa,trincha500,trincha571,usoGeral, lixa211q,lixa283c} from "./pintura"


//Eletrica 1,2,3,4,5
//Pintura 6,5,8,9
//Colas e Adesivos 10
// Ferragens e Ferramentas 11,12,13,14
//AutoMotivos 15

export const listaProdutos = [
    //chuviros e resis
    {
        type: 1,
        name: "Bella Ducha",
        img: belaDucha,
        group: "Elétrica"
    },
    {
        type: 1,
        name: "Ducha Advanced",
        img: duchaAdvanced,
        group: "Elétrica"
    },
    {
        type: 1,
        name: "Maxi Ducha",
        img: maxiDucha,
        group: "Elétrica"
    },
    //disjuntores
    {
        type: 2,
        name: "Disjuntores",
        img: disjuntores,
        group: "Elétrica"
    },
    //fios e cabos
    {
        type: 3,
        name: "Cabo Flexível",
        img: caboFlexivel,
        group: "Elétrica"
    },
    {
        type: 3,
        name: "Cabo Paralelo",
        img: caboParalelo,
        group: "Elétrica"
    },
    {
        type: 3,
        name: "Cabo PP",
        img: cabop,
        group: "Elétrica"
    },
    {
        type: 3,
        name: "Cabo Rígido",
        img: caboRigido,
        group: "Elétrica"
    },
    {
        type: 3,
        name: "Fio Solido",
        img: fisolido,
        group: "Elétrica"
    },
    {
        type: 3,
        name: "Fio Sólido tipo 2",
        img: fisolido2,
        group: "Elétrica"
    },
    //fitas isolantes
    {
        type: 4,
        name: "Fita 33+",
        img: fita33,
        group: "Elétrica"
    },
    {
        type: 4,
        name: "Fita Colorida",
        img: fitaColorida,
        group: "Elétrica"
    },
    {
        type: 4,
        name: "Fita Imperial",
        img: fitaImperial,
        group: "Elétrica"
    },
    //lampadas
    {
        type: 5,
        name: "Lampada 3u",
        img: lampada3u,
        group: "Elétrica"
    },
    {
        type: 5,
        name: "Lampada Espiral",
        img: lampadaEspiral,
        group: "Elétrica"
    },
    {
        type: 5,
        name: "Lampada Led",
        img: lampadaLed,
        group: "Elétrica"
    },
    {
        type: 5,
        name: "Lampada Tubular",
        img: lampadaTubular,
        group: "Elétrica"
    },
    //fita adesiva
    {
        type: 6,
        name: "Antiderrapante Neon",
        img: antiDerraPanteneon,
        group: "Colas e Adesivos"
    },
    {
        type: 6,
        name: "Antiderrapante",
        img: antiderrapante,
        group: "Colas e Adesivos"
    },
    {
        type: 6,
        name: "Demarcação",
        img: demarcacao,
        group: "Colas e Adesivos"
    },
    {
        type: 6,
        name: "Embalagem",
        img: embalagem,
        group: "Colas e Adesivos"
    },
    //Lixas
    {
        type: 7,
        name: "Lixa 211Q",
        img: lixa211q,
        group: 2
    },
    {
        type: 7,
        name: "Lixa 283C",
        img: lixa283c,
        group: 2
    },
    {
        type: 7,
        name: "Lixa Ferro",
        img: ferro,
        group: 2
    },
    {
        type: 7,
        name: "Lixa Massa Mont",
        img: massamont,
        group: 2
    },
    //Rolo e trincas
    {
        type: 8,
        name: "Rolo Anti Respingo",
        img: roloAntiRespngo,
        group: 2
    },
    {
        type: 8,
        name: "Rolo de Espuma",
        img: roloEspuma,
        group: 2
    },
    {
        type: 8,
        name: "Rolo de Lâ",
        img: roloLa,
        group: 2
    },
    {
        type: 8,
        name: "Trincha 500",
        img: trincha500,
        group: 2
    },
    {
        type: 8,
        name: "Trincha 571",
        img: trincha571,
        group: 2
    },
    //tinta e spay
    {
        type: 9,
        name: "Alta Temperatura",
        img: altaTemperatura,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 9,
        name: "Alúmen",
        img: alumen,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 9,
        name: "Decor",
        img: decor,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 9,
        name: "Esmalte Sintéetico",
        img: esmalteSintetico,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 9,
        name: "Lugbin",
        img: lugbin,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 9,
        name: "Luminosa",
        img: luminosa,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 9,
        name: "Metallik 1125ML",
        img: metalik1125,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 9,
        name: "Metallik 350ML",
        img: metalik2350,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 9,
        name: "Uso Geral",
        img: usoGeral,
        group: "Ferragens e Ferramentas"
    },
    //´fita
    {
        type: 10,
        name: "Antiderrapante Neon",
        img: antiDerraPanteneon,
        group: 3
    },
    {
        type: 10,
        name: "Antiderrapante",
        img: antiderrapante,
        group: 3
    },
    {
        type: 10,
        name: "Demarcação",
        img: demarcacao,
        group: 3
    },
    {
        type: 10,
        name: "Embalagem",
        img: embalagem,
        group: 3
    },
   
    // cadeados
    {
        type: 11,
        name: "Haste Longa",
        img: hasteLonga,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 11,
        name: "Segredo",
        img: segredo,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 11,
        name: "Standard",
        img: standard,
        group: "Ferragens e Ferramentas"
    },
    //DESENGRIPANTES
    {
        type: 12,
        name: "M1",
        img: m1,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 12,
        name: "WD-40",
        img: wd,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 12,
        name: "White Lub",
        img: whiteLub,
        group: "Ferragens e Ferramentas"
    },
    //FECHADURAS
    {
        type: 13,
        name: "Fechadura 2 voltas",
        img: fechadura2Voltas,
        group: 4
    },
    {
        type: 13,
        name: "Fechadura sobrepor",
        img: fechaduraSobrepor,
        group: 4
    },
    //SERRAS E ARCOS DE SERRA
    {
        type: 14,
        name: "Fechadura sobrepor",
        img: fechaduraSobrepor,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 14,
        name: "Arco de serra",
        img: arcoSerra,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 14,
        name: "Fechadura sobrepor",
        img: fechaduraSobrepor,
        group: "Ferragens e Ferramentas"
    },
    {
        type: 14,
        name: "Fechadura sobrepor",
        img: fechaduraSobrepor,
        group: "Ferragens e Ferramentas"
    },
    //Ceras e Polidores
    {
        type: 15,
        name: "Auto Brilho",
        img: autobBrilho,
        group: 5
    },
    {
        type: 15,
        name: "Cera Brilho",
        img: ceraBrilho,
        group: 5
    },
    {
        type: 15,
        name: "Cera Grand Prix",
        img: ceraPrix,
        group: 5
    },
]

