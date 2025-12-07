---
title: "Post de Prueba — Visual Test del Reading Layout"
description: "Ensayo visual para validar estilos de párrafos, código, tablas, imágenes y listas."
pubDate: 2025-02-20
category: "Infra"
ogImage: true
---

## Introducción

Este post existe únicamente para **probar los estilos** del layout de lectura.  
Acá verificamos:

- Párrafos y espaciado
- Listas
- Bloques de código
- Código inline como `std::vector<int>`
- Citas
- Imágenes
- Tablas
- Links

---

## Párrafos y código inline

Un párrafo común, nada especial.

Ahora uno con una clase de C++: `std::unordered_map<int, double>`.

Otro párrafo más largo para evaluar el _line-height_ y ver cómo se siente la lectura continua
en un texto que ocupa varias líneas consecutivas. La idea es que la lectura sea **liviana**, sin brillo innecesario ni efectos molestos.

También probamos texto con énfasis:

- **negrita**
- _itálica_
- ~~tachado~~

---

## Listas

### Lista desordenada

- Primer ítem
- Segundo ítem con más texto para ver el wrap y espaciado
- Tercer ítem con `inline code`

### Lista ordenada

1. Paso uno
2. Paso dos
3. Paso tres

---

## Bloque de código

```cpp
#include <cstdint>
#include <array>

struct OrderSlot {
    uint64_t cloid;
    int64_t  price;
    int32_t  qty;
    uint8_t  active;
    uint8_t  side;
    uint8_t  _pad[2];
};

int main() {
    std::array<OrderSlot, 16> table{};
    table[0].price = 1572300;
    return 0;
}
```

Bloque estilo consola:

```
[MD] 8=FIXT.1.1 35=X 269=0 44=123.45
[OR] Replace BID @ 123.50 (slot=2)
[RT] latency=0.18ms
```

---

## Citas

> "Latency is a feature, not a bug."  
> — _HFT proverb_

> Una cita extensa permite verificar cómo se comporta el borde, el padding y el contraste dentro del layout de lectura.

---

## Imágenes

![Imagen de prueba](https://picsum.photos/800/360)

![Mini](https://picsum.photos/300/200)

---

## Tabla

| SymbolID | Precio | Spread | Volumen |
| -------- | ------ | ------ | ------- |
| AL30     | 120.45 | 0.12%  | 4.2M    |
| GD30     | 98.10  | 0.18%  | 3.4M    |
| YPFD     | 7850   | 0.05%  | 120k    |

---

## Links

https://github.com

[Mi sitio web](https://google.com)

---

## Conclusión

Si todo se ve prolijo, equilibrado y consistente, tu reading layout está **listo para producción**.  
Si algún elemento no te convence, avisame y lo ajustamos.
