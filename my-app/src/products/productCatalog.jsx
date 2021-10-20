import React from "react";
import ProductCatalogItem from "./productCatalogItem";

export  default class ProductCatalog extends React.Component {

    // Конструктор - запускается первым в начале работы
    // props - данные для начала жизни компонента (его свойства)
    constructor(props) {
        super(props); // Вызов конструктора предка

        // Состояние компонента
        this.state = {
            error: null, // Состояние ошибки
            isLoaded: false, // Состояние загрузки
            items: [] // Данные для отображения в компаненте
        }

    }

    componentDidMount(){
        this.readAll();
    }

    create(item){
        fetch("/api/products",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            }
        )
            .then(response => response.json())
            .then (item => {
                const items = this.state.items;
                items.push(item);
                this.setState({
                    items: items
                });
            })
            .catch(err => {
                this.setState({error: err});
            });
    }

    // Читает всю коллекцию из базы данных в компонент
    readAll(){
        fetch("/api/products")
            .then(response => response.json())
            .then (items => {
                this.setState({
                    isLoaded: true,
                    items: items
                });
            })
            .catch(err => {
                this.setState({error: err});
            });
    }

    update(item){
        const items = this.state.items;
        items[items.indexOf(i=> i._id === item._id)] = item;
        this.setState ({
           isLoaded :false,
            items: items
        });
        fetch("/api/products",
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            }
        )
            .then(response => {})
            .then (item => { this.setState({isLoaded: true}) })
            .catch(err => {
                this.setState({error: err});
            });
    }

    delete(item){
        const items = this.state.items;
        items.splice(items.indexOf(item), 1);
        this.setState ({
            isLoaded :false,
            items: items
        });
        fetch("/api/products",
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            }
        )
            .then(response => {})
            .then (item => { this.setState({isLoaded: true}) })
            .catch(err => {
                this.setState({error: err});
            });
    }


    // Этот метод будет отрабатывать каждый раз при отрисовке компонента
    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
    }

    // Вывод основного состояния компонента
    renderData(){
        return (
            <div className="row" id="productCatalog" >
                {
                    this.state.items.map(item =>
                            <ProductCatalogItem key={item._id}
                            update={this.update.bind(this)}
                            delete={this.delete.bind(this)}
                            item={item}></ProductCatalogItem>
                    )
                }
                    <ProductCatalogItem key="newElement" create={this.create.bind(this)}></ProductCatalogItem>
            </div>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    // Отображение компонента в состоянии ошибки
    renderError(){
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }
}