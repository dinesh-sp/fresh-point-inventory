export interface ledger {
  ledger_date: Date;
  toff: number;
  patty_cash: number;
  total: number;
}

// Shape as stored in SQLite (booleans are stored as 0/1)
export interface response extends ledger {
  id: number;
}

export function mapRowResponse(row: response): response {
  return {
    id: row.id,
    ledger_date: row.ledger_date,
    toff: Number(row.toff),
    patty_cash: Number(row.patty_cash),
    total: Number(row.total),
  };
}
