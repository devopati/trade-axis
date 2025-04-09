import { NavigationProp } from "@react-navigation/native";

export type NavigationPropType = NavigationProp<
  Record<string, object | undefined>
>;

export interface SignalType {
  _id: string;
  pairName: string;
  postedAt: Date;
  buyingPoint1: string;
  sellingPoint1: string;
  buyingPoint2: string;
  sellingPoint2: string;
  takeProfit1: string;
  stopLoss: string;
  description: string;
  subscriptionPlan: string; // VIP | FREE
  hitTakeProfit: Boolean;
  isClosed: Boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReportType {
  planName: string;
  totalHitTakeProfit: string;
  totalHitStopLoss: string;
  totalTradesTaken: string;
  percentageWinRate: string;
}
