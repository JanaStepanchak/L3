import React, { Component } from 'react';
/*
    React.Children ->
    Методы для перебора дочерных элементов

    React.Children.map(children, function[(thisArg)]) -> Возвращает новый массив
    React.Children.forEach(children, function[(thisArg)]) -> Просто перебирает

    React.Children.count(children) -> Возвращает количество дочерних элементов
    React.Children.only(children) -> Проверят что у компонента есть только один дочерний элемент

    React.isValidElement(object) -> Проверяет, явкляет ли то что вы туда передали валидным реакт обьектом

    React.cloneElement(
        element,
        [props],
        [...children]
    )
*/

const DemoChild = ({ children }) => {

    // console.log( React.Children.count(children) );
    // console.log( React.Children.only(children) );

    return(
        <div>
            {
                React.Children.map( children, ( ChildrenItem ) => {
                    console.log( ChildrenItem );
                    if( React.isValidElement(ChildrenItem ) ){
                        console.log('Element is ok', ChildrenItem );
                        return( ChildrenItem )
                    } else {
                        console.error('Element not valid', ChildrenItem );
                    }
                })
            }
        </div>
    )

}

export default DemoChild;