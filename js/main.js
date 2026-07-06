const phoneNumber = '+905344346596';
const translations = {
  TR: {
    menu: ['Hizmetler', 'Filo', 'Destinasyonlar', 'Deneyim'],
    heroTitle: 'LUXURY VIP TRAVEL EXPERIENCE',
    heroCopy: 'Dünya standartlarında VIP transfer çözümleri ile İstanbul ve Bodrum’da seçkin seyahatler.',
    reserveLabel: 'Rezervasyon Talebi',
    reserveButton: 'Yolculuğunuzu Planlayın',
    reserveSection: 'VIP transferinizi şimdi planlayın',
    services: 'Hizmetler',
    fleet: 'Filo',
    destinations: 'Destinasyon',
    reservation: 'Rezervasyon',
  },
  EN: {
    menu: ['Services', 'Fleet', 'Destinations', 'Experience'],
    heroTitle: 'LUXURY VIP TRAVEL EXPERIENCE',
    heroCopy: 'Premium VIP transfer solutions designed for Istanbul and Bodrum journeys.',
    reserveLabel: 'Booking Request',
    reserveButton: 'Plan Your Journey',
    reserveSection: 'Plan your VIP transfer now',
    services: 'Services',
    fleet: 'Fleet',
    destinations: 'Destinations',
    reservation: 'Reservation',
  },
  AR: {
    menu: ['الخدمات', 'الأسطول', 'الوجهات', 'التجربة'],
    heroTitle: 'تجربة سفر VIP فاخرة',
    heroCopy: 'حلول نقل VIP مميزة في إسطنبول وبودروم.',
    reserveLabel: 'طلب الحجز',
    reserveButton: 'خطط لرحلتك',
    reserveSection: 'خطط لنقلك VIP الآن',
    services: 'الخدمات',
    fleet: 'الأسطول',
    destinations: 'الوجهات',
    reservation: 'الحجز',
  },
  RU: {
    menu: ['Услуги', 'Флот', 'Направления', 'Опыт'],
    heroTitle: 'РОСКОШНЫЙ VIP ТРАНСФЕР',
    heroCopy: 'Премиальные VIP-трансферы для Стамбула и Бодрума.',
    reserveLabel: 'Запрос бронирования',
    reserveButton: 'Спланировать поездку',
    reserveSection: 'Спланируйте VIP-трансфер сейчас',
    services: 'Услуги',
    fleet: 'Флот',
    destinations: 'Направления',
    reservation: 'Бронирование',
  },
  DE: {
    menu: ['Services', 'Flotte', 'Reiseziele', 'Erlebnis'],
    heroTitle: 'LUXUS VIP TRANSFER',
    heroCopy: 'Premium VIP-Transferlösungen für Istanbul und Bodrum.',
    reserveLabel: 'Buchungsanfrage',
    reserveButton: 'Reise planen',
    reserveSection: 'Planen Sie jetzt Ihren VIP-Transfer',
    services: 'Services',
    fleet: 'Flotte',
    destinations: 'Reiseziele',
    reservation: 'Reservierung',
  }
};

const langButtons = document.querySelectorAll('.lang-switch button');
const navLinks = document.querySelectorAll('.site-nav a');
const heroTitle = document.querySelector('.hero-title');
const heroCopy = document.querySelector('.hero-copy');
const requestButton = document.getElementById('requestButton');
const openReservation = document.getElementById('openReservation');
const openReservationBottom = document.getElementById('openReservationBottom');
const modal = document.getElementById('reservationModal');
const closeModal = document.getElementById('closeModal');
const reservationForm = document.getElementById('reservationForm');
const serviceSelect = reservationForm.querySelector('select[name="service"]');
const corporateModal = document.getElementById('corporateModal');
const closeCorporateModal = document.getElementById('closeCorporateModal');
const corporateTitle = document.getElementById('corporateModalTitle');
const corporateBody = document.getElementById('corporateModalBody');

const corporateContent = {
  about: {
    title: 'Hakkımızda',
    body: `
      <p>KARYA TURİZM, İstanbul ve Bodrum’da VIP transfer, özel şoförlü ulaşım, havalimanı transferi, kurumsal ulaşım ve yat/tekne organizasyonlarıyla premium hizmet sunar.</p>
      <p>Her hizmet, seçkin konfor, güvenlik ve kesintisiz operasyon odaklı yürütülür. Misafirlerimiz için her detay özenle planlanır ve sunulur.</p>
    `
  },
  privacy: {
    title: 'Gizlilik Politikası',
    body: `
      <p>Kullanıcıdan alınan ad, telefon, rezervasyon bilgileri ve mesaj içerikleri yalnızca hizmet talebini karşılamak ve iletişim kurmak için kullanılır.</p>
      <p>Bu veriler, KARYA TURİZM tarafından gizli tutulur ve izniniz olmadan üçüncü kişilerle paylaşılmaz.</p>
    `
  },
  terms: {
    title: 'Hizmet Şartları',
    body: `
      <p>Rezervasyon talepleri WhatsApp üzerinden ön talep niteliğindedir. Kesin rezervasyon, müsaitlik ve onay sürecinin tamamlanmasının ardından gerçekleşir.</p>
      <p>Fiyat, araç tipi ve hizmet detayları talebe göre netleşir ve müşteriye teyit edilir.</p>
    `
  },
  kvkk: {
    title: 'KVKK',
    body: `
      <p>Kişisel verileriniz, 6698 sayılı KVKK kapsamında hizmet talebinin yürütülmesi, iletişim ve operasyon süreçleri için işlenir.</p>
      <p>Kullanıcı, bilgi alma, düzeltme ve silme taleplerini KARYA TURİZM’e iletebilir.</p>
    `
  }
};

function setLanguage(lang) {
  const data = translations[lang] || translations.TR;
  navLinks.forEach((link, index) => {
    link.textContent = data.menu[index];
  });
  heroTitle.textContent = data.heroTitle;
  heroCopy.textContent = data.heroCopy;
  requestButton.textContent = data.reserveLabel;
  openReservation.textContent = data.reserveButton;
  openReservationBottom.textContent = data.reserveLabel;
  document.querySelectorAll('.section-label').forEach((label) => {
    const text = label.textContent.trim();
    if (text === 'Hizmetler' || text === 'Services' || text === 'الخدمات' || text === 'Услуги' || text === 'Services') {
      label.textContent = data.services;
    }
    if (text === 'Filo' || text === 'Fleet' || text === 'الأسطول' || text === 'Флот' || text === 'Flotte') {
      label.textContent = data.fleet;
    }
    if (text === 'Destinasyon' || text === 'Destinations' || text === 'الوجهات' || text === 'Направления' || text === 'Reiseziele') {
      label.textContent = data.destinations;
    }
    if (text === 'Rezervasyon' || text === 'Reservation' || text === 'الحجز' || text === 'Бронирование' || text === 'Reservierung') {
      label.textContent = data.reservation;
    }
  });
  langButtons.forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
  document.documentElement.lang = lang.toLowerCase();
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

function openModal() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModalDialog() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

openReservation.addEventListener('click', openModal);
openReservationBottom.addEventListener('click', openModal);

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card) => {
  const heading = card.querySelector('h3');
  const serviceName = heading ? heading.textContent.trim() : '';
  card.addEventListener('click', () => {
    if (serviceSelect && serviceName) {
      const option = Array.from(serviceSelect.options).find((opt) => opt.value === serviceName);
      if (option) {
        serviceSelect.value = option.value;
      }
    }
    openModal();
  });
});

const corporateLinks = document.querySelectorAll('.footer-link-list a');
corporateLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const key = link.dataset.modal;
    const content = corporateContent[key];
    if (content) {
      corporateTitle.textContent = content.title;
      corporateBody.innerHTML = content.body;
      corporateModal.classList.add('is-open');
      corporateModal.setAttribute('aria-hidden', 'false');
    }
  });
});

closeModal.addEventListener('click', closeModalDialog);
modal.addEventListener('click', (event) => {
  if (event.target === modal || event.target.classList.contains('modal-backdrop')) {
    closeModalDialog();
  }
});

closeCorporateModal.addEventListener('click', () => {
  corporateModal.classList.remove('is-open');
  corporateModal.setAttribute('aria-hidden', 'true');
});
corporateModal.addEventListener('click', (event) => {
  if (event.target === corporateModal || event.target.classList.contains('modal-backdrop')) {
    corporateModal.classList.remove('is-open');
    corporateModal.setAttribute('aria-hidden', 'true');
  }
});

reservationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(reservationForm);
  const name = formData.get('name').trim();
  const phone = formData.get('phone').trim();
  const service = formData.get('service');
  const vehicle = formData.get('vehicle');
  const city = formData.get('city');
  const pickup = formData.get('pickup').trim();
  const dropoff = formData.get('dropoff').trim();
  const date = formData.get('date');
  const time = formData.get('time');
  const passengers = formData.get('passengers').trim();
  const baggage = formData.get('baggage').trim();
  const note = formData.get('note').trim();
  let text = 'Yeni%20KARYA%20VIP%20Rezervasyon%20Talebi%0A%0A';
  text += `Ad:%20${encodeURIComponent(name)}%0A`;
  text += `Telefon:%20${encodeURIComponent(phone)}%0A`;
  text += `Şehir:%20${encodeURIComponent(city)}%0A`;
  text += `Hizmet:%20${encodeURIComponent(service)}%0A`;
  text += `Araç:%20${encodeURIComponent(vehicle)}%0A`;
  text += `Alış:%20${encodeURIComponent(pickup)}%0A`;
  text += `Varış:%20${encodeURIComponent(dropoff)}%0A`;
  text += `Tarih:%20${encodeURIComponent(date)}%0A`;
  text += `Saat:%20${encodeURIComponent(time)}%0A`;
  text += `Yolcu:%20${encodeURIComponent(passengers)}%0A`;
  text += `Bagaj:%20${encodeURIComponent(baggage)}%0A`;
  text += `Not:%20${encodeURIComponent(note)}`;
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${text}`;
  window.open(whatsappUrl, '_blank');
  closeModalDialog();
});

setLanguage('TR');
