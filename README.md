# Documentação da API BAOBA

![APRESENTACAO-1-01a720d440f2b35002.jpg](https://imgurl.me/images/2020/07/06/APRESENTACAO-1-01a720d440f2b35002.jpg)
----------

![APRESENTACAO-1-02891fac2a11d986b6.jpg](https://imgurl.me/images/2020/07/06/APRESENTACAO-1-02891fac2a11d986b6.jpg)
----------
----------
# DESCRIÇÃO DO PROJETO

### A BAOBÁ - cultivando leitores

Nesta semana desenvolvemos uma plataforma digital, compatível com a BNCC (Base Nacional Comum Curricular), capaz de unir a realidade da sala de aula a um universo lúdico e divertido, focada no ensino fundamental, de 3° a 9° ano.

Nela, contamos com uma biblioteca com mais de 40 mil títulos de diversas categorias. 
E dois módulos de aulas o COOP e o CLIPS.
Ambos podem ser utilizados pelo app e ou através do WhatsApp com auxílio do nosso amigo virtual Xico.

Agora você me pergunta "tá, mas o que vai despertar o interesse dos alunos?"

Baobá é mais do que uma ferramenta. 
### É UM JOGO!
Toda atividade na plataforma gera experiência, fazendo com que os usuários cresçam suas plantinhas e assim como as plantas a evolução é cíclica, fazendo com que acumule conquistas e recompensas.
Por falar em recompensas, temos as flores e frutos. Duas moedas, dois propósitos.
» As flores são doações. 
» Os frutos são usados no marketplace para compra de itens como, livros físicos e até crédito para celular.

 E tudo isso é registrado na ÁRVORE DO CONHECIMENTO, tanto para o professor, quanto para o aluno.

### E aí, vamos juntos, plantar essa ideia e colher os frutos amanhã?
---

## Layout
Participamos da elaboração do Layout com UX e UI. Foram criados todos os cenários possíveis da solução, mas focamos apenas no essencial.

Eles disponibilizaram os layouts aqui:

#### XD Adobe (Versão dos professores):
[Aqui](https://xd.adobe.com/view/e32c4527-4c41-4a67-895b-a314bda9dd24-b67f/?fullscreen)

#### XD Adobe (Versão dos alunos):
[Aqui](https://xd.adobe.com/view/9e785aa3-a752-49ad-b9f7-02419ffd5cd3-cb2b/?fullscreen)
 
## Link da versão demo do App  
https://www.youtube.com/watch?v=x1wtNxd0-Yc&feature=youtu.be
----
## Como rodar o template
Com seu repositório baixado na sua máquina, execute o comando yarn na pasta do projeto clonado para instalar todas as dependências
```shell
git clone https://github.com/carneirodev/BaobaBackend
```

Depois de clonado rode o comando:
```shell
yarn
```
Para executar rode o comando:
```shell
yarn dev:server
```
Pronto o servidor estará rodando no localhost na porta 3000

----
----------
# DESCRIÇÃO DO PROJETO

### A BAOBÁ - cultivando leitores

Nesta semana desenvolvemos uma plataforma digital, compatível com a BNCC (Base Nacional Comum Curricular), capaz de unir a realidade da sala de aula a um universo lúdico e divertido, focada no ensino fundamental, de 3° a 9° ano.

Nela, contamos com uma biblioteca com mais de 40 mil títulos de diversas categorias. 
E dois módulos de aulas o COOP e o CLIPS.
Ambos podem ser utilizados pelo app e ou através do WhatsApp com auxílio do nosso amigo virtual Xico.

Agora você me pergunta "tá, mas o que vai despertar o interesse dos alunos?"

Baobá é mais do que uma ferramenta. 
### É UM JOGO!
Toda atividade na plataforma gera experiência, fazendo com que os usuários cresçam suas plantinhas e assim como as plantas a evolução é cíclica, fazendo com que acumule conquistas e recompensas.
Por falar em recompensas, temos as flores e frutos. Duas moedas, dois propósitos.
» As flores são doações. 
» Os frutos são usados no marketplace para compra de itens como, livros físicos e até crédito para celular.

 E tudo isso é registrado na ÁRVORE DO CONHECIMENTO, tanto para o professor, quanto para o aluno.

### E aí, vamos juntos, plantar essa ideia e colher os frutos amanhã?
----
## Como rodar o template
Com seu repositório baixado na sua máquina, execute o comando yarn na pasta do projeto clonado para instalar todas as dependências
```shell
git clone https://github.com/carneirodev/BaobaBackend
```

Depois de clonado rode o comando:
```shell
yarn
```
Para executar rode o comando:
```shell
yarn dev:server
```
Pronto o servidor estará rodando no localhost na porta 3000

----

# Rotas da API
### Link da API: [http://ec2-18-231-167-59.sa-east-1.compute.amazonaws.com:3000](http://ec2-18-231-167-59.sa-east-1.compute.amazonaws.com:3000/)
#### Criar usurário
- POST - /student
    - Body
         ```jsx
      "user_name":"aluno",
      "user_email":"aluno@aluno.com",
      "user_password":"123456",
      "user_school_id":"IFSULDEMINAS",
      "user_teacher": bollean,
      "user_room_id": "75195a14-275e-4118-957b-84b44d720792" || "",
      "user_country":"brasil",
      "user_state":"MG",
      "user_city":"Pocos"   
      ```
 #### Autenticação de usuário
- POST - /sessions
    - Body
         ```jsx
            "user_email":"aluno@aluno.com",
            "user_password":"123456",
         ```
    - Response
         ```jsx
            "token": "eyJhbGciOiJIUzI1NiIsInR5caI6IkpXVCJ9.eyJpYXQiOjE1OTM5NjQ1NDcsImV4cCI6qTU5NDA1MDk0Nywic3ViIjoiYWZjMTk3OTYtZjcwNS00MGUxLThhMmUtNjI4NDJlZWNkNTdlIn0.t_QStGuS57wH23NRpZSqHJGLYgnW_tiqdX-zEQKuJjY"
         ```
----------
## Todas as rotas abaixo será necessario estar autenticado
>  Será necessario passar o token obtido na rota sessions

---

#### Editar usuario
- POST - /sessions
    - Body
         ```jsx
        "user_email":"aluno@aluno.com",
        "user_password":"123456",
        ```
    - Response
         ```jsx
        "token": "eyJhbGciOiJIUzI1NiIsInR5caI6IkpXVCJ9.eyJpYXQiOjE1OTM5NjQ1NDcsImV4cCI6qTU5NDA1MDk0Nywic3ViIjoiYWZjMTk3OTYtZjcwNS00MGUxLThhMmUtNjI4NDJlZWNkNTdlIn0.t_QStGuS57wH23NRpZSqHJGLYgnW_tiqdX-zEQKuJjY"
        ```
-----  
#### Lista dados do usuario
- GET - /logged
    - Response
         ```jsx
      "user_name": "aluno",
      "user_email": "aluno@aluno.com",
      "user_school_id": "IFSULDEMINAS",
      "user_room_id": "75195a14-275e-4118-957b-84b44d720792",
      "user_teacher": false,
      "user_country": "brasil",
      "user_state": "MG",
      "user_city": "Pocos"
        ```   
-----
#### Cria sala do professor
- POST - /rooms
    - Body
         ```jsx
        "room_name": "sala 10"
        ```
    - Response
         ```jsx
       "room_name": "sala 10",
      "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
      "school_id": "IFSULDEMINAS",
      "room_id": "893f0c7a-6e2d-43f9-9a64-67b0d1362b0d"
        ```
-----  
#### Lista todas as salas do professor
- GET - /rooms
    - Response
         ```jsx
         [
          {
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "room_name": "sala 08",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "school_id": "IFSULDEMINAS"
          },
          {
            "room_id": "f8b6356b-5684-4796-8f63-4cfa3e0cc9d0",
            "room_name": "sala 10",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "school_id": "IFSULDEMINAS"
          },
          {
            "room_id": "893f0c7a-6e2d-43f9-9a64-67b0d1362b0d",
            "room_name": "sala 11",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "school_id": "IFSULDEMINAS"
          }
        ]
        ```    
----
#### Cria tarefa para a sala de aula
- POST - /rooms
    - Body
         ```jsx
        "room_id":"75195a14-275e-4118-957b-84b44d720792",
        "book_id":"5071931c-722a-4c4b-af29-bbee6fce2c41",
    	"date": DATE
        ```
    - Response
         ```jsx
       "room_name": "sala 10",
      "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
      "school_id": "IFSULDEMINAS",
      "room_id": "893f0c7a-6e2d-43f9-9a64-67b0d1362b0d"
        ```
-----  
#### Lista as tarefas da sala de aula
- GET -/homework/rooM/:id
    >É necessário passar o id da sala pela URL

    - Response
        ```jsx
        [
          {
            "homework_id": "74f2c883-ba63-4592-be63-b142b4157f5f",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          },
          {
            "homework_id": "83df84ba-0ab5-4084-8236-1d1ae58f2b43",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          },
          {
            "homework_id": "e6b7eca6-b891-4bf2-ae53-6ab32574150f",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          }
        ]
        ```
----- 
#### Lista todas as tarefas criadas pelo professor
- GET - /homework

    - Response
        ```jsx
        [
          {
            "homework_id": "74f2c883-ba63-4592-be63-b142b4157f5f",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          },
          {
            "homework_id": "83df84ba-0ab5-4084-8236-1d1ae58f2b43",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          },
          {
            "homework_id": "e6b7eca6-b891-4bf2-ae53-6ab32574150f",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          }
        ]
        ```
----- 
#### Lista todas as tarefas do aluno
- GET - /student

    - Response
        ```jsx
        [
          {
            "student_homework_id": "d90792bd-429d-464e-9e68-61eb1ef9879a",
            "homework_id": "83df84ba-0ab5-4084-8236-1d1ae58f2b43",
            "student_id": "a0c47cd1-6dfb-4502-85e6-a1a83b22d22c",
            "student_chapters": 1,
            "student_text": "",
            "homework_status": "todo"
          },
          {
            "student_homework_id": "82a1031f-a4fc-4571-bfe5-8227d0157d5e",
            "homework_id": "74f2c883-ba63-4592-be63-b142b4157f5f",
            "student_id": "a0c47cd1-6dfb-4502-85e6-a1a83b22d22c",
            "student_chapters": 1,
            "student_text": "muito bom, show",
            "homework_status": "doing"
          },
          {
            "student_homework_id": "925dd1f5-7365-40e0-a410-e629eb34885c",
            "homework_id": "e6b7eca6-b891-4bf2-ae53-6ab32574150f",
            "student_id": "a0c47cd1-6dfb-4502-85e6-a1a83b22d22c",
            "student_chapters": 1,
            "student_text": "muito bom, show",
            "homework_status": "doing"
          },
          {
            "student_homework_id": "7f812d1a-fb77-4321-a78f-6c75443037c7",
            "homework_id": "97f2ade2-7430-4fa9-94a5-f211533624ab",
            "student_id": "a0c47cd1-6dfb-4502-85e6-a1a83b22d22c",
            "student_chapters": 1,
            "student_text": "",
            "homework_status": "todo"
          }
        ]
        ```
----- 
#### Altera o texto
- PUT - /student/text
    - Body
         ```jsx
        "student_homework_id":"925dd1f5-7365-40e0-a410-e629eb34885c",
    	"student_text":"muito bom, show"
        ```
#### Altera o status da tarefa para todo/doing/done
- PUT - /student/status
    - Body
         ```jsx
        "homework_status":"Done",
    	"student_homework_id":"925dd1f5-7365-40e0-a410-e629eb34885c"
        ```
    
-----  
![APRESENTACAO-1098e2512e926096b6.jpg](https://imgurl.me/images/2020/07/06/APRESENTACAO-1098e2512e926096b6.jpg)
