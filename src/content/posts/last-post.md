---
title: "Diseño de Estructuras de Baja Latencia en C++ para HFT"
description: "Cómo diseñar estructuras de datos cache-friendly, sin heap y aptas para procesar miles de mensajes FIX por segundo."
pubDate: 2025-02-01
category: "HFT"
ogImage: true
---

## Introducción

En trading de alta frecuencia, **la estructura de datos es la estrategia**.

Un algoritmo lento casi siempre es consecuencia de una estructura mal diseñada:
muchas asignaciones dinámicas, accesos no contiguos a memoria, saltos impredecibles
y layout complejo.

En este post voy a mostrar un patrón que uso constantemente para lograr:

- cero heap en hot path
- acceso O(1) por clave numérica
- data layout cache-friendly
- minimización total de branches

---

## Motivación

Supongamos que queremos almacenar el estado de todas las órdenes activas
por _SymbolID_ y _slot_.

Queremos algo:

- sin `std::map`
- sin `std::unordered_map`
- sin `new`
- sin punteros compartidos
- indexable en O(1) real

La solución típica: **tablas estáticas + structs triviales**.

---

## Estructura propuesta

### 📌 `OrderSlot`

Cada slot representa una orden viva dentro de un símbolo.

```cpp
struct OrderSlot {
    uint64_t cloid;     // ClOrdID packed
    int64_t  price;     // precio FIX scale=10000
    int32_t  qty;       // cantidad
    uint8_t  active;    // 0/1 sin bool (avoid padding)
    uint8_t  side;      // buy/sell
    uint8_t  _pad[2];   // padding explícito para mantener alineación 16B
};
static_assert(sizeof(OrderSlot) == 24, "mantener tamaño estable");
```
