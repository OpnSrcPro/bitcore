import { EthChain } from '../eth';

export class MaticChain extends EthChain {
  chain: string;

  constructor() {
    super();
    this.chain = 'MATIC'
  }
}
