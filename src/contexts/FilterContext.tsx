import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type DateFilterType = "all" | "today" | "thisWeek" | "range";

export interface DateFilterState {
  type: DateFilterType;
  startDate?: Date | null;
  endDate?: Date | null;
}

interface FilterContextType {
  dateFilter: DateFilterState;
  setDateFilter: (next: DateFilterState) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [dateFilter, setDateFilter] = useState<DateFilterState>({ type: "all" });

  const value = useMemo(() => ({ dateFilter, setDateFilter }), [dateFilter]);

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export const useFilterContext = (): FilterContextType => {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilterContext must be used within FilterProvider");
  return ctx;
};