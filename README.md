# ReactJS веб-приложение для учёта сотрудников в компании, написанное с использованием классовых компонентов

## Функционал

- Header с динамическими счетчиками

![image](https://github.com/user-attachments/assets/3c4e3219-c24b-4447-8238-8805df073beb)

Отображаются два показателя, которые обновляются автоматически при изменении данных.

![image](https://github.com/user-attachments/assets/153cc1ae-823b-411c-8101-cc54510d7af0)

- Поиск и фильтрация

![image](https://github.com/user-attachments/assets/0e98bf95-610a-4b3c-b74d-e74853170b9b)

Поиск осуществляется по первой букве имени сотрудника, независимо от регистра.

![image](https://github.com/user-attachments/assets/3038bb80-1b40-40a8-8661-a8634eedd38d)

Фильтр "На повышение": отображаются только сотрудники, отмеченные звёздочкой, что указывает на возможность их повышения.

![image](https://github.com/user-attachments/assets/58579117-c1b1-4c44-96c1-7d00c7bd39ca)

Фильтр "З/П больше 1000$": отображаются сотрудники с зарплатой, превышающей 1000 долларов.

![image](https://github.com/user-attachments/assets/5fa5fc18-42b2-4607-9b00-43ce87e8be4a)

- Управление сотрудниками

При клике на поле с именем сотрудника рядом с ним появляется звёздочка, обозначающая, что его рассматривают на повышение.

![Запись 2024-10-17 133946](https://github.com/user-attachments/assets/e87758bb-fafb-42c2-8dfb-a9515c71955f)

Кнопка с изображением "печеньки" обозначает, что сотрудник получит премию. При этом его цвет меняется, и счётчик премированных сотрудников в header обновляется.

![Запись 2024-10-17 134239](https://github.com/user-attachments/assets/545e457b-b219-4fd9-9c38-67df0c2523b0)

При нажатии на кнопку с изображением мусорной корзины сотрудник удаляется из списка.
  
![Запись 2024-10-17 134933](https://github.com/user-attachments/assets/23b7a541-d93d-4320-8ca0-b72c9fe34b3f)

- Добавление новых сотруднков

![image](https://github.com/user-attachments/assets/35d1dac1-6e5b-41b1-be61-9fadd4d9f7f0)

Валидация ввода: в поле имени нельзя вводить числа, а в поле заработной платы — только цифры.

![image](https://github.com/user-attachments/assets/38244dbb-8e87-42e3-b3f8-92ebfe758b46)

![image](https://github.com/user-attachments/assets/9406e8c7-a0f2-48ef-863f-3e9a4bce35e5)

При оставлении какого-либо поля незаполненным отображается соответствующее сообщение.

![image](https://github.com/user-attachments/assets/0b86183c-aac9-4b00-97b2-06ab55849450)

При корректном заполнении полей новый сотрудник добавляется в список.

![Запись 2024-10-17 140015](https://github.com/user-attachments/assets/6f64fc2d-3f2e-4b2b-b541-3fb2d180a8c8)

## Технологии

- ReactJS 18
- createRoot
  
