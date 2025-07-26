# Mermaid - Diagramas e Gráficos

Mermaid é unha ferramenta que permite crear diagramas e gráficos usando sintaxe de texto simple. É moi útil para documentación técnica, fluxogramas, diagramas de secuencia e moito máis.

## Tipos de Diagramas

### 1. Fluxogramas (Flowcharts)

Os fluxogramas son perfectos para mostrar procesos e decisións:

```mermaid
flowchart TD
    A[Inicio] --> B{É usuario rexistrado?}
    B -->|Si| C[Mostrar páxina principal]
    B -->|Non| D[Mostrar páxina de rexistro]
    C --> E[Fin]
    D --> F[Rexistrar usuario]
    F --> C
```

### 2. Diagramas de Secuencia

Ideais para mostrar interaccións entre diferentes actores:

```mermaid
sequenceDiagram
    participant U as Usuario
    participant B as Navegador
    participant S as Servidor
    participant DB as Base de Datos
    
    U->>B: Introduce credenciais
    B->>S: Envía petición de login
    S->>DB: Verifica credenciais
    DB-->>S: Resultado da verificación
    S-->>B: Resposta de autenticación
    B-->>U: Mostra resultado
```

### 3. Diagramas de Clases

Perfectos para mostrar estruturas de programación orientada a obxectos:

```mermaid
classDiagram
    class Usuario {
        +String nome
        +String email
        +String password
        +login()
        +logout()
        +cambiarPassword()
    }
    
    class Administrador {
        +xestionarUsuarios()
        +verEstatisticas()
    }
    
    class Cliente {
        +realizarPedido()
        +verHistorial()
    }
    
    Usuario <|-- Administrador
    Usuario <|-- Cliente
```

### 4. Diagramas de Estado

Mostran os diferentes estados dun sistema:

```mermaid
stateDiagram-v2
    [*] --> Desconectado
    Desconectado --> Conectando : iniciar_conexion()
    Conectando --> Conectado : conexion_exitosa()
    Conectando --> Desconectado : erro_conexion()
    Conectado --> Desconectado : desconectar()
    Conectado --> Reconectando : perda_conexion()
    Reconectando --> Conectado : reconexion_exitosa()
    Reconectando --> Desconectado : fallo_reconexion()
```

### 5. Diagramas de Gantt

Para planificación de proxectos:

```mermaid
gantt
    title Planificación do Proxecto Web
    dateFormat  YYYY-MM-DD
    section Deseño
    Wireframes           :a1, 2024-01-01, 30d
    Deseño Visual        :after a1, 20d
    section Desenvolvemento
    Frontend             :2024-02-01, 45d
    Backend              :2024-02-15, 30d
    section Testing
    Probas Unitarias     :2024-03-01, 15d
    Probas de Integración :after Frontend, 10d
```

### 6. Diagramas de Pastel (Pie Charts)

```mermaid
pie title Tecnoloxías Web máis usadas
    "JavaScript" : 35
    "Python" : 25
    "Java" : 20
    "PHP" : 12
    "Outras" : 8
```

### 7. Mapas Mentais

```mermaid
mindmap
  root((Desenvolvemento Web))
    Frontend
      HTML
      CSS
        Flexbox
        Grid
        Animacións
      JavaScript
        ES6+
        Frameworks
          React
          Vue
          Angular
    Backend
      Node.js
      Python
        Django
        Flask
      PHP
        Laravel
        Symfony
    Base de Datos
      SQL
        MySQL
        PostgreSQL
      NoSQL
        MongoDB
        Redis
```

## Configuración de Temas

Podes configurar diferentes temas para os teus diagramas:

- `default` - Tema por defecto
- `dark` - Tema escuro
- `forest` - Tema verde
- `neutral` - Tema neutral

## Sintaxe Básica

Para crear un diagrama Mermaid, simplemente usa un bloque de código con `mermaid` como linguaxe:

````markdown
```mermaid
// O teu código de diagrama aquí
```
````

## Recursos Adicionais

- [Documentación oficial de Mermaid](https://mermaid.js.org/)
- [Editor en liña de Mermaid](https://mermaid.live/)
- [Exemplos de diagramas](https://mermaid.js.org/syntax/examples.html)

## Vantaxes de usar Mermaid

1. **Sintaxe simple**: Fácil de aprender e usar
2. **Control de versións**: Os diagramas están en texto plano
3. **Integración**: Funciona perfectamente con VitePress
4. **Responsive**: Os diagramas adáptanse a diferentes tamaños de pantalla
5. **Temas**: Soporte para temas claros e escuros
6. **Exportación**: Podes exportar como SVG ou PNG