import React from "react";

import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Add} from "@material-ui/icons";


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
            <FormControlLabel key={index} value={post} control={<Radio />} label={post} />
        )
    }

    render() {
        return (
            <form>
                <FormControl component="fieldset">
                    <RadioGroup name="post" onChange={this.onPostChange}>
                        {this.props.game.freePosts.map(this.forAllPosts)}
                    </RadioGroup>
                </FormControl>

                <Button startIcon={<Add/>} variant="contained" color="primary" onClick={this.onSubmit}>
                    Přihlásit se na akci
                </Button>

            </form>
        );
    }

}


export default ApplyForPostForm;