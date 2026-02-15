def main():
    print("Проєкт запущено! Починаємо обробку даних...")
    data = [10, 20, 30, 40, 50]
    processed_data = [x * 2 for x in data]
    print(f"Оброблено: {processed_data}")

if __name__ == "__main__":
    main()