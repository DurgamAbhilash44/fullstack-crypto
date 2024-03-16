import mongoose from "mongoose";

const { Schema } = mongoose;

const exchangeSchema = new Schema({
  id: { type: String },
  name: { type: String },
  year_established: { type: Number },
  country: { type: String },
  description: { type: String },
  url: { type: String },
  image: { type: String },
  has_trading_incentive: { type: Boolean, default: false },
  trust_score: { type: Number },
  trust_score_rank: { type: Number },
  trade_volume_24h_btc: { type: Number },
  trade_volume_24h_btc_normalized: { type: Number },
});

const Exchange = mongoose.model("Exchange", exchangeSchema);

export default Exchange;
