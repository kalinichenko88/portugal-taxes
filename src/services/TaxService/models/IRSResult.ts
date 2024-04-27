import { RangeTax } from './RangeTax';

export type IRSResult = {
  ranges: RangeTax[];
  withheld: number;
  balance: number;
};
