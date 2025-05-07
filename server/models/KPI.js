import mongoose from "mongoose";

const { Schema } = mongoose;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
    expenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
    expenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
    operationalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
    nonOperationalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
    totalRevenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
    totalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: (v) => parseFloat(v.toString()),
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.Decimal128,
        get: (v) => parseFloat(v.toString()),
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
