/**
 * Mocking client-server processing
 */
import _products from './products.json'
import _productshighlight from './productshighlight.json'
import _brands from './brands.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  getAllProducts: (cb, timeout) => setTimeout(() => cb([..._productshighlight, ..._products]), timeout || TIMEOUT),
  getProductsForSaleDevice: (cb, timeout) => setTimeout(() => cb(_productshighlight, _brands), timeout || TIMEOUT)
}
