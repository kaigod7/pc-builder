export const categories = [
  { id: 'case', name: '机箱', required: true },
  { id: 'cpu', name: 'CPU', required: true },
  { id: 'motherboard', name: '主板', required: true },
  { id: 'memory', name: '内存', required: true },
  { id: 'gpu', name: '显卡', required: false },
  { id: 'ssd', name: '固态硬盘', required: true },
  { id: 'hdd', name: '机械硬盘', required: false },
  { id: 'psu', name: '电源', required: true },
  { id: 'cooler', name: '散热器', required: true },
  { id: 'soundcard', name: '声卡', required: false },
  { id: 'nic', name: '网卡', required: false },
  { id: 'monitor', name: '显示器', required: false },
]

export const cpus = [
  // Intel 12th Gen (Alder Lake) - 2021
  { id: 'cpu-1', brand: 'Intel', model: 'Core i9-12900K', socket: 'LGA1700', cores: 16, threads: 24, baseClock: 3.2, boostClock: 5.2, tdp: 125, igpu: 'UHD 770', launchYear: 2021, tier: '旗舰' },
  { id: 'cpu-2', brand: 'Intel', model: 'Core i7-12700K', socket: 'LGA1700', cores: 12, threads: 20, baseClock: 3.6, boostClock: 5.0, tdp: 125, igpu: 'UHD 770', launchYear: 2021, tier: '高端' },
  { id: 'cpu-3', brand: 'Intel', model: 'Core i5-12600K', socket: 'LGA1700', cores: 10, threads: 16, baseClock: 3.7, boostClock: 4.9, tdp: 125, igpu: 'UHD 770', launchYear: 2021, tier: '中端' },
  { id: 'cpu-4', brand: 'Intel', model: 'Core i5-12400F', socket: 'LGA1700', cores: 6, threads: 12, baseClock: 2.5, boostClock: 4.4, tdp: 65, igpu: null, launchYear: 2022, tier: '入门' },

  // Intel 13th Gen (Raptor Lake) - 2022
  { id: 'cpu-5', brand: 'Intel', model: 'Core i9-13900K', socket: 'LGA1700', cores: 24, threads: 32, baseClock: 3.0, boostClock: 5.8, tdp: 125, igpu: 'UHD 770', launchYear: 2022, tier: '旗舰' },
  { id: 'cpu-6', brand: 'Intel', model: 'Core i7-13700K', socket: 'LGA1700', cores: 16, threads: 24, baseClock: 3.4, boostClock: 5.4, tdp: 125, igpu: 'UHD 770', launchYear: 2022, tier: '高端' },
  { id: 'cpu-7', brand: 'Intel', model: 'Core i5-13600K', socket: 'LGA1700', cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.1, tdp: 125, igpu: 'UHD 770', launchYear: 2022, tier: '中端' },
  { id: 'cpu-8', brand: 'Intel', model: 'Core i5-13400F', socket: 'LGA1700', cores: 10, threads: 16, baseClock: 2.5, boostClock: 4.6, tdp: 65, igpu: null, launchYear: 2023, tier: '入门' },

  // Intel 14th Gen (Raptor Lake Refresh) - 2023
  { id: 'cpu-9', brand: 'Intel', model: 'Core i9-14900K', socket: 'LGA1700', cores: 24, threads: 32, baseClock: 3.2, boostClock: 6.0, tdp: 125, igpu: 'UHD 770', launchYear: 2023, tier: '旗舰' },
  { id: 'cpu-10', brand: 'Intel', model: 'Core i7-14700K', socket: 'LGA1700', cores: 20, threads: 28, baseClock: 3.4, boostClock: 5.6, tdp: 125, igpu: 'UHD 770', launchYear: 2023, tier: '高端' },
  { id: 'cpu-11', brand: 'Intel', model: 'Core i5-14600K', socket: 'LGA1700', cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.3, tdp: 125, igpu: 'UHD 770', launchYear: 2023, tier: '中端' },
  { id: 'cpu-12', brand: 'Intel', model: 'Core i5-14400F', socket: 'LGA1700', cores: 10, threads: 16, baseClock: 2.5, boostClock: 4.7, tdp: 65, igpu: null, launchYear: 2024, tier: '入门' },

  // Intel Ultra 200 (Arrow Lake) - 2024
  { id: 'cpu-13', brand: 'Intel', model: 'Core Ultra 9 285K', socket: 'LGA1851', cores: 24, threads: 24, baseClock: 3.7, boostClock: 5.7, tdp: 125, igpu: 'Arc Graphics', launchYear: 2024, tier: '旗舰' },
  { id: 'cpu-14', brand: 'Intel', model: 'Core Ultra 7 265K', socket: 'LGA1851', cores: 20, threads: 20, baseClock: 3.9, boostClock: 5.5, tdp: 125, igpu: 'Arc Graphics', launchYear: 2024, tier: '高端' },
  { id: 'cpu-15', brand: 'Intel', model: 'Core Ultra 5 245K', socket: 'LGA1851', cores: 14, threads: 14, baseClock: 4.2, boostClock: 5.2, tdp: 125, igpu: 'Arc Graphics', launchYear: 2024, tier: '中端' },

  // AMD Ryzen 5000 (Zen 3) - 2020/2021
  { id: 'cpu-16', brand: 'AMD', model: 'Ryzen 9 5950X', socket: 'AM4', cores: 16, threads: 32, baseClock: 3.4, boostClock: 4.9, tdp: 105, igpu: null, launchYear: 2020, tier: '旗舰' },
  { id: 'cpu-17', brand: 'AMD', model: 'Ryzen 9 5900X', socket: 'AM4', cores: 12, threads: 24, baseClock: 3.7, boostClock: 4.8, tdp: 105, igpu: null, launchYear: 2020, tier: '高端' },
  { id: 'cpu-18', brand: 'AMD', model: 'Ryzen 7 5800X', socket: 'AM4', cores: 8, threads: 16, baseClock: 3.8, boostClock: 4.7, tdp: 105, igpu: null, launchYear: 2020, tier: '中端' },
  { id: 'cpu-19', brand: 'AMD', model: 'Ryzen 5 5600X', socket: 'AM4', cores: 6, threads: 12, baseClock: 3.7, boostClock: 4.6, tdp: 65, igpu: null, launchYear: 2020, tier: '中端' },
  { id: 'cpu-20', brand: 'AMD', model: 'Ryzen 5 5600', socket: 'AM4', cores: 6, threads: 12, baseClock: 3.5, boostClock: 4.4, tdp: 65, igpu: null, launchYear: 2022, tier: '入门' },

  // AMD Ryzen 5000G (APU) - 2021
  { id: 'cpu-21', brand: 'AMD', model: 'Ryzen 7 5700G', socket: 'AM4', cores: 8, threads: 16, baseClock: 3.8, boostClock: 4.6, tdp: 65, igpu: 'Vega 8', launchYear: 2021, tier: '中端' },
  { id: 'cpu-22', brand: 'AMD', model: 'Ryzen 5 5600G', socket: 'AM4', cores: 6, threads: 12, baseClock: 3.9, boostClock: 4.4, tdp: 65, igpu: 'Vega 7', launchYear: 2021, tier: '入门' },

  // AMD Ryzen 7000 (Zen 4) - 2022
  { id: 'cpu-23', brand: 'AMD', model: 'Ryzen 9 7950X', socket: 'AM5', cores: 16, threads: 32, baseClock: 4.5, boostClock: 5.7, tdp: 170, igpu: 'RDNA 2', launchYear: 2022, tier: '旗舰' },
  { id: 'cpu-24', brand: 'AMD', model: 'Ryzen 9 7900X', socket: 'AM5', cores: 12, threads: 24, baseClock: 4.7, boostClock: 5.6, tdp: 170, igpu: 'RDNA 2', launchYear: 2022, tier: '高端' },
  { id: 'cpu-25', brand: 'AMD', model: 'Ryzen 7 7700X', socket: 'AM5', cores: 8, threads: 16, baseClock: 4.5, boostClock: 5.4, tdp: 105, igpu: 'RDNA 2', launchYear: 2022, tier: '中端' },
  { id: 'cpu-26', brand: 'AMD', model: 'Ryzen 5 7600X', socket: 'AM5', cores: 6, threads: 12, baseClock: 4.7, boostClock: 5.3, tdp: 105, igpu: 'RDNA 2', launchYear: 2022, tier: '中端' },

  // AMD Ryzen 7000 Non-X / 8000G - 2023
  { id: 'cpu-27', brand: 'AMD', model: 'Ryzen 7 7700', socket: 'AM5', cores: 8, threads: 16, baseClock: 3.8, boostClock: 5.3, tdp: 65, igpu: 'RDNA 2', launchYear: 2023, tier: '中端' },
  { id: 'cpu-28', brand: 'AMD', model: 'Ryzen 5 7600', socket: 'AM5', cores: 6, threads: 12, baseClock: 3.8, boostClock: 5.1, tdp: 65, igpu: 'RDNA 2', launchYear: 2023, tier: '入门' },
  { id: 'cpu-29', brand: 'AMD', model: 'Ryzen 5 7500F', socket: 'AM5', cores: 6, threads: 12, baseClock: 3.7, boostClock: 5.0, tdp: 65, igpu: null, launchYear: 2023, tier: '入门' },
  { id: 'cpu-30', brand: 'AMD', model: 'Ryzen 7 8700G', socket: 'AM5', cores: 8, threads: 16, baseClock: 4.2, boostClock: 5.1, tdp: 65, igpu: 'RDNA 3', launchYear: 2024, tier: '中端' },

  // AMD Ryzen 9000 (Zen 5) - 2024
  { id: 'cpu-31', brand: 'AMD', model: 'Ryzen 9 9950X', socket: 'AM5', cores: 16, threads: 32, baseClock: 4.3, boostClock: 5.7, tdp: 170, igpu: 'RDNA 2', launchYear: 2024, tier: '旗舰' },
  { id: 'cpu-32', brand: 'AMD', model: 'Ryzen 9 9900X', socket: 'AM5', cores: 12, threads: 24, baseClock: 4.4, boostClock: 5.6, tdp: 120, igpu: 'RDNA 2', launchYear: 2024, tier: '高端' },
  { id: 'cpu-33', brand: 'AMD', model: 'Ryzen 7 9700X', socket: 'AM5', cores: 8, threads: 16, baseClock: 3.8, boostClock: 5.5, tdp: 65, igpu: 'RDNA 2', launchYear: 2024, tier: '中端' },
  { id: 'cpu-34', brand: 'AMD', model: 'Ryzen 5 9600X', socket: 'AM5', cores: 6, threads: 12, baseClock: 3.9, boostClock: 5.4, tdp: 65, igpu: 'RDNA 2', launchYear: 2024, tier: '中端' },

  // Intel 12th Gen - non-K and other variants
  { id: 'cpu-35', brand: 'Intel', model: 'Core i9-12900KS', socket: 'LGA1700', cores: 16, threads: 24, baseClock: 3.4, boostClock: 5.5, tdp: 150, igpu: 'UHD 770', launchYear: 2022, tier: '旗舰' },
  { id: 'cpu-36', brand: 'Intel', model: 'Core i7-12700', socket: 'LGA1700', cores: 12, threads: 20, baseClock: 2.1, boostClock: 4.9, tdp: 65, igpu: 'UHD 770', launchYear: 2022, tier: '高端' },
  { id: 'cpu-37', brand: 'Intel', model: 'Core i5-12600', socket: 'LGA1700', cores: 6, threads: 12, baseClock: 3.3, boostClock: 4.8, tdp: 65, igpu: 'UHD 770', launchYear: 2022, tier: '中端' },
  { id: 'cpu-38', brand: 'Intel', model: 'Core i5-12490F', socket: 'LGA1700', cores: 6, threads: 12, baseClock: 3.0, boostClock: 4.6, tdp: 65, igpu: null, launchYear: 2022, tier: '入门' },
  { id: 'cpu-39', brand: 'Intel', model: 'Core i3-12100F', socket: 'LGA1700', cores: 4, threads: 8, baseClock: 3.3, boostClock: 4.3, tdp: 58, igpu: null, launchYear: 2022, tier: '入门' },
  { id: 'cpu-40', brand: 'Intel', model: 'Core i3-12100', socket: 'LGA1700', cores: 4, threads: 8, baseClock: 3.3, boostClock: 4.3, tdp: 60, igpu: 'UHD 730', launchYear: 2022, tier: '入门' },

  // Intel 13th Gen - more variants
  { id: 'cpu-41', brand: 'Intel', model: 'Core i9-13900KS', socket: 'LGA1700', cores: 24, threads: 32, baseClock: 3.2, boostClock: 6.0, tdp: 150, igpu: 'UHD 770', launchYear: 2023, tier: '旗舰' },
  { id: 'cpu-42', brand: 'Intel', model: 'Core i9-13900', socket: 'LGA1700', cores: 24, threads: 32, baseClock: 2.0, boostClock: 5.6, tdp: 65, igpu: 'UHD 770', launchYear: 2023, tier: '旗舰' },
  { id: 'cpu-43', brand: 'Intel', model: 'Core i7-13700', socket: 'LGA1700', cores: 16, threads: 24, baseClock: 2.1, boostClock: 5.2, tdp: 65, igpu: 'UHD 770', launchYear: 2023, tier: '高端' },
  { id: 'cpu-44', brand: 'Intel', model: 'Core i5-13500', socket: 'LGA1700', cores: 14, threads: 20, baseClock: 2.5, boostClock: 4.8, tdp: 65, igpu: 'UHD 770', launchYear: 2023, tier: '中端' },
  { id: 'cpu-45', brand: 'Intel', model: 'Core i5-13400', socket: 'LGA1700', cores: 10, threads: 16, baseClock: 2.5, boostClock: 4.6, tdp: 65, igpu: 'UHD 730', launchYear: 2023, tier: '中端' },
  { id: 'cpu-46', brand: 'Intel', model: 'Core i3-13100F', socket: 'LGA1700', cores: 4, threads: 8, baseClock: 3.4, boostClock: 4.5, tdp: 58, igpu: null, launchYear: 2023, tier: '入门' },

  // Intel 14th Gen - more variants
  { id: 'cpu-47', brand: 'Intel', model: 'Core i9-14900KS', socket: 'LGA1700', cores: 24, threads: 32, baseClock: 3.2, boostClock: 6.2, tdp: 150, igpu: 'UHD 770', launchYear: 2024, tier: '旗舰' },
  { id: 'cpu-48', brand: 'Intel', model: 'Core i9-14900', socket: 'LGA1700', cores: 24, threads: 32, baseClock: 2.0, boostClock: 5.8, tdp: 65, igpu: 'UHD 770', launchYear: 2024, tier: '高端' },
  { id: 'cpu-49', brand: 'Intel', model: 'Core i7-14700', socket: 'LGA1700', cores: 20, threads: 28, baseClock: 2.1, boostClock: 5.4, tdp: 65, igpu: 'UHD 770', launchYear: 2024, tier: '高端' },
  { id: 'cpu-50', brand: 'Intel', model: 'Core i5-14500', socket: 'LGA1700', cores: 14, threads: 20, baseClock: 2.6, boostClock: 5.0, tdp: 65, igpu: 'UHD 770', launchYear: 2024, tier: '中端' },
  { id: 'cpu-51', brand: 'Intel', model: 'Core i5-14400', socket: 'LGA1700', cores: 10, threads: 16, baseClock: 2.5, boostClock: 4.7, tdp: 65, igpu: 'UHD 730', launchYear: 2024, tier: '入门' },
  { id: 'cpu-52', brand: 'Intel', model: 'Core i3-14100F', socket: 'LGA1700', cores: 4, threads: 8, baseClock: 3.5, boostClock: 4.7, tdp: 58, igpu: null, launchYear: 2024, tier: '入门' },

  // Intel Arrow Lake - more variants
  { id: 'cpu-53', brand: 'Intel', model: 'Core Ultra 9 285', socket: 'LGA1851', cores: 24, threads: 24, baseClock: 2.5, boostClock: 5.6, tdp: 65, igpu: 'Arc Graphics', launchYear: 2025, tier: '旗舰' },
  { id: 'cpu-54', brand: 'Intel', model: 'Core Ultra 7 265', socket: 'LGA1851', cores: 20, threads: 20, baseClock: 2.4, boostClock: 5.3, tdp: 65, igpu: 'Arc Graphics', launchYear: 2025, tier: '高端' },
  { id: 'cpu-55', brand: 'Intel', model: 'Core Ultra 5 245', socket: 'LGA1851', cores: 14, threads: 14, baseClock: 3.5, boostClock: 5.1, tdp: 65, igpu: 'Arc Graphics', launchYear: 2025, tier: '中端' },
  { id: 'cpu-56', brand: 'Intel', model: 'Core Ultra 5 235', socket: 'LGA1851', cores: 14, threads: 14, baseClock: 3.4, boostClock: 5.0, tdp: 65, igpu: 'Arc Graphics', launchYear: 2025, tier: '中端' },
  { id: 'cpu-57', brand: 'Intel', model: 'Core Ultra 3 205', socket: 'LGA1851', cores: 8, threads: 8, baseClock: 3.9, boostClock: 4.8, tdp: 65, igpu: 'Arc Graphics', launchYear: 2025, tier: '入门' },

  // AMD Ryzen 5000 - more variants
  { id: 'cpu-58', brand: 'AMD', model: 'Ryzen 9 5950X', socket: 'AM4', cores: 16, threads: 32, baseClock: 3.4, boostClock: 4.9, tdp: 105, igpu: null, launchYear: 2020, tier: '旗舰' },
  { id: 'cpu-59', brand: 'AMD', model: 'Ryzen 7 5800X3D', socket: 'AM4', cores: 8, threads: 16, baseClock: 3.4, boostClock: 4.5, tdp: 105, igpu: null, launchYear: 2022, tier: '高端' },
  { id: 'cpu-60', brand: 'AMD', model: 'Ryzen 7 5800X', socket: 'AM4', cores: 8, threads: 16, baseClock: 3.8, boostClock: 4.7, tdp: 105, igpu: null, launchYear: 2020, tier: '中端' },
  { id: 'cpu-61', brand: 'AMD', model: 'Ryzen 5 5600X3D', socket: 'AM4', cores: 6, threads: 12, baseClock: 3.3, boostClock: 4.4, tdp: 105, igpu: null, launchYear: 2023, tier: '中端' },
  { id: 'cpu-62', brand: 'AMD', model: 'Ryzen 5 5500', socket: 'AM4', cores: 6, threads: 12, baseClock: 3.6, boostClock: 4.2, tdp: 65, igpu: null, launchYear: 2022, tier: '入门' },

  // AMD Ryzen 7000 - more variants
  { id: 'cpu-63', brand: 'AMD', model: 'Ryzen 9 7950X3D', socket: 'AM5', cores: 16, threads: 32, baseClock: 4.2, boostClock: 5.7, tdp: 120, igpu: 'RDNA 2', launchYear: 2023, tier: '旗舰' },
  { id: 'cpu-64', brand: 'AMD', model: 'Ryzen 9 7900X3D', socket: 'AM5', cores: 12, threads: 24, baseClock: 4.4, boostClock: 5.6, tdp: 120, igpu: 'RDNA 2', launchYear: 2023, tier: '高端' },
  { id: 'cpu-65', brand: 'AMD', model: 'Ryzen 7 7800X3D', socket: 'AM5', cores: 8, threads: 16, baseClock: 4.2, boostClock: 5.0, tdp: 120, igpu: 'RDNA 2', launchYear: 2023, tier: '高端' },
  { id: 'cpu-66', brand: 'AMD', model: 'Ryzen 7 7700X', socket: 'AM5', cores: 8, threads: 16, baseClock: 4.5, boostClock: 5.4, tdp: 105, igpu: 'RDNA 2', launchYear: 2022, tier: '中端' },
  { id: 'cpu-67', brand: 'AMD', model: 'Ryzen 5 7600', socket: 'AM5', cores: 6, threads: 12, baseClock: 3.8, boostClock: 5.1, tdp: 65, igpu: 'RDNA 2', launchYear: 2023, tier: '中端' },

  // AMD Ryzen 9000 - more variants
  { id: 'cpu-68', brand: 'AMD', model: 'Ryzen 9 9950X3D', socket: 'AM5', cores: 16, threads: 32, baseClock: 4.3, boostClock: 5.7, tdp: 170, igpu: 'RDNA 2', launchYear: 2025, tier: '旗舰' },
  { id: 'cpu-69', brand: 'AMD', model: 'Ryzen 9 9900X3D', socket: 'AM5', cores: 12, threads: 24, baseClock: 4.4, boostClock: 5.6, tdp: 120, igpu: 'RDNA 2', launchYear: 2025, tier: '高端' },
  { id: 'cpu-70', brand: 'AMD', model: 'Ryzen 7 9800X3D', socket: 'AM5', cores: 8, threads: 16, baseClock: 4.7, boostClock: 5.2, tdp: 120, igpu: 'RDNA 2', launchYear: 2024, tier: '高端' },
  { id: 'cpu-71', brand: 'AMD', model: 'Ryzen 7 9700X', socket: 'AM5', cores: 8, threads: 16, baseClock: 3.8, boostClock: 5.5, tdp: 65, igpu: 'RDNA 2', launchYear: 2024, tier: '中端' },
  { id: 'cpu-72', brand: 'AMD', model: 'Ryzen 5 9600X', socket: 'AM5', cores: 6, threads: 12, baseClock: 3.9, boostClock: 5.4, tdp: 65, igpu: 'RDNA 2', launchYear: 2024, tier: '中端' },
  { id: 'cpu-73', brand: 'AMD', model: 'Ryzen 5 9500F', socket: 'AM5', cores: 6, threads: 12, baseClock: 3.5, boostClock: 4.8, tdp: 65, igpu: null, launchYear: 2025, tier: '入门' },
]

export const motherboards = [
  // Intel LGA1700 - Z690
  { id: 'mb-1', brand: '华硕', model: 'ROG MAXIMUS Z690 HERO', socket: 'LGA1700', chipset: 'Z690', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2021, tier: '旗舰' },
  { id: 'mb-2', brand: '华硕', model: 'TUF GAMING Z690-PLUS WIFI', socket: 'LGA1700', chipset: 'Z690', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 4, pcieVersion: '5.0', launchYear: 2021, tier: '高端' },
  { id: 'mb-3', brand: '微星', model: 'MAG Z690 TOMAHAWK WIFI', socket: 'LGA1700', chipset: 'Z690', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 4, pcieVersion: '5.0', launchYear: 2021, tier: '高端' },

  // Intel LGA1700 - B760
  { id: 'mb-4', brand: '华硕', model: 'TUF GAMING B760M-PLUS WIFI', socket: 'LGA1700', chipset: 'B760', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2023, tier: '中端' },
  { id: 'mb-5', brand: '华硕', model: 'PRIME B760M-A WIFI', socket: 'LGA1700', chipset: 'B760', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2023, tier: '中端' },
  { id: 'mb-6', brand: '微星', model: 'MAG B760M MORTAR WIFI', socket: 'LGA1700', chipset: 'B760', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2023, tier: '中端' },
  { id: 'mb-7', brand: '技嘉', model: 'B760M AORUS ELITE AX', socket: 'LGA1700', chipset: 'B760', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2023, tier: '中端' },

  // Intel LGA1700 - H610
  { id: 'mb-8', brand: '华硕', model: 'PRIME H610M-A D4', socket: 'LGA1700', chipset: 'H610', memoryType: 'DDR4', memorySlots: 2, maxMemory: 64, formFactor: 'mATX', m2Slots: 1, pcieVersion: '4.0', launchYear: 2022, tier: '入门' },
  { id: 'mb-9', brand: '微星', model: 'PRO H610M-G DDR4', socket: 'LGA1700', chipset: 'H610', memoryType: 'DDR4', memorySlots: 2, maxMemory: 64, formFactor: 'mATX', m2Slots: 1, pcieVersion: '4.0', launchYear: 2022, tier: '入门' },

  // Intel LGA1700 - Z790
  { id: 'mb-10', brand: '华硕', model: 'ROG MAXIMUS Z790 HERO', socket: 'LGA1700', chipset: 'Z790', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2022, tier: '旗舰' },
  { id: 'mb-11', brand: '华硕', model: 'ROG STRIX Z790-E GAMING WIFI', socket: 'LGA1700', chipset: 'Z790', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2022, tier: '高端' },
  { id: 'mb-12', brand: '微星', model: 'MPG Z790 CARBON WIFI', socket: 'LGA1700', chipset: 'Z790', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2022, tier: '高端' },

  // Intel LGA1851 - Z890
  { id: 'mb-13', brand: '华硕', model: 'ROG MAXIMUS Z890 HERO', socket: 'LGA1851', chipset: 'Z890', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'ATX', m2Slots: 6, pcieVersion: '5.0', launchYear: 2024, tier: '旗舰' },
  { id: 'mb-14', brand: '华硕', model: 'ROG STRIX Z890-E GAMING WIFI', socket: 'LGA1851', chipset: 'Z890', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2024, tier: '高端' },
  { id: 'mb-15', brand: '微星', model: 'MPG Z890 CARBON WIFI', socket: 'LGA1851', chipset: 'Z890', memoryType: 'DDR5', memorySlots: 4, maxMemory: 256, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2024, tier: '高端' },
  { id: 'mb-16', brand: '技嘉', model: 'Z890 AORUS MASTER', socket: 'LGA1851', chipset: 'Z890', memoryType: 'DDR5', memorySlots: 4, maxMemory: 256, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2024, tier: '高端' },

  // AMD AM4 - X570
  { id: 'mb-17', brand: '华硕', model: 'ROG CROSSHAIR VIII HERO', socket: 'AM4', chipset: 'X570', memoryType: 'DDR4', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2019, tier: '高端' },
  { id: 'mb-18', brand: '微星', model: 'MPG X570 GAMING PRO CARBON', socket: 'AM4', chipset: 'X570', memoryType: 'DDR4', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2019, tier: '高端' },

  // AMD AM4 - B550
  { id: 'mb-19', brand: '华硕', model: 'TUF GAMING B550M-PLUS WIFI II', socket: 'AM4', chipset: 'B550', memoryType: 'DDR4', memorySlots: 4, maxMemory: 128, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2021, tier: '中端' },
  { id: 'mb-20', brand: '微星', model: 'MAG B550M MORTAR', socket: 'AM4', chipset: 'B550', memoryType: 'DDR4', memorySlots: 4, maxMemory: 128, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2020, tier: '中端' },
  { id: 'mb-21', brand: '技嘉', model: 'B550M AORUS ELITE', socket: 'AM4', chipset: 'B550', memoryType: 'DDR4', memorySlots: 4, maxMemory: 128, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2020, tier: '中端' },

  // AMD AM4 - A520
  { id: 'mb-22', brand: '华硕', model: 'PRIME A520M-K', socket: 'AM4', chipset: 'A520', memoryType: 'DDR4', memorySlots: 2, maxMemory: 64, formFactor: 'mATX', m2Slots: 1, pcieVersion: '3.0', launchYear: 2020, tier: '入门' },

  // AMD AM5 - X670/X670E
  { id: 'mb-23', brand: '华硕', model: 'ROG CROSSHAIR X670E HERO', socket: 'AM5', chipset: 'X670E', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2022, tier: '旗舰' },
  { id: 'mb-24', brand: '华硕', model: 'ROG STRIX X670E-E GAMING WIFI', socket: 'AM5', chipset: 'X670E', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 4, pcieVersion: '5.0', launchYear: 2022, tier: '高端' },
  { id: 'mb-25', brand: '微星', model: 'MPG X670E CARBON WIFI', socket: 'AM5', chipset: 'X670E', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 4, pcieVersion: '5.0', launchYear: 2022, tier: '高端' },

  // AMD AM5 - B650/B650E
  { id: 'mb-26', brand: '华硕', model: 'TUF GAMING B650-PLUS WIFI', socket: 'AM5', chipset: 'B650', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 3, pcieVersion: '4.0', launchYear: 2022, tier: '中端' },
  { id: 'mb-27', brand: '华硕', model: 'TUF GAMING B650M-PLUS WIFI', socket: 'AM5', chipset: 'B650', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2022, tier: '中端' },
  { id: 'mb-28', brand: '微星', model: 'MAG B650M MORTAR WIFI', socket: 'AM5', chipset: 'B650', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2022, tier: '中端' },
  { id: 'mb-29', brand: '技嘉', model: 'B650M AORUS ELITE AX', socket: 'AM5', chipset: 'B650', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2022, tier: '中端' },

  // AMD AM5 - X870/X870E - 2024
  { id: 'mb-30', brand: '华硕', model: 'ROG CROSSHAIR X870E HERO', socket: 'AM5', chipset: 'X870E', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'ATX', m2Slots: 5, pcieVersion: '5.0', launchYear: 2024, tier: '旗舰' },
  { id: 'mb-31', brand: '微星', model: 'MPG X870E CARBON WIFI', socket: 'AM5', chipset: 'X870E', memoryType: 'DDR5', memorySlots: 4, maxMemory: 256, formFactor: 'ATX', m2Slots: 4, pcieVersion: '5.0', launchYear: 2024, tier: '高端' },

  // Intel B860 (Arrow Lake mid-range) - 2025
  { id: 'mb-32', brand: '华硕', model: 'TUF GAMING B860-PLUS WIFI', socket: 'LGA1851', chipset: 'B860', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'ATX', m2Slots: 3, pcieVersion: '4.0', launchYear: 2025, tier: '中端' },
  { id: 'mb-33', brand: '华硕', model: 'PRIME B860M-K', socket: 'LGA1851', chipset: 'B860', memoryType: 'DDR5', memorySlots: 4, maxMemory: 192, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2025, tier: '中端' },
  { id: 'mb-34', brand: '微星', model: 'MAG B860 TOMAHAWK WIFI', socket: 'LGA1851', chipset: 'B860', memoryType: 'DDR5', memorySlots: 4, maxMemory: 256, formFactor: 'ATX', m2Slots: 3, pcieVersion: '4.0', launchYear: 2025, tier: '中端' },
  { id: 'mb-35', brand: '技嘉', model: 'B860M AORUS ELITE WIFI6E', socket: 'LGA1851', chipset: 'B860', memoryType: 'DDR5', memorySlots: 4, maxMemory: 256, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2025, tier: '中端' },

  // Additional Intel Z790 boards
  { id: 'mb-36', brand: '华硕', model: 'PRIME Z790-P WIFI', socket: 'LGA1700', chipset: 'Z790', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 3, pcieVersion: '4.0', launchYear: 2022, tier: '中端' },
  { id: 'mb-37', brand: '微星', model: 'PRO Z790-A WIFI', socket: 'LGA1700', chipset: 'Z790', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 4, pcieVersion: '4.0', launchYear: 2023, tier: '中端' },
  { id: 'mb-38', brand: '华擎', model: 'Z790 PG Lightning', socket: 'LGA1700', chipset: 'Z790', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 3, pcieVersion: '4.0', launchYear: 2023, tier: '入门' },

  // Additional AMD B650 boards
  { id: 'mb-39', brand: '华硕', model: 'PRIME B650-PLUS', socket: 'AM5', chipset: 'B650', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'ATX', m2Slots: 3, pcieVersion: '4.0', launchYear: 2022, tier: '中端' },
  { id: 'mb-40', brand: '华擎', model: 'B650M Pro RS', socket: 'AM5', chipset: 'B650', memoryType: 'DDR5', memorySlots: 4, maxMemory: 128, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2022, tier: '中端' },
  { id: 'mb-41', brand: '映泰', model: 'B650MP-E PRO', socket: 'AM5', chipset: 'B650', memoryType: 'DDR5', memorySlots: 4, maxMemory: 96, formFactor: 'mATX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2023, tier: '入门' },

  // ITX boards
  { id: 'mb-42', brand: '华硕', model: 'ROG STRIX B650E-I GAMING WIFI', socket: 'AM5', chipset: 'B650E', memoryType: 'DDR5', memorySlots: 2, maxMemory: 96, formFactor: 'ITX', m2Slots: 2, pcieVersion: '5.0', launchYear: 2022, tier: '高端' },
  { id: 'mb-43', brand: '华硕', model: 'ROG STRIX Z790-I GAMING WIFI', socket: 'LGA1700', chipset: 'Z790', memoryType: 'DDR5', memorySlots: 2, maxMemory: 96, formFactor: 'ITX', m2Slots: 3, pcieVersion: '5.0', launchYear: 2023, tier: '高端' },
  { id: 'mb-44', brand: '精粤', model: 'B760I SNOW DREAM', socket: 'LGA1700', chipset: 'B760', memoryType: 'DDR5', memorySlots: 2, maxMemory: 96, formFactor: 'ITX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2023, tier: '入门' },
  { id: 'mb-45', brand: '精粤', model: 'B650I GAMING', socket: 'AM5', chipset: 'B650', memoryType: 'DDR5', memorySlots: 2, maxMemory: 96, formFactor: 'ITX', m2Slots: 2, pcieVersion: '4.0', launchYear: 2024, tier: '入门' },
]

export const gpus = [
  // NVIDIA RTX 30 Series - 2020/2021
  { id: 'gpu-1', brand: 'NVIDIA', model: 'GeForce RTX 3090', chipset: 'GA102', vram: 24, vramType: 'GDDR6X', tdp: 350, pcieVersion: '4.0', length: 336, launchYear: 2020, tier: '旗舰' },
  { id: 'gpu-2', brand: 'NVIDIA', model: 'GeForce RTX 3080', chipset: 'GA102', vram: 10, vramType: 'GDDR6X', tdp: 320, pcieVersion: '4.0', length: 285, launchYear: 2020, tier: '高端' },
  { id: 'gpu-3', brand: 'NVIDIA', model: 'GeForce RTX 3070', chipset: 'GA104', vram: 8, vramType: 'GDDR6', tdp: 220, pcieVersion: '4.0', length: 242, launchYear: 2020, tier: '高端' },
  { id: 'gpu-4', brand: 'NVIDIA', model: 'GeForce RTX 3060 Ti', chipset: 'GA104', vram: 8, vramType: 'GDDR6', tdp: 200, pcieVersion: '4.0', length: 242, launchYear: 2020, tier: '中端' },
  { id: 'gpu-5', brand: 'NVIDIA', model: 'GeForce RTX 3060', chipset: 'GA106', vram: 12, vramType: 'GDDR6', tdp: 170, pcieVersion: '4.0', length: 242, launchYear: 2021, tier: '中端' },
  { id: 'gpu-6', brand: 'NVIDIA', model: 'GeForce RTX 3050', chipset: 'GA106', vram: 8, vramType: 'GDDR6', tdp: 130, pcieVersion: '4.0', length: 224, launchYear: 2022, tier: '入门' },

  // NVIDIA RTX 40 Series - 2022/2023
  { id: 'gpu-7', brand: 'NVIDIA', model: 'GeForce RTX 4090', chipset: 'AD102', vram: 24, vramType: 'GDDR6X', tdp: 450, pcieVersion: '4.0', length: 336, launchYear: 2022, tier: '旗舰' },
  { id: 'gpu-8', brand: 'NVIDIA', model: 'GeForce RTX 4080 SUPER', chipset: 'AD103', vram: 16, vramType: 'GDDR6X', tdp: 320, pcieVersion: '4.0', length: 310, launchYear: 2024, tier: '高端' },
  { id: 'gpu-9', brand: 'NVIDIA', model: 'GeForce RTX 4080', chipset: 'AD103', vram: 16, vramType: 'GDDR6X', tdp: 320, pcieVersion: '4.0', length: 310, launchYear: 2022, tier: '高端' },
  { id: 'gpu-10', brand: 'NVIDIA', model: 'GeForce RTX 4070 Ti SUPER', chipset: 'AD103', vram: 16, vramType: 'GDDR6X', tdp: 285, pcieVersion: '4.0', length: 287, launchYear: 2024, tier: '高端' },
  { id: 'gpu-11', brand: 'NVIDIA', model: 'GeForce RTX 4070 Ti', chipset: 'AD104', vram: 12, vramType: 'GDDR6X', tdp: 285, pcieVersion: '4.0', length: 267, launchYear: 2023, tier: '中高端' },
  { id: 'gpu-12', brand: 'NVIDIA', model: 'GeForce RTX 4070 SUPER', chipset: 'AD104', vram: 12, vramType: 'GDDR6X', tdp: 220, pcieVersion: '4.0', length: 267, launchYear: 2024, tier: '中高端' },
  { id: 'gpu-13', brand: 'NVIDIA', model: 'GeForce RTX 4070', chipset: 'AD104', vram: 12, vramType: 'GDDR6X', tdp: 200, pcieVersion: '4.0', length: 244, launchYear: 2023, tier: '中端' },
  { id: 'gpu-14', brand: 'NVIDIA', model: 'GeForce RTX 4060 Ti', chipset: 'AD106', vram: 8, vramType: 'GDDR6', tdp: 160, pcieVersion: '4.0', length: 244, launchYear: 2023, tier: '中端' },
  { id: 'gpu-15', brand: 'NVIDIA', model: 'GeForce RTX 4060', chipset: 'AD107', vram: 8, vramType: 'GDDR6', tdp: 115, pcieVersion: '4.0', length: 240, launchYear: 2023, tier: '入门' },

  // NVIDIA RTX 50 Series - 2025
  { id: 'gpu-16', brand: 'NVIDIA', model: 'GeForce RTX 5090', chipset: 'GB202', vram: 32, vramType: 'GDDR7', tdp: 575, pcieVersion: '5.0', length: 357, launchYear: 2025, tier: '旗舰' },
  { id: 'gpu-17', brand: 'NVIDIA', model: 'GeForce RTX 5080', chipset: 'GB203', vram: 16, vramType: 'GDDR7', tdp: 360, pcieVersion: '5.0', length: 304, launchYear: 2025, tier: '高端' },
  { id: 'gpu-18', brand: 'NVIDIA', model: 'GeForce RTX 5070 Ti', chipset: 'GB203', vram: 16, vramType: 'GDDR7', tdp: 300, pcieVersion: '5.0', length: 272, launchYear: 2025, tier: '高端' },
  { id: 'gpu-19', brand: 'NVIDIA', model: 'GeForce RTX 5070', chipset: 'GB205', vram: 12, vramType: 'GDDR7', tdp: 250, pcieVersion: '5.0', length: 272, launchYear: 2025, tier: '中高端' },
  { id: 'gpu-20', brand: 'NVIDIA', model: 'GeForce RTX 5060 Ti', chipset: 'GB206', vram: 16, vramType: 'GDDR7', tdp: 180, pcieVersion: '5.0', length: 272, launchYear: 2025, tier: '中端' },

  // AMD RX 6000 Series - 2020/2021
  { id: 'gpu-21', brand: 'AMD', model: 'Radeon RX 6900 XT', chipset: 'Navi 21', vram: 16, vramType: 'GDDR6', tdp: 300, pcieVersion: '4.0', length: 267, launchYear: 2020, tier: '高端' },
  { id: 'gpu-22', brand: 'AMD', model: 'Radeon RX 6800 XT', chipset: 'Navi 21', vram: 16, vramType: 'GDDR6', tdp: 300, pcieVersion: '4.0', length: 267, launchYear: 2020, tier: '高端' },
  { id: 'gpu-23', brand: 'AMD', model: 'Radeon RX 6800', chipset: 'Navi 21', vram: 16, vramType: 'GDDR6', tdp: 250, pcieVersion: '4.0', length: 267, launchYear: 2020, tier: '中高端' },
  { id: 'gpu-24', brand: 'AMD', model: 'Radeon RX 6700 XT', chipset: 'Navi 22', vram: 12, vramType: 'GDDR6', tdp: 230, pcieVersion: '4.0', length: 267, launchYear: 2021, tier: '中端' },
  { id: 'gpu-25', brand: 'AMD', model: 'Radeon RX 6600', chipset: 'Navi 23', vram: 8, vramType: 'GDDR6', tdp: 132, pcieVersion: '4.0', length: 241, launchYear: 2021, tier: '中端' },
  { id: 'gpu-26', brand: 'AMD', model: 'Radeon RX 6500 XT', chipset: 'Navi 24', vram: 4, vramType: 'GDDR6', tdp: 107, pcieVersion: '4.0', length: 241, launchYear: 2022, tier: '入门' },

  // AMD RX 7000 Series - 2022/2023
  { id: 'gpu-27', brand: 'AMD', model: 'Radeon RX 7900 XTX', chipset: 'Navi 31', vram: 24, vramType: 'GDDR6', tdp: 355, pcieVersion: '4.0', length: 287, launchYear: 2022, tier: '旗舰' },
  { id: 'gpu-28', brand: 'AMD', model: 'Radeon RX 7900 XT', chipset: 'Navi 31', vram: 20, vramType: 'GDDR6', tdp: 315, pcieVersion: '4.0', length: 276, launchYear: 2022, tier: '高端' },
  { id: 'gpu-29', brand: 'AMD', model: 'Radeon RX 7800 XT', chipset: 'Navi 32', vram: 16, vramType: 'GDDR6', tdp: 263, pcieVersion: '4.0', length: 267, launchYear: 2023, tier: '中高端' },
  { id: 'gpu-30', brand: 'AMD', model: 'Radeon RX 7700 XT', chipset: 'Navi 32', vram: 12, vramType: 'GDDR6', tdp: 245, pcieVersion: '4.0', length: 269, launchYear: 2023, tier: '中端' },
  { id: 'gpu-31', brand: 'AMD', model: 'Radeon RX 7600', chipset: 'Navi 33', vram: 8, vramType: 'GDDR6', tdp: 165, pcieVersion: '4.0', length: 204, launchYear: 2023, tier: '入门' },

  // AMD RX 9000 Series - 2025
  { id: 'gpu-32', brand: 'AMD', model: 'Radeon RX 9070 XT', chipset: 'Navi 48', vram: 16, vramType: 'GDDR6', tdp: 304, pcieVersion: '4.0', length: 272, launchYear: 2025, tier: '高端' },
  { id: 'gpu-33', brand: 'AMD', model: 'Radeon RX 9070', chipset: 'Navi 48', vram: 16, vramType: 'GDDR6', tdp: 220, pcieVersion: '4.0', length: 272, launchYear: 2025, tier: '中高端' },
  { id: 'gpu-34', brand: 'AMD', model: 'Radeon RX 9060 XT', chipset: 'Navi 44', vram: 16, vramType: 'GDDR6', tdp: 185, pcieVersion: '4.0', length: 272, launchYear: 2025, tier: '中端' },

  // Additional NVIDIA RTX 30 Series
  { id: 'gpu-35', brand: 'NVIDIA', model: 'GeForce RTX 3090 Ti', chipset: 'GA102', vram: 24, vramType: 'GDDR6X', tdp: 450, pcieVersion: '4.0', length: 336, launchYear: 2022, tier: '旗舰' },
  { id: 'gpu-36', brand: 'NVIDIA', model: 'GeForce RTX 3080 Ti', chipset: 'GA102', vram: 12, vramType: 'GDDR6X', tdp: 350, pcieVersion: '4.0', length: 285, launchYear: 2021, tier: '高端' },
  { id: 'gpu-37', brand: 'NVIDIA', model: 'GeForce RTX 3070 Ti', chipset: 'GA104', vram: 8, vramType: 'GDDR6X', tdp: 290, pcieVersion: '4.0', length: 267, launchYear: 2021, tier: '高端' },
  { id: 'gpu-38', brand: 'NVIDIA', model: 'GeForce RTX 3060 8GB', chipset: 'GA106', vram: 8, vramType: 'GDDR6', tdp: 170, pcieVersion: '4.0', length: 242, launchYear: 2022, tier: '中端' },

  // Additional NVIDIA RTX 40 Series
  { id: 'gpu-39', brand: 'NVIDIA', model: 'GeForce RTX 4090D', chipset: 'AD102', vram: 24, vramType: 'GDDR6X', tdp: 425, pcieVersion: '4.0', length: 336, launchYear: 2024, tier: '旗舰' },
  { id: 'gpu-40', brand: 'NVIDIA', model: 'GeForce RTX 4070 SUPER 12GB', chipset: 'AD104', vram: 12, vramType: 'GDDR6X', tdp: 220, pcieVersion: '4.0', length: 267, launchYear: 2024, tier: '中高端' },
  { id: 'gpu-41', brand: 'NVIDIA', model: 'GeForce RTX 4060 Ti 16GB', chipset: 'AD106', vram: 16, vramType: 'GDDR6', tdp: 165, pcieVersion: '4.0', length: 244, launchYear: 2023, tier: '中端' },
  { id: 'gpu-42', brand: 'NVIDIA', model: 'GeForce RTX 4060 8GB', chipset: 'AD107', vram: 8, vramType: 'GDDR6', tdp: 115, pcieVersion: '4.0', length: 240, launchYear: 2023, tier: '入门' },

  // Additional AMD RX 6000 Series
  { id: 'gpu-43', brand: 'AMD', model: 'Radeon RX 6950 XT', chipset: 'Navi 21', vram: 16, vramType: 'GDDR6', tdp: 335, pcieVersion: '4.0', length: 267, launchYear: 2022, tier: '旗舰' },
  { id: 'gpu-44', brand: 'AMD', model: 'Radeon RX 6750 XT', chipset: 'Navi 22', vram: 12, vramType: 'GDDR6', tdp: 250, pcieVersion: '4.0', length: 267, launchYear: 2022, tier: '中端' },
  { id: 'gpu-45', brand: 'AMD', model: 'Radeon RX 6650 XT', chipset: 'Navi 23', vram: 8, vramType: 'GDDR6', tdp: 180, pcieVersion: '4.0', length: 241, launchYear: 2022, tier: '中端' },
  { id: 'gpu-46', brand: 'AMD', model: 'Radeon RX 6400', chipset: 'Navi 24', vram: 4, vramType: 'GDDR6', tdp: 53, pcieVersion: '4.0', length: 170, launchYear: 2022, tier: '入门' },

  // Additional AMD RX 7000 Series
  { id: 'gpu-47', brand: 'AMD', model: 'Radeon RX 7900 GRE', chipset: 'Navi 31', vram: 16, vramType: 'GDDR6', tdp: 260, pcieVersion: '4.0', length: 267, launchYear: 2023, tier: '高端' },
  { id: 'gpu-48', brand: 'AMD', model: 'Radeon RX 7600 XT', chipset: 'Navi 33', vram: 16, vramType: 'GDDR6', tdp: 190, pcieVersion: '4.0', length: 204, launchYear: 2024, tier: '中端' },
  { id: 'gpu-49', brand: 'AMD', model: 'Radeon RX 7500F', chipset: 'Navi 33', vram: 8, vramType: 'GDDR6', tdp: 150, pcieVersion: '4.0', length: 200, launchYear: 2024, tier: '入门' },

  // Intel Arc GPUs
  { id: 'gpu-50', brand: 'Intel', model: 'Arc A770 16GB', chipset: 'ACM-G10', vram: 16, vramType: 'GDDR6', tdp: 225, pcieVersion: '4.0', length: 267, launchYear: 2022, tier: '中端' },
  { id: 'gpu-51', brand: 'Intel', model: 'Arc A750 8GB', chipset: 'ACM-G10', vram: 8, vramType: 'GDDR6', tdp: 225, pcieVersion: '4.0', length: 267, launchYear: 2022, tier: '中端' },
  { id: 'gpu-52', brand: 'Intel', model: 'Arc A580 8GB', chipset: 'ACM-G10', vram: 8, vramType: 'GDDR6', tdp: 175, pcieVersion: '4.0', length: 253, launchYear: 2023, tier: '入门' },
  { id: 'gpu-53', brand: 'Intel', model: 'Arc A380 6GB', chipset: 'ACM-G11', vram: 6, vramType: 'GDDR6', tdp: 75, pcieVersion: '4.0', length: 173, launchYear: 2022, tier: '入门' },
]

export const memoryModules = [
  // DDR4
  { id: 'ram-1', brand: '芝奇', model: 'Trident Z RGB DDR4-3600 16GB (8GBx2)', type: 'DDR4', capacity: 16, speed: 3600, channels: 2, latency: 'CL18', launchYear: 2021, tier: '高端' },
  { id: 'ram-2', brand: '芝奇', model: 'Trident Z RGB DDR4-3600 32GB (16GBx2)', type: 'DDR4', capacity: 32, speed: 3600, channels: 2, latency: 'CL18', launchYear: 2021, tier: '高端' },
  { id: 'ram-3', brand: '海盗船', model: 'Vengeance RGB Pro DDR4-3200 16GB (8GBx2)', type: 'DDR4', capacity: 16, speed: 3200, channels: 2, latency: 'CL16', launchYear: 2021, tier: '中端' },
  { id: 'ram-4', brand: '金士顿', model: 'Fury Beast DDR4-3200 16GB (8GBx2)', type: 'DDR4', capacity: 16, speed: 3200, channels: 2, latency: 'CL16', launchYear: 2021, tier: '中端' },
  { id: 'ram-5', brand: '光威', model: '天策 DDR4-3200 16GB (8GBx2)', type: 'DDR4', capacity: 16, speed: 3200, channels: 2, latency: 'CL18', launchYear: 2022, tier: '入门' },
  { id: 'ram-6', brand: '金士顿', model: 'Fury Beast DDR4-3200 32GB (16GBx2)', type: 'DDR4', capacity: 32, speed: 3200, channels: 2, latency: 'CL16', launchYear: 2021, tier: '中端' },

  // DDR5
  { id: 'ram-7', brand: '芝奇', model: 'Trident Z5 RGB DDR5-6000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6000, channels: 2, latency: 'CL30', launchYear: 2022, tier: '旗舰' },
  { id: 'ram-8', brand: '芝奇', model: 'Trident Z5 RGB DDR5-6400 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6400, channels: 2, latency: 'CL32', launchYear: 2023, tier: '旗舰' },
  { id: 'ram-9', brand: '芝奇', model: 'Trident Z5 RGB DDR5-7200 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 7200, channels: 2, latency: 'CL34', launchYear: 2023, tier: '旗舰' },
  { id: 'ram-10', brand: '海盗船', model: 'Vengeance DDR5-5600 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 5600, channels: 2, latency: 'CL36', launchYear: 2022, tier: '高端' },
  { id: 'ram-11', brand: '金士顿', model: 'Fury Beast DDR5-5600 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 5600, channels: 2, latency: 'CL40', launchYear: 2022, tier: '高端' },
  { id: 'ram-12', brand: '光威', model: '天策 DDR5-5600 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 5600, channels: 2, latency: 'CL40', launchYear: 2023, tier: '中端' },
  { id: 'ram-13', brand: '金百达', model: '刃 DDR5-6000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6000, channels: 2, latency: 'CL30', launchYear: 2023, tier: '中端' },
  { id: 'ram-14', brand: '阿斯加特', model: '女武神 DDR5-6000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6000, channels: 2, latency: 'CL30', launchYear: 2023, tier: '中端' },
  { id: 'ram-15', brand: '金士顿', model: 'Fury Beast DDR5-5200 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 5200, channels: 2, latency: 'CL40', launchYear: 2022, tier: '入门' },

  // Additional DDR4
  { id: 'ram-16', brand: '芝奇', model: 'Trident Z RGB DDR4-3200 16GB (8GBx2)', type: 'DDR4', capacity: 16, speed: 3200, channels: 2, latency: 'CL16', launchYear: 2021, tier: '中端' },
  { id: 'ram-17', brand: '英睿达', model: 'Ballistix DDR4-3200 16GB (8GBx2)', type: 'DDR4', capacity: 16, speed: 3200, channels: 2, latency: 'CL16', launchYear: 2021, tier: '中端' },
  { id: 'ram-18', brand: '十铨', model: 'Delta RGB DDR4-3600 32GB (16GBx2)', type: 'DDR4', capacity: 32, speed: 3600, channels: 2, latency: 'CL18', launchYear: 2021, tier: '高端' },
  { id: 'ram-19', brand: '宇瞻', model: 'NOX DDR4-3200 16GB (8GBx2)', type: 'DDR4', capacity: 16, speed: 3200, channels: 2, latency: 'CL16', launchYear: 2022, tier: '入门' },
  { id: 'ram-20', brand: '玖合', model: 'DDR4-3200 16GB (8GBx2)', type: 'DDR4', capacity: 16, speed: 3200, channels: 2, latency: 'CL22', launchYear: 2022, tier: '入门' },

  // Additional DDR5
  { id: 'ram-21', brand: '十铨', model: 'Delta RGB DDR5-6000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6000, channels: 2, latency: 'CL30', launchYear: 2023, tier: '高端' },
  { id: 'ram-22', brand: '宏碁掠夺者', model: 'Vesta II DDR5-6000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6000, channels: 2, latency: 'CL30', launchYear: 2023, tier: '高端' },
  { id: 'ram-23', brand: '英睿达', model: 'Pro DDR5-5600 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 5600, channels: 2, latency: 'CL46', launchYear: 2023, tier: '中端' },
  { id: 'ram-24', brand: '宇瞻', model: 'NOX DDR5-6000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6000, channels: 2, latency: 'CL30', launchYear: 2024, tier: '中端' },
  { id: 'ram-25', brand: '雷克沙', model: 'Ares DDR5-6000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6000, channels: 2, latency: 'CL30', launchYear: 2023, tier: '中端' },
  { id: 'ram-26', brand: '玖合', model: 'DDR5-5600 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 5600, channels: 2, latency: 'CL40', launchYear: 2023, tier: '入门' },
  { id: 'ram-27', brand: '威刚', model: 'XPG Lancer DDR5-6000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 6000, channels: 2, latency: 'CL30', launchYear: 2022, tier: '高端' },
  { id: 'ram-28', brand: '芝奇', model: 'Trident Z5 RGB DDR5-8000 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 8000, channels: 2, latency: 'CL38', launchYear: 2024, tier: '旗舰' },
  { id: 'ram-29', brand: '芝奇', model: 'Trident Z5 RGB DDR5-6800 48GB (24GBx2)', type: 'DDR5', capacity: 48, speed: 6800, channels: 2, latency: 'CL34', launchYear: 2024, tier: '旗舰' },
  { id: 'ram-30', brand: '十铨', model: 'T-FORCE XTREEM DDR5-7600 32GB (16GBx2)', type: 'DDR5', capacity: 32, speed: 7600, channels: 2, latency: 'CL36', launchYear: 2024, tier: '旗舰' },
]

export const ssds = [
  // NVMe Gen4
  { id: 'ssd-1', brand: '三星', model: '980 PRO 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7000, writeSpeed: 5000, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2021, tier: '高端' },
  { id: 'ssd-2', brand: '三星', model: '980 PRO 2TB', interface: 'NVMe', formFactor: 'M.2', capacity: 2000, readSpeed: 7000, writeSpeed: 5100, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2021, tier: '旗舰' },
  { id: 'ssd-3', brand: '三星', model: '990 PRO 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7450, writeSpeed: 6900, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2022, tier: '旗舰' },
  { id: 'ssd-4', brand: '三星', model: '990 PRO 2TB', interface: 'NVMe', formFactor: 'M.2', capacity: 2000, readSpeed: 7450, writeSpeed: 6900, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2022, tier: '旗舰' },
  { id: 'ssd-5', brand: '西部数据', model: 'SN850X 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7300, writeSpeed: 6300, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2022, tier: '高端' },
  { id: 'ssd-6', brand: '西部数据', model: 'SN850X 2TB', interface: 'NVMe', formFactor: 'M.2', capacity: 2000, readSpeed: 7300, writeSpeed: 6600, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2022, tier: '高端' },
  { id: 'ssd-7', brand: '致态', model: 'TiPlus7100 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7000, writeSpeed: 6000, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '高端' },
  { id: 'ssd-8', brand: '致态', model: 'TiPlus7100 2TB', interface: 'NVMe', formFactor: 'M.2', capacity: 2000, readSpeed: 7000, writeSpeed: 6000, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '高端' },
  { id: 'ssd-9', brand: '铠侠', model: 'EXCERIA PLUS G3 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 5000, writeSpeed: 3900, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '中端' },
  { id: 'ssd-10', brand: '宏碁掠夺者', model: 'GM7 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7200, writeSpeed: 6300, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '中端' },
  { id: 'ssd-11', brand: '爱国者', model: 'P7000Z 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7450, writeSpeed: 6750, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '中端' },
  { id: 'ssd-12', brand: '梵想', model: 'S790 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7450, writeSpeed: 6750, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '入门' },
  { id: 'ssd-13', brand: '金士顿', model: 'NV2 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 3500, writeSpeed: 2100, pcieVersion: '4.0', nandType: 'QLC', launchYear: 2022, tier: '入门' },
  { id: 'ssd-14', brand: '金士顿', model: 'NV3 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 6000, writeSpeed: 4000, pcieVersion: '4.0', nandType: 'QLC', launchYear: 2024, tier: '入门' },

  // NVMe Gen5
  { id: 'ssd-15', brand: '三星', model: '9100 PRO 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 14800, writeSpeed: 13400, pcieVersion: '5.0', nandType: 'TLC', launchYear: 2025, tier: '旗舰' },
  { id: 'ssd-16', brand: '西部数据', model: 'SN8100 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 14900, writeSpeed: 14000, pcieVersion: '5.0', nandType: 'TLC', launchYear: 2025, tier: '旗舰' },
  { id: 'ssd-17', brand: '致态', model: 'TiPro9000 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 14500, writeSpeed: 13000, pcieVersion: '5.0', nandType: 'TLC', launchYear: 2025, tier: '高端' },

  // Additional Gen4 SSDs
  { id: 'ssd-18', brand: '致态', model: 'TiPlus7100 4TB', interface: 'NVMe', formFactor: 'M.2', capacity: 4000, readSpeed: 7000, writeSpeed: 6000, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '高端' },
  { id: 'ssd-19', brand: '三星', model: '990 PRO 4TB', interface: 'NVMe', formFactor: 'M.2', capacity: 4000, readSpeed: 7450, writeSpeed: 6900, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '旗舰' },
  { id: 'ssd-20', brand: '西部数据', model: 'SN850X 4TB', interface: 'NVMe', formFactor: 'M.2', capacity: 4000, readSpeed: 7300, writeSpeed: 6600, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '高端' },
  { id: 'ssd-21', brand: '英睿达', model: 'T500 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7300, writeSpeed: 6800, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '高端' },
  { id: 'ssd-22', brand: '海力士', model: 'Platinum P41 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7000, writeSpeed: 6500, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2022, tier: '高端' },
  { id: 'ssd-23', brand: '浦科特', model: 'M10PGN 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7000, writeSpeed: 5000, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2021, tier: '高端' },
  { id: 'ssd-24', brand: '朗科', model: 'NV7000 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7200, writeSpeed: 5500, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2022, tier: '中端' },
  { id: 'ssd-25', brand: '达墨', model: '天秤座 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 5000, writeSpeed: 4500, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2023, tier: '入门' },
  { id: 'ssd-26', brand: '幻隐', model: 'HV2000 Pro 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 3500, writeSpeed: 3000, pcieVersion: '3.0', nandType: 'TLC', launchYear: 2022, tier: '入门' },
  { id: 'ssd-27', brand: '金士顿', model: 'KC3000 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7000, writeSpeed: 6000, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2022, tier: '高端' },
  { id: 'ssd-28', brand: 'Solidigm', model: 'P44 Pro 1TB', interface: 'NVMe', formFactor: 'M.2', capacity: 1000, readSpeed: 7000, writeSpeed: 6500, pcieVersion: '4.0', nandType: 'TLC', launchYear: 2022, tier: '高端' },

  // SATA SSDs
  { id: 'ssd-29', brand: '三星', model: '870 EVO 1TB', interface: 'SATA', formFactor: '2.5"', capacity: 1000, readSpeed: 560, writeSpeed: 530, pcieVersion: '3.0', nandType: 'TLC', launchYear: 2021, tier: '中端' },
  { id: 'ssd-30', brand: '致态', model: 'SC001 Active 1TB', interface: 'SATA', formFactor: '2.5"', capacity: 1000, readSpeed: 520, writeSpeed: 510, pcieVersion: '3.0', nandType: 'TLC', launchYear: 2021, tier: '入门' },
]

export const hdds = [
  { id: 'hdd-1', brand: '希捷', model: 'Barracuda 1TB', capacity: 1000, rpm: 7200, cache: 64, formFactor: '3.5"', launchYear: 2021, tier: '入门' },
  { id: 'hdd-2', brand: '希捷', model: 'Barracuda 2TB', capacity: 2000, rpm: 7200, cache: 256, formFactor: '3.5"', launchYear: 2021, tier: '入门' },
  { id: 'hdd-3', brand: '西部数据', model: 'Blue 1TB', capacity: 1000, rpm: 7200, cache: 64, formFactor: '3.5"', launchYear: 2021, tier: '入门' },
  { id: 'hdd-4', brand: '西部数据', model: 'Blue 2TB', capacity: 2000, rpm: 5400, cache: 256, formFactor: '3.5"', launchYear: 2021, tier: '入门' },
  { id: 'hdd-5', brand: '东芝', model: 'P300 2TB', capacity: 2000, rpm: 7200, cache: 64, formFactor: '3.5"', launchYear: 2021, tier: '入门' },
  { id: 'hdd-6', brand: '希捷', model: 'IronWolf 4TB NAS', capacity: 4000, rpm: 5400, cache: 256, formFactor: '3.5"', launchYear: 2021, tier: '中端' },
  { id: 'hdd-7', brand: '西部数据', model: 'Black 2TB', capacity: 2000, rpm: 7200, cache: 64, formFactor: '3.5"', launchYear: 2021, tier: '高端' },
  { id: 'hdd-8', brand: '希捷', model: 'Barracuda 4TB', capacity: 4000, rpm: 5400, cache: 256, formFactor: '3.5"', launchYear: 2021, tier: '入门' },
  { id: 'hdd-9', brand: '东芝', model: 'N300 4TB NAS', capacity: 4000, rpm: 7200, cache: 128, formFactor: '3.5"', launchYear: 2021, tier: '中端' },
]

export const psus = [
  { id: 'psu-1', brand: '海韵', model: 'FOCUS GX-650', wattage: 650, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2021, tier: '高端' },
  { id: 'psu-2', brand: '海韵', model: 'FOCUS GX-750', wattage: 750, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2021, tier: '高端' },
  { id: 'psu-3', brand: '海韵', model: 'FOCUS GX-850', wattage: 850, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2021, tier: '高端' },
  { id: 'psu-4', brand: '海韵', model: 'PRIME TX-1000', wattage: 1000, efficiency: '80Plus Titanium', modular: 'Full', formFactor: 'ATX', launchYear: 2021, tier: '旗舰' },
  { id: 'psu-5', brand: '振华', model: 'LEADEX III 650W', wattage: 650, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2022, tier: '高端' },
  { id: 'psu-6', brand: '振华', model: 'LEADEX III 750W', wattage: 750, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2022, tier: '高端' },
  { id: 'psu-7', brand: '振华', model: 'LEADEX VII 850W', wattage: 850, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '高端' },
  { id: 'psu-8', brand: '振华', model: 'LEADEX VII 1000W', wattage: 1000, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '旗舰' },
  { id: 'psu-9', brand: '长城', model: 'G7 650W', wattage: 650, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2021, tier: '中端' },
  { id: 'psu-10', brand: '长城', model: 'G7 750W', wattage: 750, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2021, tier: '中端' },
  { id: 'psu-11', brand: '先马', model: '黑钻 650W', wattage: 650, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2022, tier: '中端' },
  { id: 'psu-12', brand: '九州风神', model: 'PQ650M', wattage: 650, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '中端' },
  { id: 'psu-13', brand: '酷冷至尊', model: 'V SFX Gold 650W', wattage: 650, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'SFX', launchYear: 2022, tier: '高端' },
  { id: 'psu-14', brand: '海盗船', model: 'RM750e', wattage: 750, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '高端' },
  { id: 'psu-15', brand: '海盗船', model: 'RM850e', wattage: 850, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '高端' },
  { id: 'psu-16', brand: '安钛克', model: 'NE650', wattage: 650, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2022, tier: '中端' },
  { id: 'psu-17', brand: '利民', model: 'TR-TG850', wattage: 850, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '中端' },
  { id: 'psu-18', brand: '利民', model: 'TR-TG750', wattage: 750, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '中端' },
  { id: 'psu-19', brand: '鑫谷', model: 'GM850W', wattage: 850, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '中端' },
  { id: 'psu-20', brand: '爱国者', model: 'ES750', wattage: 750, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '入门' },
  { id: 'psu-21', brand: '全汉', model: 'Hydro PTM Pro 850W', wattage: 850, efficiency: '80Plus Platinum', modular: 'Full', formFactor: 'ATX', launchYear: 2022, tier: '高端' },
  { id: 'psu-22', brand: '追风者', model: 'AMP GH 750W', wattage: 750, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '高端' },
  { id: 'psu-23', brand: '海韵', model: 'FOCUS GX-1000', wattage: 1000, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2021, tier: '高端' },
  { id: 'psu-24', brand: '海盗船', model: 'RM1000x', wattage: 1000, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2022, tier: '高端' },
  { id: 'psu-25', brand: '华硕', model: 'ROG STRIX 850G', wattage: 850, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2022, tier: '高端' },
  { id: 'psu-26', brand: '长城', model: '巨龙1000DA', wattage: 1000, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2023, tier: '中端' },
  { id: 'psu-27', brand: '振华', model: 'LEADEX III 850W', wattage: 850, efficiency: '80Plus Gold', modular: 'Full', formFactor: 'ATX', launchYear: 2022, tier: '高端' },
]

export const coolers = [
  // Air Coolers
  { id: 'cooler-1', brand: '利民', model: 'PA120', type: '风冷', sockets: ['LGA1700', 'LGA1851', 'AM4', 'AM5'], fanSize: 120, fanCount: 2, tdp: 245, height: 157, launchYear: 2021, tier: '高端' },
  { id: 'cooler-2', brand: '利民', model: 'FC140', type: '风冷', sockets: ['LGA1700', 'LGA1851', 'AM4', 'AM5'], fanSize: 140, fanCount: 2, tdp: 275, height: 160, launchYear: 2021, tier: '旗舰' },
  { id: 'cooler-3', brand: '利民', model: 'AX120 R SE', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 1, tdp: 150, height: 148, launchYear: 2022, tier: '入门' },
  { id: 'cooler-4', brand: '九州风神', model: '大霜塔V3', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 2, tdp: 220, height: 160, launchYear: 2022, tier: '高端' },
  { id: 'cooler-5', brand: '猫头鹰', model: 'NH-D15', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 140, fanCount: 2, tdp: 250, height: 165, launchYear: 2021, tier: '旗舰' },
  { id: 'cooler-6', brand: '猫头鹰', model: 'NH-U12A', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 2, tdp: 200, height: 158, launchYear: 2021, tier: '高端' },

  // AIO Liquid Coolers
  { id: 'cooler-7', brand: '利民', model: 'Frozen Magic 240', type: '一体水冷', sockets: ['LGA1700', 'LGA1851', 'AM4', 'AM5'], fanSize: 120, fanCount: 2, tdp: 280, radiatorSize: 240, launchYear: 2022, tier: '高端' },
  { id: 'cooler-8', brand: '利民', model: 'Frozen Magic 360', type: '一体水冷', sockets: ['LGA1700', 'LGA1851', 'AM4', 'AM5'], fanSize: 120, fanCount: 3, tdp: 320, radiatorSize: 360, launchYear: 2022, tier: '旗舰' },
  { id: 'cooler-9', brand: '九州风神', model: '冰魔方 360', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 3, tdp: 300, radiatorSize: 360, launchYear: 2023, tier: '高端' },
  { id: 'cooler-10', brand: '九州风神', model: '冰魔方 240', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 2, tdp: 260, radiatorSize: 240, launchYear: 2023, tier: '高端' },
  { id: 'cooler-11', brand: '瓦尔基里', model: 'GL360', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 3, tdp: 300, radiatorSize: 360, launchYear: 2023, tier: '旗舰' },
  { id: 'cooler-12', brand: '瓦尔基里', model: 'A360', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 3, tdp: 280, radiatorSize: 360, launchYear: 2023, tier: '高端' },
  { id: 'cooler-13', brand: '海盗船', model: 'H150i ELITE LCD', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 3, tdp: 300, radiatorSize: 360, launchYear: 2022, tier: '旗舰' },
  { id: 'cooler-14', brand: 'NZXT', model: 'Kraken X63', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 140, fanCount: 2, tdp: 280, radiatorSize: 280, launchYear: 2022, tier: '高端' },
  { id: 'cooler-15', brand: '利民', model: 'U120EX REV.4', type: '风冷', sockets: ['LGA1700', 'LGA1851', 'AM4', 'AM5'], fanSize: 120, fanCount: 1, tdp: 220, height: 157, launchYear: 2023, tier: '高端' },
  { id: 'cooler-16', brand: '九州风神', model: 'AK620', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 2, tdp: 260, height: 160, launchYear: 2022, tier: '高端' },
  { id: 'cooler-17', brand: '利民', model: 'AXP120-X67', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 1, tdp: 180, height: 67, launchYear: 2022, tier: '高端' },
  { id: 'cooler-18', brand: '乔思伯', model: 'CR-1400 EVO', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 92, fanCount: 1, tdp: 130, height: 136, launchYear: 2023, tier: '入门' },
  { id: 'cooler-19', brand: '瓦尔基里', model: 'C240', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 2, tdp: 250, radiatorSize: 240, launchYear: 2023, tier: '中端' },
  { id: 'cooler-20', brand: '追风者', model: 'Glacier One 360MPH', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 3, tdp: 300, radiatorSize: 360, launchYear: 2022, tier: '旗舰' },
  { id: 'cooler-21', brand: '雅浚', model: 'B3', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 1, tdp: 165, height: 153, launchYear: 2022, tier: '入门' },
  { id: 'cooler-22', brand: 'ID-COOLING', model: 'SE-226-XT', type: '风冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 1, tdp: 220, height: 154, launchYear: 2022, tier: '中端' },
  { id: 'cooler-23', brand: '猫头鹰', model: 'NH-L9i-17xx', type: '风冷', sockets: ['LGA1700', 'LGA1851'], fanSize: 92, fanCount: 1, tdp: 95, height: 37, launchYear: 2021, tier: '高端' },
  { id: 'cooler-24', brand: '九州风神', model: '冰堡垒 360', type: '一体水冷', sockets: ['LGA1700', 'AM4', 'AM5'], fanSize: 120, fanCount: 3, tdp: 300, radiatorSize: 360, launchYear: 2023, tier: '高端' },
]

export const cases = [
  { id: 'case-1', brand: '联力', model: '包豪斯 O11D', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 420, maxCoolerHeight: 155, maxRadiator: 360, driveBays: 6, launchYear: 2021, tier: '高端' },
  { id: 'case-2', brand: '联力', model: '包豪斯 O11D EVO', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 420, maxCoolerHeight: 167, maxRadiator: 420, driveBays: 6, launchYear: 2022, tier: '旗舰' },
  { id: 'case-3', brand: '联力', model: '包豪斯 O11D AIR MINI', formFactor: 'mATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 362, maxCoolerHeight: 170, maxRadiator: 280, driveBays: 5, launchYear: 2022, tier: '中端' },
  { id: 'case-4', brand: '华硕', model: 'TUF GT502', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 400, maxCoolerHeight: 163, maxRadiator: 360, driveBays: 4, launchYear: 2022, tier: '高端' },
  { id: 'case-5', brand: '华硕', model: 'AP201 冰立方', formFactor: 'mATX', motherboardSupport: ['mATX', 'ITX'], maxGpuLength: 338, maxCoolerHeight: 170, maxRadiator: 360, driveBays: 4, launchYear: 2022, tier: '中端' },
  { id: 'case-6', brand: '先马', model: '新境界', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 410, maxCoolerHeight: 165, maxRadiator: 360, driveBays: 5, launchYear: 2023, tier: '中端' },
  { id: 'case-7', brand: '先马', model: '颜之神', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 410, maxCoolerHeight: 164, maxRadiator: 360, driveBays: 5, launchYear: 2022, tier: '入门' },
  { id: 'case-8', brand: '追风者', model: 'P500A', formFactor: 'ATX', motherboardSupport: ['E-ATX', 'ATX', 'mATX', 'ITX'], maxGpuLength: 435, maxCoolerHeight: 190, maxRadiator: 420, driveBays: 10, launchYear: 2021, tier: '高端' },
  { id: 'case-9', brand: '追风者', model: 'P400A', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 280, maxCoolerHeight: 160, maxRadiator: 280, driveBays: 6, launchYear: 2021, tier: '中端' },
  { id: 'case-10', brand: '酷冷至尊', model: 'MB520', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 410, maxCoolerHeight: 165, maxRadiator: 360, driveBays: 5, launchYear: 2021, tier: '入门' },
  { id: 'case-11', brand: '乔思伯', model: 'D31 MESH', formFactor: 'mATX', motherboardSupport: ['mATX', 'ITX'], maxGpuLength: 330, maxCoolerHeight: 168, maxRadiator: 240, driveBays: 3, launchYear: 2023, tier: '中端' },
  { id: 'case-12', brand: '乔思伯', model: 'TK-1', formFactor: 'mATX', motherboardSupport: ['mATX', 'ITX'], maxGpuLength: 280, maxCoolerHeight: 165, maxRadiator: 240, driveBays: 2, launchYear: 2023, tier: '高端' },
  { id: 'case-13', brand: 'NZXT', model: 'H7 Flow', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 400, maxCoolerHeight: 185, maxRadiator: 360, driveBays: 4, launchYear: 2022, tier: '高端' },
  { id: 'case-14', brand: 'NZXT', model: 'H5 Flow', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 365, maxCoolerHeight: 165, maxRadiator: 280, driveBays: 4, launchYear: 2023, tier: '中端' },
  { id: 'case-15', brand: '联力', model: 'A3-mATX', formFactor: 'mATX', motherboardSupport: ['mATX', 'ITX'], maxGpuLength: 415, maxCoolerHeight: 165, maxRadiator: 360, driveBays: 3, launchYear: 2024, tier: '中端' },
  { id: 'case-16', brand: '乔思伯', model: 'D32 STD', formFactor: 'mATX', motherboardSupport: ['mATX', 'ITX'], maxGpuLength: 365, maxCoolerHeight: 168, maxRadiator: 240, driveBays: 3, launchYear: 2024, tier: '中端' },
  { id: 'case-17', brand: '先马', model: '朱雀AIR', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 380, maxCoolerHeight: 165, maxRadiator: 280, driveBays: 5, launchYear: 2023, tier: '入门' },
  { id: 'case-18', brand: '爱国者', model: 'YOGO M2', formFactor: 'mATX', motherboardSupport: ['mATX', 'ITX'], maxGpuLength: 350, maxCoolerHeight: 160, maxRadiator: 240, driveBays: 4, launchYear: 2022, tier: '入门' },
  { id: 'case-19', brand: '微星', model: 'MPG VELOX 100R', formFactor: 'ATX', motherboardSupport: ['E-ATX', 'ATX', 'mATX', 'ITX'], maxGpuLength: 380, maxCoolerHeight: 175, maxRadiator: 360, driveBays: 6, launchYear: 2022, tier: '高端' },
  { id: 'case-20', brand: '九州风神', model: 'CH560', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 380, maxCoolerHeight: 175, maxRadiator: 360, driveBays: 5, launchYear: 2023, tier: '中端' },
  { id: 'case-21', brand: '闪鳞', model: 'S400', formFactor: 'ITX', motherboardSupport: ['ITX'], maxGpuLength: 337, maxCoolerHeight: 77, maxRadiator: 0, driveBays: 2, launchYear: 2023, tier: '高端' },
  { id: 'case-22', brand: 'SSUPD', model: 'Meshroom S', formFactor: 'ITX', motherboardSupport: ['ITX'], maxGpuLength: 326, maxCoolerHeight: 0, maxRadiator: 280, driveBays: 2, launchYear: 2023, tier: '高端' },
  { id: 'case-23', brand: '机械大师', model: 'C28', formFactor: 'mATX', motherboardSupport: ['mATX', 'ITX'], maxGpuLength: 305, maxCoolerHeight: 162, maxRadiator: 240, driveBays: 3, launchYear: 2023, tier: '高端' },
  { id: 'case-24', brand: '几何未来', model: 'M4 Arthur', formFactor: 'ATX', motherboardSupport: ['ATX', 'mATX', 'ITX'], maxGpuLength: 400, maxCoolerHeight: 167, maxRadiator: 360, driveBays: 4, launchYear: 2023, tier: '高端' },
]

export const soundCards = [
  { id: 'sc-1', brand: '创新', model: 'Sound BlasterX AE-5 Plus', interface: 'PCIe', channels: 5.1, sampleRate: '384kHz', launchYear: 2021, tier: '高端' },
  { id: 'sc-2', brand: '创新', model: 'Sound Blaster Audigy FX', interface: 'PCIe', channels: 5.1, sampleRate: '192kHz', launchYear: 2021, tier: '入门' },
  { id: 'sc-3', brand: '华硕', model: 'Xonar AE', interface: 'PCIe', channels: 7.1, sampleRate: '192kHz', launchYear: 2021, tier: '中端' },
]

export const nics = [
  { id: 'nic-1', brand: 'Intel', model: 'I225-V', interface: 'PCIe', speed: '2.5GbE', launchYear: 2021, tier: '入门' },
  { id: 'nic-2', brand: 'Intel', model: 'X550-T2', interface: 'PCIe', speed: '10GbE', launchYear: 2021, tier: '高端' },
  { id: 'nic-3', brand: 'TP-Link', model: 'TX401', interface: 'PCIe', speed: '10GbE', launchYear: 2022, tier: '中端' },
]

export const monitors = [
  { id: 'monitor-1', brand: 'LG', model: '27GP850', size: 27, resolution: '2560x1440', panel: 'IPS', refreshRate: 165, responseTime: 1, hdr: 'HDR400', launchYear: 2021, tier: '中高端' },
  { id: 'monitor-2', brand: 'LG', model: '27GP95R', size: 27, resolution: '3840x2160', panel: 'Nano IPS', refreshRate: 144, responseTime: 1, hdr: 'HDR600', launchYear: 2022, tier: '高端' },
  { id: 'monitor-3', brand: '三星', model: 'Odyssey G7 32"', size: 32, resolution: '2560x1440', panel: 'VA', refreshRate: 240, responseTime: 1, hdr: 'HDR600', launchYear: 2021, tier: '高端' },
  { id: 'monitor-4', brand: '三星', model: 'Odyssey G8 34"', size: 34, resolution: '3440x1440', panel: 'QD-OLED', refreshRate: 175, responseTime: 0.03, hdr: 'HDR400', launchYear: 2023, tier: '旗舰' },
  { id: 'monitor-5', brand: '华硕', model: 'ROG Swift PG279QM', size: 27, resolution: '2560x1440', panel: 'IPS', refreshRate: 240, responseTime: 1, hdr: 'HDR400', launchYear: 2021, tier: '高端' },
  { id: 'monitor-6', brand: '华硕', model: 'ROG Swift PG32UCDM', size: 32, resolution: '3840x2160', panel: 'QD-OLED', refreshRate: 240, responseTime: 0.03, hdr: 'HDR400', launchYear: 2024, tier: '旗舰' },
  { id: 'monitor-7', brand: '戴尔', model: 'S2721DGF', size: 27, resolution: '2560x1440', panel: 'IPS', refreshRate: 165, responseTime: 1, hdr: 'HDR400', launchYear: 2021, tier: '中端' },
  { id: 'monitor-8', brand: 'AOC', model: 'Q27G2S/D', size: 27, resolution: '2560x1440', panel: 'IPS', refreshRate: 170, responseTime: 1, hdr: 'HDR400', launchYear: 2022, tier: '中端' },
  { id: 'monitor-9', brand: 'KTC', model: 'H27T22', size: 27, resolution: '2560x1440', panel: 'IPS', refreshRate: 170, responseTime: 1, hdr: null, launchYear: 2023, tier: '入门' },
  { id: 'monitor-10', brand: '宏碁', model: 'XV272U KV', size: 27, resolution: '2560x1440', panel: 'IPS', refreshRate: 170, responseTime: 1, hdr: 'HDR400', launchYear: 2022, tier: '中端' },

  // Additional gaming monitors
  { id: 'monitor-11', brand: 'HKC', model: 'IG27Q', size: 27, resolution: '2560x1440', panel: 'Fast IPS', refreshRate: 170, responseTime: 1, hdr: null, launchYear: 2023, tier: '入门' },
  { id: 'monitor-12', brand: '雷神', model: '黑武士 DQ27F180L', size: 27, resolution: '2560x1440', panel: 'Fast IPS', refreshRate: 180, responseTime: 1, hdr: 'HDR400', launchYear: 2024, tier: '中端' },
  { id: 'monitor-13', brand: '泰坦军团', model: 'P27H2R', size: 27, resolution: '2560x1440', panel: 'Fast IPS', refreshRate: 180, responseTime: 1, hdr: null, launchYear: 2023, tier: '入门' },
  { id: 'monitor-14', brand: '小米', model: 'Redmi G Pro 27"', size: 27, resolution: '2560x1440', panel: 'Mini LED IPS', refreshRate: 180, responseTime: 1, hdr: 'HDR1000', launchYear: 2024, tier: '高端' },
  { id: 'monitor-15', brand: '创维', model: 'F27G10U', size: 27, resolution: '3840x2160', panel: 'Fast IPS', refreshRate: 160, responseTime: 1, hdr: 'HDR400', launchYear: 2023, tier: '高端' },
  { id: 'monitor-16', brand: '优派', model: 'VX2758-2K-PRO-8', size: 27, resolution: '2560x1440', panel: 'Fast IPS', refreshRate: 185, responseTime: 1, hdr: 'HDR10', launchYear: 2024, tier: '中端' },
  { id: 'monitor-17', brand: '飞利浦', model: '27M1N5500Z4', size: 27, resolution: '2560x1440', panel: 'Nano IPS', refreshRate: 180, responseTime: 1, hdr: 'HDR400', launchYear: 2023, tier: '中高端' },
  { id: 'monitor-18', brand: '雷神', model: '银翼 LQ27F240L', size: 27, resolution: '2560x1440', panel: 'Fast IPS', refreshRate: 240, responseTime: 1, hdr: 'HDR400', launchYear: 2024, tier: '高端' },
  { id: 'monitor-19', brand: '华硕', model: 'ROG Swift PG27AQDM', size: 27, resolution: '2560x1440', panel: 'OLED', refreshRate: 240, responseTime: 0.03, hdr: 'HDR10', launchYear: 2023, tier: '旗舰' },
  { id: 'monitor-20', brand: 'LG', model: '32GQ950', size: 32, resolution: '3840x2160', panel: 'Nano IPS', refreshRate: 160, responseTime: 1, hdr: 'HDR1000', launchYear: 2022, tier: '旗舰' },
]

export const hardwareDB = {
  cpu: cpus,
  motherboard: motherboards,
  gpu: gpus,
  memory: memoryModules,
  ssd: ssds,
  hdd: hdds,
  psu: psus,
  cooler: coolers,
  case: cases,
  soundcard: soundCards,
  nic: nics,
  monitor: monitors,
}

export function getHardwareByCategory(category) {
  return hardwareDB[category] || []
}

export function getHardwareById(category, id) {
  const list = hardwareDB[category]
  if (!list) return null
  return list.find(item => item.id === id) || null
}
