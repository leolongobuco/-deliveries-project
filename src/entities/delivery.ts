import crypto from "crypto";

interface IDeliveryProps {
  id?: string;
  itemName: string;
}

class Delivery {
  private props: IDeliveryProps;

  get id() {
    return this.props.id;
  }

  get itemName() {
    return this.props.itemName;
  }

  constructor(props: IDeliveryProps) {
    this.props = props;

    this.props.id = this.id ?? crypto.randomUUID();
  }
}

export { Delivery };
