# Documentacao da API BAOBA

![APRESENTACAO-1-01a720d440f2b35002.jpg](https://imgurl.me/images/2020/07/06/APRESENTACAO-1-01a720d440f2b35002.jpg)
----------
![APRESENTACAO-1-02891fac2a11d986b6.jpg](https://imgurl.me/images/2020/07/06/APRESENTACAO-1-02891fac2a11d986b6.jpg)
----------


# Rotas da API
### Link da API: [http://ec2-18-231-167-59.sa-east-1.compute.amazonaws.com:3000](http://ec2-18-231-167-59.sa-east-1.compute.amazonaws.com:3000/)
#### Criar usuario
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
 #### Sessions
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

#### Sessions
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