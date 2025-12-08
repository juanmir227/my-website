---
title: "Trading Algorítmico vs. Trading de Alta Frecuencia: no son lo mismo"
description: "En este post describo las similitudes y diferencias entre ambas disciplinas."
pubDate: 2025-01-10
category: "HFT"
ogImage: true
---

## Introducción

A lo largo de estos últimos años desde que comencé este camino como Trader Algorítmico, o al menos ese es mi título oficial, rápidamente me di cuenta que al interactuar con otras personas relacionadas al mercado financiero, la definición sobre qué significan exactamente esas palabras no era para todos la misma.
Dada la aparición reciente de este estilo de desarrollo tecnológico en los mercados argentinos siento que sigue rodeado de un oscurantismo innecesario que hoy voy a intentar desenmascarar.

El objetivo de este post será desmitificar qué involucra el título de trader algorítmico y poder dar un poco de información sobre cómo se diferencia su día a día frente a lo que hace un trader de alta frecuencia.

## Algoritmos como un proceso ordenado

Para poder describir las diferencias, primero que todo tenemos que entender exactamente qué es un algoritmo. Por definición, un algoritmo es una secuencia finita y ordenada de instrucciones claras que se siguen para resolver un problema específico o realizar una tarea. Es decir, que un panadero repitiendo la receta todas las mañanas para hacer el pan, también se encuentra ejecutando un algoritmo.

En lo que respecta al trading, una disciplina bastardeada por el humo que suele rodear a todo lo relacionado al dinero (de lo cual probablemente hablaré en otro post), no es otra cosa que repetir un famoso mantra de mercado:

> "Comprá barato y vendé caro."

En el cómo se llega a alcanzar ese nirvana es donde yace la diferencia fundamental entre ambas disciplinas que competen a este post. Cabe aclarar que el trader de alta frecuencia no es otra cosa que un subgrupo dentro de la categoría de trader algorítmico. Pero no de la misma manera se cumple el inverso.

### Autonomía relativa: el rol del operador

No hay que confundir la inclusión de la palabra algoritmo con autonomía. En general (y te diría que es lo más probable), el algoritmo suele ser utilizado por un operador, sea el mismo desarrollador o un trader el cual se apalanca en esta tecnología para facilitar un área de su trabajo.

## ¿Qué es el trading algorítmico?

### Horizonte temporal y tipo de decisiones

Creo que hay dos puntos fundamentales que distinguen al trading algorítmico del trading de alta frecuencia. El primero involucra al horizonte temporal del trade. Estos suelen durar entre algunos segundos hasta varios días. Es decir, que se produce a partir de una visión macro del estado actual del mercado, sea a corto o mediano plazo.

Dado que la evolución de las métricas que suelen componer este tipo de algoritmos se calculan en órdenes temporales superiores al segundo, no podemos incluir a este estilo de algoritmos dentro de la categoría de alta frecuencia. Para dar un ejemplo, un algoritmo que toma como parámetro la volatilidad de los últimos 30 días, pasado un segundo no va a recalcular dicho parámetro porque la variación sería completamente insignificante (y además muy costosa en términos de latencia).
Este tipo de algoritmos suelen estar más ligados a métricas relacionadas al estado de un instrumento, sea el comportamiento de su precio en los últimos meses, si ha habido noticias que empujen dicho precio hacia arriba, el estado de la volatilidad, y toda métrica que te puedas llegar a inventar que te permita, por lo menos dados los parámetros definidos por el operador, si efectivamente estás cumpliendo el mantra, compro barato y vendo caro.

### Herramientas típicas y trade-offs de velocidad

Otra diferencia fundamental es qué herramientas suelen utilizarse para su desarrollo. Python siendo el lenguaje de programación más usado del mundo por su facilidad de desarrollo suele ser el elegido. Esto facilita en gran escala la velocidad de desarrollo, y permite el uso de librerías con herramientas ya creadas por alguien más.El costo que se paga es que dentro de los tiempos de ejecución de un programa, Python se considera de los más lentos. SIn embargo, dado que tu algoritmo espera que se cumpla alguna condición macro de mercado o un estado que se actualiza en el órden de los segundos, siempre "alcanza el tiempo" para hacer alguna operación más. Y no podría darte más lo mismo si compraste unos centavos más arriba o más abajo. En este plano de las cosas sería un cambio insignificante en el resultado del trade. ¿Por qué? Porque lo que define el resultado será completamente el funcionamiento de tu modelo en ese estado macro de mercado determinado.

![s&p](/historics&p.png)

## ¿Qué es el trading de alta frecuencia?

### Del “qué” al “cómo”: cambio de foco en HFT

Como una vuelta de tuerca más al problema, dentro del cual me encuentro apasionadamente inmerso, se encuentra el trading de alta frecuencia. El cual acepta la realidad de que "nunca hay tiempo suficiente" para lo que buscamos lograr, que en general se suele encontrar en el micromundo del sub milisegundo. Debido a esto, pasamos de un plano que nos exigía maximizar exactamente el qué hacemos a uno que nos pregunta cómo lo hacemos. Y ese diría es el cambio más fundamental entre ambas disciplinas pasamos de enviar un orden reactiva dada alguna serie de condiciones preacordadas a detonar el servidor con cientas/miles de órdenes por segundo (siendo la limitante el servidor mismo y no necesariamente el algoritmo lo cual es alucinante). Dado que no hay tiempo para nada, eso incluye estrategias complicadas o que requieran conocimiento de detalles temporales lejanos, que interactúen con otros sistemas que no sean el mercado (cosa que si podrías hacer en un algoritmo normal, agregando por ejemplo un indicador de noticias de X), que algunas de sus partes se descoordinen y sea necesario esperar, todas estas cosas siempre son demasiado lentas. El trading de alta frecuencia se convierte en tomar una casa construida, e intentar llevarla a su mínima expresión parte por parte. ¿Realmente necesito 5 sillas? ¿O 4 son suficientes? Secciones que antes parecían obvias se transforman en una dificultad técnica que ahora requiere cabeza para encontrar la solución. Termina siendo un proceso hipnótico y altamente adictivo de un loop infinito donde uno se dice: "todavía puedo lograr que vaya un poquito más rápido".

### Arbitraje y velocidad: por qué importa ganar microsegundos

Claramente no lo hacemos porque nos odiamos. Sino porque ser los más rápidos del oeste viene con muchas ventajas. En particular nos abre a un mundo que dentro de la descripción de trading algorítmico que dimos antes quedaríamos muy lentos que es el ARBITRAJE.
Supongamos que caminando por la calle te encontras un billete de $1000 pesos, ¿no lo vas a levantar? Extrapolando a nuestro asunto justamente buscamos realizar ese mismo proceso, agacharnos y levantar el billete. ¿Cómo? Repitiendo el mantra de toda persona de mercado comprando barato y vendiendo caro, pero en este caso, compramos barato antes de que el otro se entere de que está barato y vendemos caro de la misma manera. ¿Se entiende ahora porque vale la pena? Mientras que un humano observa la pantalla y dice para mi hay una oportunidad, este estilo de algoritmos ya logró operar tantas veces que en la próxima actualización de su frontend el operador solo verá que o se ha terminado la oportunidad, o no solo eso sino que al final el que se encuentra mal parado en el mercado es él mismo, y será ejecutado a sangre fría por nuestro algoritmo poco tiempo después.

### El desarrollo técnico: agujeros de conejo y rescatar nanosegundos de entre las piedras

A nivel desarrollo se vuelve desafiante, lo que antes era fácilmente resoluble con un llamado a una función de Python te puede llevar en un agujero de conejo de varios días. Todo con el mero propósito de ahorrarte unos nanosegundos extra. Para esto suelen utilizarse lenguajes que te den mucho más control sobre la memoria de tu computadora. En particular nombro tres como grandes contendientes: C++, Rust y Go, ordenados descendientemente en términos de velocidad y de dificultad de programar. Ya hacer ese pasaje de lenguaje, eleva la vara un nivel, pero como arquitecto te da las herramientas para que puedas construir la casa exactamente como la necesitas. Esa es la magia de este asunto.
Debido a la alta velocidad de ejecución, NO HAY MARGEN PARA ERRORES. Como una alta pieza de relojería debe mantener su trayecto optimizado y toda posibilidad debe ser tenida en cuenta antes de que entre en producción, la robustez es innegociable en este caso dado que un error no perdona. Suponiendo que podrías perder unos $20 USD (siendo muy optimistas) por operación por algún error y que podrías ejecutar unas 1000 órdenes por segundo, en caso de un comportamiento no manejado por el algoritmo estarías perdiendo $20.000 USD/seg hasta que la situación se revierta a un camino bien manejado, o se apague el algoritmo. Como bien les decía, no hay margen de error. La respuesta es obvia, que no tenga errores y listo! Pero somos humanos después de todo y resulta imposible cubrir hasta el más extravagante edge case (incluso más cuando vienen relacionados a cosas fuera de nuestro control como el correcto funcionamiento del software de mercado por ejemplo).

Este estilo de algoritmos, dada la inversión y el volumen necesarios para que sea rentable suele ser una opción con la vara de entrada extramadamente alta, por lo que termina siendo reservado para pocos equipos de muy alto nivel y con muchos recursos. En esta categoría la persona de a pie se ve completamente aniquilada por los tiburones.

![trading_rows](/trading_front.jpeg)

## Entonces el trading de alta frecuencia es algorítmico pero más rápido...

### Dos disciplinas distintas, mismo objetivo

Sí y no. Claramente comparten algunas cuestiones como la necesidad de desarrollar un programa de computadora. La necesidad también de poder medir su eficiencia y sus resultados. Pero hasta ahí llegan las coincidencias. El trading de alta frecuencia no es solo más rápido, sino que directamente se aprovecha de otro tipo de edge. Son casos de uso completamente distintos, pero con el mismo objetivo, repetir el mantra que no voy a volver a escribir. La diferencia fundamental, y lo que creo que termina definiendo esa separación es la escala temporal y las métricas que se utilizan para realizar las operaciones. Un algoritmo de alta frecuencia puede capaz obtener unos miles de dólares "rascando" de unos centavos por operación a lo largo del día. Mientras que otro algoritmo podría, dado un modelo estudiado y parametrizado, en una pequeña cantidad de operaciones realizadas a lo largo del día obtener exactamente (o más) ganancia que el de alta frecuencia. Lo importante es poder cubrir ambos casos, de esa manera vamos a extraer la mayor cantidad de valor y, capaz sin ponernos demasiado filosóficos con el asunto, mejoramos en ambos casos la precisión de los precios en todos los trades que nos vemos involucrados, llevando información nueva al mercado.

## Conclusión: dos formas de automatizar, dos mundos distintos

| Dimensión          | Trading Algorítmico            | Trading de Alta Frecuencia                |
| ------------------ | ------------------------------ | ----------------------------------------- |
| Horizonte temporal | Segundos → Días                | Nanosegundos → Milisegundos               |
| Fuente de edge     | Modelos, señales, estadísticas | Latencia, microestructura, ejecución      |
| Infraestructura    | Python, APIs estándares        | C++ optimizado, FIX/TLS, kernels tuneados |

El trading algorítmico y el trading de alta frecuencia comparten automatización, pero no comparten naturaleza. Uno se apoya en estadística y decisiones discretas, el otro en desarrollo de bajo nivel, microestructura y ejecución impecable. Entender esa diferencia es clave y define el enfoque que cada uno aporta al mercado. Espero que este post ayude a arrojar un poco de luz sobre el tema y que de ahora en más podamos distinguir entre un trader algorítmico y un desarrollador de sistemas de alta frecuencia.
