const paymentsType = ['credit_card', 'debit_card', 'paypal', 'bitcoin'] as const

type PaymentType = typeof paymentsType[number]

export { paymentsType, PaymentType }
