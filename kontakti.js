document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("success-message").classList.remove("hidden");
    this.reset();


    function initMap() {
        // Координаты офиса (пример: Москва, ул. Примерная, д. 10)
        var officeLocation = { lat: 41.281172, lng: 69.266273 };

        // Создание карты
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,  // Уровень приближения
            center: officeLocation,
        });

        // Добавление маркера
        var marker = new google.maps.Marker({
            position: officeLocation,
            map: map,
            title: "Наш офис",
        });
    }