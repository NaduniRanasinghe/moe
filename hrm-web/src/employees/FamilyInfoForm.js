/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import { Grid,withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import {
    ArrayInput,
    DateInput,
    FormTab,
    ImageField,
    ImageInput,
    maxLength,
    minLength,
    number,
    RadioButtonGroupInput,
    SelectInput,
    SimpleFormIterator,
    TextInput,
    required,
    regex,
    
    
} from 'react-admin';

import data from '../data';


const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36 },
    right: { display: 'inline-block', marginRight: 36 },
});


// const validatePhoneno = [number('Must be number'), minLength(10,'Must be 10 Digits'),regex(/^\d{10}$/,'Must be 10 Digits')];
const validateNIC=[regex(/(^\w{9}(V))|(^\w{12})$/,'Allowed format : "9 Digits with V or 12 Digits"')];
//  const checkCharacter=[regex(/^[a-zA-Z]*$/,'Must be letters')];


class FamilyInfoForm extends Component {


    render() {
        return (
            <Grid
            container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
             
           

                <ArrayInput source="Spouse_Details" label="Spouse Details" >
                    <SimpleFormIterator >
                   
                <TextInput
                    source="nic"
                    label="NIC Number"
                    formClassName={this.props.classes.right}
                    // validate={validateNIC}
                    style = {{width:300}}
                />
                <TextInput
                    source="in_name"
                    label="Name with Initials in English"
                    formClassName={this.props.classes.left}
                    // validate={checkCharacter}
                    style = {{width:300}}
                    inputProps={{ placeholder: 'C.Amarasinghe'}}
                   
                />
                <TextInput
                    source="en_in_fullname"
                    label="Full Name in English"
                    formClassName={this.props.classes.right}
                    // validate={checkCharacter}
                    style = {{width:300}}
                    inputProps={{ placeholder: 'Chamalie Amarasinghe'}}
                />
            
                <TextInput
                    source="si_in_na"
                    label="Name with initials in Sinhala"
                    formClassName={this.props.classes.left}
                    // validate={checkCharacter}
                    style = {{width:300}}
                    inputProps={{ placeholder: 'සී.අමරසිංහ'}}
                />
                <TextInput
                    source="ta_in_name"
                    label="Name with Initials in Tamil"
                    formClassName={this.props.classes.left}
                    // validate={checkCharacter}
                    style = {{width:300}}
                    inputProps={{ placeholder: 'சி. அமரசிங்க'}}
                   
                />
                <RadioButtonGroupInput
                    source="gender"
                    formClassName={this.props.classes.right}
                    label="Gender"
                    choices={data.gender} />

                <SelectInput
                    source="ethinicity"
                    label="Ethnicity"
                    formClassName={this.props.classes.right}
                    choices={data.ethinicity}
                />
                <SelectInput
                            source="religion"
                            label="Religon"
                            formClassName={this.props.classes.right}
                            choices={data.religion}
                />
                <DateInput
                    source="dob"
                    formClassName={this.props.classes.left}
                    label="Date of Birth"
                   
                >
                </DateInput>
                <TextInput
                    source="address"
                    label="Address"
                    formClassName={this.props.classes.left}
                />
                <TextInput
                    source="occupation"
                    label="Occupation"
                    formClassName={this.props.classes.left}

                />

                <TextInput
                    source="office_address"
                    label="Office Address"
                    formClassName={this.props.classes.left}
                />
                <TextInput
                    source="telephone"
                    label="Telephone Number"
                    formClassName={this.props.classes.left}
                    // validate={validatePhoneno}
                />
                </SimpleFormIterator>
                </ArrayInput>
                
                
                <FormTab>
                <ArrayInput source="Children_Details" label="Children Details" >
                    <SimpleFormIterator >
                        <TextInput
                            source="name"
                            label="Child Name"
                            formClassName={this.props.classes.left}
                            // validate={checkCharacter}
                        />
                        <DateInput
                            source="dob"
                            formClassName={this.props.classes.left}
                            label="Date of Birth"
                           
                        />
                        <RadioButtonGroupInput
                            source="gender"
                            formClassName={this.props.classes.right}
                            label="Gender"
                            choices={data.gender} />
                        <ImageInput source="bc" label="Birth Certificate" accept="image/*">
                            <ImageField source="bc" title="title" />
                        </ImageInput>
                    </SimpleFormIterator>
                </ArrayInput>
                
                </FormTab>
                
            
                </Grid>
        )
    }


}

export default withStyles(styles)(FamilyInfoForm);
