// =========================================================
// Модальное окно выбора тарифа
// =========================================================

const dialog = document.getElementById('planDialog');
const selectedPlanEl = document.getElementById('selectedPlan');
const closeBtn = document.getElementById('closeDialog');
const okBtn = document.getElementById('okDialog');

// Открытие: клик по любой кнопке с классом .choose
document.querySelectorAll('.choose').forEach((button) => {
  button.addEventListener('click', () => {
    selectedPlanEl.textContent = 'Вы выбрали: ' + button.dataset.plan;
    dialog.showModal();
  });
});

// Закрытие: крестик и кнопка "Понятно"
closeBtn.addEventListener('click', () => dialog.close());
okBtn.addEventListener('click', () => dialog.close());
