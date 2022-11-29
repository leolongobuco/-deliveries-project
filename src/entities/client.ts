import crypto from "crypto";

import { Delivery } from "./delivery";

interface IClientProps {
  id?: string;
  username: string;
  password: string;
}

class Client {
  private props: IClientProps;

  get username() {
    return this.props.username;
  }

  get password() {
    return this.props.password;
  }

  get id() {
    return this.props.id;
  }

  constructor(props: IClientProps) {
    this.props = props;
    this.props.id = this.id ?? crypto.randomUUID();
  }
}

export { Client };
