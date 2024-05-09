import { RangeTax } from './RangeTax';

export type IRSResult = {
  base: number;
  ranges: RangeTax[];
  withheld: number;
  balance: number;
};
