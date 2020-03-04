import { DiscountService } from '../Domains/DiscountService';
import 'jasmine';
import "reflect-metadata";
import DIContainer from '../di-container';




describe('DiscountService', function() {


    let service = DIContainer.resolve<DiscountService>(DiscountService);
    

    it('GetAllDiscountByUser', async function() {
      let result = await service.GetAllDiscountByUser('42975333080');

    
      expect(result).toEqual(jasmine.any(Number));
    });

  });