import { Container } from 'inversify'
import { AclUsers } from './Acls/AclUsers'
import { DiscountService } from './Domains/DiscountService'

var DIContainer = new Container();

DIContainer.bind<AclUsers>(AclUsers).toSelf();
DIContainer.bind<DiscountService>(DiscountService).toSelf();

export default DIContainer;