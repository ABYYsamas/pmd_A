import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service'

@Injectable()
export class ProductsService {

    constructor(private readonly appService: AppService){}

    getProducts(request: object): string {
        return this.appService.getHello() + 'cars', 'bikes'
    }

    getAllProducts(): string[] {
        return ['cars', 'bikes', 'planes']
    }

    getAllPrices(): string[] {
        return ['2', '3']
    }

    postAllProducts(): string[] {
        return ['cars', 'bikes']
    }

    postAllPrices(): string[] {
        return ['2', '3']
    }

    saveProduct(product:{}) {
        //save product to data base
        console.log('product saved')
        const productSaved = {
            id: '1',
            ...product
        }
        return productSaved
    }
}