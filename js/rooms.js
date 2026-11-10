
document.addEventListener("DOMContentLoaded", function () {

    const viewAllRooms = document.getElementById("viewAllRoomsBtn");
    const roomsModal = document.getElementById("nivaaRoomsModal");
    const closeRooms = document.getElementById("nivaaCloseRooms");
    const roomsOverlay = document.getElementById("nivaaRoomsOverlay");

    /* OPEN POPUP */
    if (viewAllRooms) {
        viewAllRooms.addEventListener("click", function () {

            roomsModal.classList.add("nivaa-show");

            document.body.classList.add("nivaa-room-popup-open");

        });
    }


    /* CLOSE POPUP */
    function closeRoomPopup() {

        roomsModal.classList.remove("nivaa-show");

        document.body.classList.remove("nivaa-room-popup-open");

    }


    /* CLOSE BUTTON */
    if (closeRooms) {
        closeRooms.addEventListener("click", closeRoomPopup);
    }


    /* CLOSE OVERLAY */
    if (roomsOverlay) {
        roomsOverlay.addEventListener("click", closeRoomPopup);
    }


    /* ESC KEY */
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeRoomPopup();

        }

    });   

});




// ================












// ROOM BOOKING---------------------------------------------------------------------------------------------------



document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".nivaa-book-room");

    bookButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const roomName = this.dataset.room;
            const roomPrice = this.dataset.price;

            localStorage.setItem("selectedRoom", roomName);
            localStorage.setItem("selectedRoomPrice", roomPrice);

            window.location.href = "../Whatsappformsubmit/RoomBooking.html";

        });

    });

});