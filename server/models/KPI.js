import mongoose from "mongoose";

const { Schema } = mongoose;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
    expenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
    expenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
    operationalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
    nonOperationalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
    totalRevenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
    totalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.Decimal128,
        get: (v) => (v ? parseFloat(v.toString()) : 0),
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
