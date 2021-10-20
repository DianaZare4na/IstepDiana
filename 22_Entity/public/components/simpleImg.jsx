
class SimpleImg extends React.Component {

    constructor(props) {
        super(props); // Вызов конструктора предка

        // Состояние компонента
        this.state = {
            error: null, // Состояние ошибки
            isLoaded: false, // Состояние загрузки
            items: [] // Данные для отображения в компаненте
        }

    }

    sendFileData(){
        let formData = new FormData();
        formData.append( "fileData", document.getElementById("fileData").files[0]);

        fetch("/api/files",
            {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(fileName => {
                console.log(fileName);
                const items = this.state.items;
                items.push(fileName);
                this.setState ({items: items});
            })
            .catch(err => console.log(err));
    }




    render(){
        console.log("render");
        return (
            <div className="container">
                <input type="file" name="fileData" id="fileData"/>
                <input type="button" onClick={this.sendFileData.bind(this)}/>
                <hr/>
                {
                    this.state.items.map( (item, index) =>(
                        <img src={'/upload/' + item} key={index}  className="thumb-post"/>
                    ))
                }
            </div>
        );
    }

}