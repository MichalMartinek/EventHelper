import React from "react";


class ApplyForPostForm extends React.Component {

    state = {
        post: null
    };

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
        this.forAllPosts = this.forAllPosts.bind(this);

    }

    onPostChange(e){
        this.setState({post: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.post === null){
            alert(
                'Musíte nejdříve zvolit pozici'
            );
            return;
        }

        // Todo pridat do stavu
        alert('Todo: pridano ' + this.state.post);
    }

    forAllPosts(post, index){
        return (
            <div key={index}>
                <label>
                    <input type="radio" name="post" onChange={this.onPostChange} value={post} />
                    {post}
                </label>
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                    {this.props.game.freePosts.map(this.forAllPosts)}
                    <input type="submit" value="Přihlásit se na akci"/>
            </form>
        );
    }

}


export default ApplyForPostForm;