// Validação e formatação de números telefônicos internacionais para WhatsApp
// Baseado nas regras oficiais do WhatsApp e padrões internacionais

export const countryCodeRules = {
  BR: {
    code: "55",
    name: "Brasil",
    flag: "🇧🇷",
    format: "+55 (DD) 9XXXX-XXXX",
    rules: {
      // Para DDD 11-19, 21, 22, 24, 27, 28: adicionar 9 na frente do número
      // Para outros DDDs, manter como está (já tem 9 dígitos)
      requiresNinthDigit: [
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "21",
        "22",
        "24",
        "27",
        "28",
      ],
      minLength: 10,
      maxLength: 11,
      dddLength: 2,
    },
  },
  US: {
    code: "1",
    name: "Estados Unidos",
    flag: "🇺🇸",
    format: "+1 (XXX) XXX-XXXX",
    rules: {
      minLength: 10,
      maxLength: 10,
      areaCodeLength: 3,
    },
  },
  FR: {
    code: "33",
    name: "França",
    flag: "🇫🇷",
    format: "+33 X XX XX XX XX",
    rules: {
      minLength: 9,
      maxLength: 9,
      // Remove o primeiro 0 se presente
      removeLeadingZero: true,
    },
  },
  ES: {
    code: "34",
    name: "Espanha",
    flag: "🇪🇸",
    format: "+34 XXX XXX XXX",
    rules: {
      minLength: 9,
      maxLength: 9,
    },
  },
  AR: {
    code: "54",
    name: "Argentina",
    flag: "🇦🇷",
    format: "+54 9 XX XXXX-XXXX",
    rules: {
      // Inserir 9 após código do país e remover 15 do início se presente
      requiresMobilePrefix: true,
      removePrefix15: true,
      minLength: 10,
      maxLength: 10,
    },
  },
  MX: {
    code: "52",
    name: "México",
    flag: "🇲🇽",
    format: "+52 1 XXX XXX XXXX",
    rules: {
      // Inserir 1 entre código do país e código de área
      requiresMobilePrefix: true,
      removeAreaCode11: true, // Remove código de área 11 se presente
      minLength: 10,
      maxLength: 10,
    },
  },
  RU: {
    code: "7",
    name: "Rússia",
    flag: "🇷🇺",
    format: "+7 XXX XXX-XX-XX",
    rules: {
      minLength: 10,
      maxLength: 10,
      // Substituir 8 inicial por 7
      replaceLeading8: true,
    },
  },
};

export function detectCountryFromNumber(phoneNumber) {
  const cleanNumber = phoneNumber.replace(/\D/g, "");

  // Tentar detectar país baseado no código
  for (const [countryCode, country] of Object.entries(countryCodeRules)) {
    if (cleanNumber.startsWith(country.code)) {
      return countryCode;
    }
  }

  // Se começar com 8 (Rússia)
  if (cleanNumber.startsWith("8") && cleanNumber.length === 11) {
    return "RU";
  }

  // Padrão brasileiro sem código de país
  if (
    cleanNumber.length >= 10 &&
    cleanNumber.length <= 11 &&
    !cleanNumber.startsWith("55")
  ) {
    return "BR";
  }

  return null;
}

export function validatePhoneNumber(phoneNumber, selectedCountry = null) {
  if (!phoneNumber) {
    return {
      isValid: false,
      error: "Número de telefone é obrigatório",
      formattedNumber: null,
      whatsappId: null,
    };
  }

  const cleanNumber = phoneNumber.replace(/\D/g, "");

  if (cleanNumber.length < 8) {
    return {
      isValid: false,
      error: "Número muito curto",
      formattedNumber: null,
      whatsappId: null,
    };
  }

  // Detectar país se não foi especificado
  const countryCode = selectedCountry || detectCountryFromNumber(phoneNumber);

  if (!countryCode) {
    return {
      isValid: false,
      error: "Código do país não detectado. Use o formato internacional (+XX)",
      formattedNumber: null,
      whatsappId: null,
    };
  }

  const country = countryCodeRules[countryCode];
  if (!country) {
    return {
      isValid: false,
      error: "País não suportado",
      formattedNumber: null,
      whatsappId: null,
    };
  }

  try {
    const result = formatNumberForCountry(cleanNumber, countryCode);
    return {
      isValid: true,
      error: null,
      formattedNumber: result.display,
      whatsappId: result.whatsapp,
      country: country,
      countryCode: countryCode,
    };
  } catch (error) {
    return {
      isValid: false,
      error: error.message,
      formattedNumber: null,
      whatsappId: null,
    };
  }
}

function formatNumberForCountry(cleanNumber, countryCode) {
  const country = countryCodeRules[countryCode];
  let processedNumber = cleanNumber;

  // Remover código do país se já estiver presente
  if (processedNumber.startsWith(country.code)) {
    processedNumber = processedNumber.substring(country.code.length);
  }

  switch (countryCode) {
    case "BR":
      return formatBrazilianNumber(processedNumber);
    case "US":
      return formatUSNumber(processedNumber);
    case "FR":
      return formatFrenchNumber(processedNumber);
    case "ES":
      return formatSpanishNumber(processedNumber);
    case "AR":
      return formatArgentineNumber(processedNumber);
    case "MX":
      return formatMexicanNumber(processedNumber);
    case "RU":
      return formatRussianNumber(processedNumber);
    default:
      throw new Error("País não suportado");
  }
}

function formatBrazilianNumber(number) {
  const country = countryCodeRules.BR;

  if (
    number.length < country.rules.minLength ||
    number.length > country.rules.maxLength
  ) {
    throw new Error(
      `Número brasileiro deve ter ${country.rules.minLength}-${country.rules.maxLength} dígitos`
    );
  }

  // Extrair DDD
  const ddd = number.substring(0, 2);
  let localNumber = number.substring(2);

  // Verificar se precisa adicionar o 9º dígito
  if (country.rules.requiresNinthDigit.includes(ddd)) {
    if (localNumber.length === 8 && !localNumber.startsWith("9")) {
      localNumber = "9" + localNumber;
    }
  }

  const fullNumber = "55" + ddd + localNumber;
  const displayFormat = `+55 (${ddd}) ${localNumber.substring(
    0,
    1
  )} ${localNumber.substring(1, 5)}-${localNumber.substring(5)}`;

  return {
    display: displayFormat,
    whatsapp: fullNumber + "@c.us",
  };
}

function formatUSNumber(number) {
  const country = countryCodeRules.US;

  if (number.length !== country.rules.minLength) {
    throw new Error(
      `Número americano deve ter ${country.rules.minLength} dígitos`
    );
  }

  const areaCode = number.substring(0, 3);
  const exchange = number.substring(3, 6);
  const subscriber = number.substring(6);

  const fullNumber = "1" + number;
  const displayFormat = `+1 (${areaCode}) ${exchange}-${subscriber}`;

  return {
    display: displayFormat,
    whatsapp: fullNumber + "@c.us",
  };
}

function formatFrenchNumber(number) {
  const country = countryCodeRules.FR;

  // Remover 0 inicial se presente
  if (number.startsWith("0")) {
    number = number.substring(1);
  }

  if (number.length !== country.rules.minLength) {
    throw new Error(
      `Número francês deve ter ${country.rules.minLength} dígitos (sem o 0 inicial)`
    );
  }

  const fullNumber = "33" + number;
  const displayFormat = `+33 ${number.substring(0, 1)} ${number.substring(
    1,
    3
  )} ${number.substring(3, 5)} ${number.substring(5, 7)} ${number.substring(
    7
  )}`;

  return {
    display: displayFormat,
    whatsapp: fullNumber + "@c.us",
  };
}

function formatSpanishNumber(number) {
  const country = countryCodeRules.ES;

  if (number.length !== country.rules.minLength) {
    throw new Error(
      `Número espanhol deve ter ${country.rules.minLength} dígitos`
    );
  }

  const fullNumber = "34" + number;
  const displayFormat = `+34 ${number.substring(0, 3)} ${number.substring(
    3,
    6
  )} ${number.substring(6)}`;

  return {
    display: displayFormat,
    whatsapp: fullNumber + "@c.us",
  };
}

function formatArgentineNumber(number) {
  const country = countryCodeRules.AR;

  // Remover 15 inicial se presente
  if (number.startsWith("15")) {
    number = number.substring(2);
  }

  if (number.length !== country.rules.minLength) {
    throw new Error(
      `Número argentino deve ter ${country.rules.minLength} dígitos (após remover 15 inicial)`
    );
  }

  // Adicionar 9 após código do país para celulares
  const fullNumber = "549" + number;
  const areaCode = number.substring(0, 2);
  const localNumber = number.substring(2);
  const displayFormat = `+54 9 ${areaCode} ${localNumber.substring(
    0,
    4
  )}-${localNumber.substring(4)}`;

  return {
    display: displayFormat,
    whatsapp: fullNumber + "@c.us",
  };
}

function formatMexicanNumber(number) {
  const country = countryCodeRules.MX;

  // Remover código de área 11 se presente
  if (number.startsWith("11")) {
    number = number.substring(2);
  }

  if (number.length !== country.rules.minLength) {
    throw new Error(
      `Número mexicano deve ter ${country.rules.minLength} dígitos`
    );
  }

  // Adicionar 1 após código do país para celulares
  const fullNumber = "521" + number;
  const areaCode = number.substring(0, 3);
  const localNumber = number.substring(3);
  const displayFormat = `+52 1 ${areaCode} ${localNumber.substring(
    0,
    3
  )} ${localNumber.substring(3)}`;

  return {
    display: displayFormat,
    whatsapp: fullNumber + "@c.us",
  };
}

function formatRussianNumber(number) {
  const country = countryCodeRules.RU;

  // Substituir 8 inicial por 7 se presente
  if (number.startsWith("8") && number.length === 11) {
    number = "7" + number.substring(1);
  }

  // Se já tem o 7, remover para processar
  if (number.startsWith("7")) {
    number = number.substring(1);
  }

  if (number.length !== country.rules.minLength) {
    throw new Error(
      `Número russo deve ter ${country.rules.minLength} dígitos (após código do país)`
    );
  }

  const fullNumber = "7" + number;
  const code = number.substring(0, 3);
  const part1 = number.substring(3, 6);
  const part2 = number.substring(6, 8);
  const part3 = number.substring(8);
  const displayFormat = `+7 ${code} ${part1}-${part2}-${part3}`;

  return {
    display: displayFormat,
    whatsapp: fullNumber + "@c.us",
  };
}

// Função para gerar URL do WhatsApp (funciona tanto no desktop quanto mobile)
export function generateWhatsAppURL(
  phoneNumber,
  message = "",
  selectedCountry = null
) {
  const validation = validatePhoneNumber(phoneNumber, selectedCountry);

  if (!validation.isValid) {
    throw new Error(validation.error);
  }

  // Extrair apenas os números do whatsappId - garantir que não tenha caracteres especiais
  const cleanWhatsAppNumber = validation.whatsappId.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  // Detectar se é mobile ou desktop
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // Para mobile, usar whatsapp://
    return `whatsapp://send?phone=${cleanWhatsAppNumber}&text=${encodedMessage}`;
  } else {
    // Para desktop, usar web.whatsapp.com
    return `https://web.whatsapp.com/send?phone=${cleanWhatsAppNumber}&text=${encodedMessage}`;
  }
}

// Função para obter lista de países suportados
export function getSupportedCountries() {
  return Object.entries(countryCodeRules).map(([code, country]) => ({
    code,
    name: country.name,
    flag: country.flag,
    phoneCode: country.code,
    format: country.format,
  }));
}
