import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import OrderConfirmation from '../../Order/OrderContainer';

describe('tests for Login component', () => {
  it('generates snapshot for Order component', () => {
    const {container} = render(<OrderConfirmation />);
    expect(container).toMatchSnapshot();
  });

  it('should not able to enter stock name', () => {
    // Arrange
    const stockName = 'RIL';

    // Act
    const {getByTestId} = render(<OrderConfirmation />);
    const stockNameEle = getByTestId('stock-name-ele');
    userEvent.type(stockNameEle, stockName);

    // Assert
    expect((getByTestId('stock-name-ele') as HTMLInputElement).value).not.toBe(
      stockName,
    );
  });

  it('should able to enter stock price', () => {
    // Arrange
    const stockPrice = '595';

    // Act
    const {getByTestId} = render(<OrderConfirmation />);
    const stockPriceEle = getByTestId('stock-price-ele');
    userEvent.type(stockPriceEle, stockPrice);

    // Assert
    expect((getByTestId('stock-price-ele') as HTMLInputElement).value).toBe(
      stockPrice,
    );
  });

  it('should able to enter stock quantity', () => {
    // Arrange
    const stockQuantity = '250';

    // Act
    const {getByTestId} = render(<OrderConfirmation />);
    const stockQuantityEle = getByTestId('quantity-ele');
    userEvent.type(stockQuantityEle, stockQuantity);

    // Assert
    expect((getByTestId('quantity-ele') as HTMLInputElement).value).toBe(
      stockQuantity,
    );
  });

  it('should able to select transaction type', () => {
    // Act
    const {getByTestId} = render(<OrderConfirmation />);
    const transactionTypeEle = getByTestId('transaction-buy');
    userEvent.click(transactionTypeEle);

    // Assert
    expect((getByTestId('transaction-buy') as HTMLInputElement).value).toBe(
      'on',
    );
  });

  it('should able to click on place order', () => {
    // Act
    const {getByTestId} = render(<OrderConfirmation />);
    const stockNameEle = getByTestId('place-order-button');
    userEvent.click(stockNameEle);

    // Assert
    expect(
      getByTestId('transaction-buy') as HTMLInputElement,
    ).not.toBeDisabled();
  });
});
