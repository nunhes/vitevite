---
title: Unha guía completa para principiantes de Git
description: Aquí atoparas unha guía de iniciación ao sistema de control de versión Git, e o servizo de aloxamento Github.
lastUpdated: true
---

# {{ $frontmatter.title }}

Imos revisar unha interesante ferramenta:

- que é compatible con todos os sistemas operativos que se  empregan nestes días,

- que permite a usuarios de todo o mundo realizar operacións nun proxecto de xeito remoto,

- é lixeira, segura e fiable (a lista continúa) pero, semella que resulta algo difícil de comprender. Falamos de **Git**


![imaxe](./assets/ibup0b2uyveisalcmczs.png)

## Que é iso de Git?

Git é un sistema de control de versións distribuído (VCS) de código aberto e gratuíto.

E, un sistema de control de versións é un sistema que se ocupa de rastrexar os cambios ao longo do tempo nos nosos arquivos de proxecto. Permítenos ir gravando os cambios do proxecto e volver a calquera versión específica dos arquivos rastrexados, en calquera momento. Asemade permite o traballo colaborativo deixando que moitas persoas poidan traballar de forma eficiente xuntos e colaborar en proxectos en equipo, onde cada desenvolvedor pode ter a súa propia versión do proxecto, distribuída no seu ordenador. Máis tarde, estas versións individuais do proxecto pódense combinar e adaptar á versión principal do proxecto.

Basicamente, é unha ferramenta moi popular para coordinar o traballo paralelo e xestionar proxectos entre individuos e equipos. Nin que dicir ten que saber usar **Git é unha das habilidades máis importantes para calquera desenvolvedor hoxe en día e definitivamente é un bo complemento para o teu currículo.**

## Como configuro Git?

Accede á [ligazón de descarga](https://git-scm.com/), selecciona o instalador para o teu sistema operativo específico. Unha ver rematada a descarga executa o instalador e sigue o asistente de instalación para configurar as cousas no teu ordenador.

Feito!, xa tes Git instalado.
Agora é hora de tratar co teu terminal. Escribe o seguinte comando para verificar que Git estea listo para usarse no teu ordenador:

![carbono](./assets/dqinyayi5y3e16xko8w4.jpeg)

Se todo saíu ben durante o proceso de instalación, a consola debería devolver a versión de Git instalada na túa computadora.

**Nota:** 

- Se es usuario de Mac ou Linux, podes utilizar o terminal Bash predeterminado que vén preinstalado na túa máquina.
- Se usas Windows, podes usar o teu terminal Powershell integrado ou o terminal Git Bash incluído coa instalación de Git. Ou calquera outro terminal incluído no PATH do SO.

## Seguinte paso: configurar Git co teu nome e correo electrónico

Na túa terminal, executa os seguintes comandos para identificarte con Git, substitúe os valores dentro das comiñas co nome de usuario e enderezo de correo electrónico desexados.

![carbono (1)](./assets/zf0szl0t3xlkwa1krte9.png)

Ao traballar con Git, é importante estar familiarizado co termo **repositorio**. Un repositorio Git é un contedor para un proxecto que é seguido por Git.

Podemos distinguir dous tipos principais de repositorios Git:

- **Repositorio local**: un repositorio illado almacenado no teu propio computador, onde podes traballar na versión local do teu proxecto.

- **Repositorio remoto**: normalmente almacénase fóra do teu sistema local illado, normalmente nun servidor remoto. É especialmente útil cando se traballa en equipo: este é o lugar onde podes compartir o código do teu proxecto, ver o código doutras persoas e integralo na túa versión local do proxecto e tamén empuxar os teus cambios ao repositorio remoto.

  De momento imos cubrir só os repositorios locais.

## Iniciar un repositorio

Agora que sabemos dos repositorios, creemos un. Para crear un novo repositorio e comezar a rastrexar o teu proxecto con Git, usa a túa terminal e navega ata o cartafol principal do teu proxecto e logo escribe o seguinte comando:

![1](./assets/1739213262458-7.png)

Este comando xerará un directorio .git oculto para o seu proxecto creado por Git, onde se gardan todos os datos de seguimento internos do repositorio actual.

## Comprobación do estado

Agora que inicializamos o noso repositorio, falemos do estado de git. Mentres estamos dentro da carpeta do proxecto na nosa    terminal, podemos escribir o seguinte comando para comprobar o estado do noso repositorio:

![g2](./assets/rp740sawordwifboabyh.png)

Así comproba o estado actual do teu repositorio. Este é un comando que se usa a miúdo cando se traballa con Git. Móstranos que arquivos se cambiaron, que arquivos se seguen, etc.

## Etapa e confirmación de código

O compromiso -``commit``- é o proceso no que os cambios se engaden "oficialmente" ao repositorio Git.

En Git, podemos considerar que as confirmacións son puntos de control ou instantáneas do seu proxecto no seu estado actual. Noutras palabras, gardamos basicamente a versión actual do noso código nun commit. Podemos crear tantas confirmacións como necesitemos no historial de confirmacións e podemos ir adiante e atrás entre as confirmacións para ver as diferentes revisións do código do noso proxecto. Iso permítenos xestionar de xeito eficiente o noso progreso e rastrexar o proxecto a medida que se vai desenvolvendo.

As confirmacións normalmente créanse en puntos lóxicos a medida que desenvolvemos o noso proxecto, normalmente despois de engadir contidos específicos, funcións ou modificacións (como novas funcionalidades ou corrección de erros).

## Arquivos de proba

Dende o cartafol do proxecto, podemos usar o comando ``git add`` para engadir os nosos arquivos á área intermedia, o que permite que se faga un seguimento deles.

Podemos engadir un arquivo específico á área de proba co seguinte comando:

![carbono (3)](./assets/zvk6jlmrzttn7ryoqbng.png)

Para engadir varios arquivos:

![carbon (4)](./assets/euga1m6yvys8vavutai.png)

En lugar de ter que engadir os arquivos individualmente, podemos engadir todos os arquivos necesarios dentro do cartafol do proxecto á área intermedia usando o comando:

![carbon (5)](./assets/r8g5xolj89p042quodmr.png)

De xeito predeterminado, isto engade todos os arquivos e cartafoles dentro do cartafol do proxecto á área intermedia, desde onde están listos para ser comprometidos e rastrexados.

## Facendo *commit*

Un commit é unha instantánea do noso código nun momento concreto, que gardamos no historial de commit do noso repositorio. Despois de engadir todos os arquivos que queremos rastrexar á área de proba co comando git add, estamos preparados para facer un commit.

Para confirmar os arquivos desde a área intermedia, empregamos o seguinte comando:

![carbono](./assets/6bcr44x2meqlmm6y1fcm.png)

Podemos escribir unha mensaxe de confirmación dentro das comiñas que se usa para identificala no historial de confirmacións.

A mensaxe de confirmación debe ser un resumo descritivo dos cambios que está a facer no repositorio.

Despois de executar ese comando, obterás os detalles técnicos sobre o *commit* impreso no terminal.
E iso é basicamente!, fixeches un *commit* no teu proxecto. 🎉 agora se escribimos git status deberiamos ver isto:

![9HHIf327i](./assets/1739213475201-21.jpg)

Antes de poder cometer cambios no noso código, necesitamos decidir que arquivos ou que cambios colocaremos (engadir) dentro da área intermedia. e desde a área de posta en escena que comprometemos.

## Historial de compromisos

Para ver todos os compromisos que se fixeron para o noso proxecto, usamos o seguinte comando:

![carbono (1)](./assets/ebrmsccfr74wkq7qq3bk.png)

O comando ``git log`` amosará detalles de cada ``commit``, como, nome do autor, hash xerado para commit, data e hora do commit e mensaxe de commit que fornecemos anteriormente.

Agora, digamos que fixemos algúns cambios no noso código (por exemplo, engadimos novas funcionalidades ou corrección de erros) e por algunha razón o noso código rompe e deixa de funcionar como se supón.

Git é aquí moi útil e por que aos grandes desenvolvedores de todo o mundo encántalles tanto.

Con Git podemos volver facilmente a unha versión segura do seu proxecto onde antes funcionaba o noso código:

![carbon (2)](./assets/lfsw8c7rykglmtkbpwij.png)

Agora Substitúe co hash real do commit específico que desexa visitar, que aparece co comando git log.

Para volver á última confirmación (a última versión do código do noso proxecto), pode escribir este comando:

``git checkout master``

## Ignorando arquivos

Para ignorar os arquivos que non desexa que se rastrexe nin se engada á área **intermedia** , pode crear un arquivo chamado **``.gitignore``** no seu cartafol principal do proxecto.

Dentro do arquivo, pode listar o nome de todos os arquivos e cartafoles dos que non quere seguir (cada arquivo e cartafol ignorado debería ir a unha nova liña dentro do arquivo **``.gitignore``** ).

Para profundar no ignorado de arquivos, podes consultar este artigo de GitHub: [https://docs.github.com/en/github/using-git/ignoring-files](https://docs.github.com/en/github/using-git/ignoring-files)

## Pólas

Unha póla podería interpretarse como unha liña de tempo individual dos compromisos do noso proxecto.

Pénsao como no flash cando a baga vai a diferentes liñas de tempo alternativas da súa vida (pasado, presente e futuro!), Todas elas por separado, pero ao mesmo tempo

Con Git, podemos crear moitos destes ambientes alternativos (é dicir, podemos crear diferentes pólas) para que poidan existir outras versións do código do noso proxecto e seguirse en paralelo.

Esta función permítenos engadir novas funcións (experimentais, inacabadas e potencialmente erradas) en pólas separadas, sen tocar a versión estable "oficial" principal do noso código de proxecto (que normalmente se mantén na póla principal).

Cando inicializamos un repositorio e comezamos a facer confirmacións, gárdanse na póla principal por defecto.

## Creando unha nova póla

Podes crear unha nova póla usando o seguinte comando:

![carbon (3)](./assets/1739213651061-30.png)

A nova póla que se crea será a referencia ao estado actual do teu repositorio.

É unha boa práctica crear unha póla de desenvolvemento onde podes traballar na mellora do teu código, engadindo novas funcións experimentais e todo similar. Despois de desenvolver e probar estas novas funcións para asegurarse de que non teñen erros e que se poden usar, pode combinalos coa póla principal.

## Cambio de pólas

Para cambiar a unha póla diferente, usa o comando git switch:

![carbon (4)](./assets/si1kd22jp36dkzqce4zl.png)

Con isto, pode cambiar a unha liña do tempo illada diferente do seu proxecto cambiando pólas.

Por exemplo, podería estar traballando en diferentes funcións do seu código e ter unha póla separada para cada función. Cando cambias a unha sucursal, podes facer cambios de código que só afecten a esa sucursal en particular. Despois, podes cambiar a outra póla para traballar noutra función, que non se verá afectada polos cambios e compromisos feitos desde a póla anterior.

Se a póla á que queremos cambiar non existe, entón o interruptor git comando creará unha nova póla e cambiará a ela ao mesmo tempo

## Fusión de pólas

Aquí está a última parte do crebacabezas.

Digamos que creou unha nova póla separada da póla mestra do seu proxecto na que quere traballar. despois de ter completamente implementado e probado unha nova característica no seu código, desexa combinar eses cambios coa póla estable do seu proxecto (que normalmente é a póla mestra predeterminada).

Entón, como facelo, é doado. Para combinar os cambios dunha póla diferente coa súa póla actual, pode usar este comando:

![carbon (5)](./assets/eiw7t4v5iw2v0g.png)

Só tes que substituír co nome da sucursal que desexa integrar na súa sucursal actual.

## Eliminación dunha póla

Para eliminar unha póla, pode executar o comando git branch coa bandeira ``-d``:

![carbon (6)](./assets/wf1zuw102c78pwr4t50x.png)

### Está ben, por agora rematamos aquí

Isto é todo de momento, hai moito máis de Git do que non falamos (irémolo vendo máis tarde).

Deixovos algúns recursos👇:

- Documentación oficial de Git: [https://git-scm.com/doc](https://git-scm.com/doc)

- O libro gratuíto de Pro Git: [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)
- Máis información sobre GitHub: [https://guides.github.com/](https://guides.github.com/)
- Libro electrónico sobre como comezar con Git e GitHub (suxerido polo usuario Bobby Iliev): [https://github.com/bobbyiliev/introduction-to-git-and-github-ebook](https://github.com/bobbyiliev/introduction-to-git-and-github-ebook)



____

***\_ref.:*** [https://dev.to/exwhyzed/how-to-git-a-complete-beginners-guide-1h85](https://dev.to/exwhyzed/how-to-git-a-complete-beginners-guide-1h85)
