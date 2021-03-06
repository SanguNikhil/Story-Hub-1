import React from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>  <Text style={styles.header}>Read a Story</Text>
            <Text style={styles.text}>This popular story is about a hare (an animal belonging to the rabbit family), which is known to move quickly and a tortoise, which is known to move slower.

The story began when the hare who has won many races proposed a race with the tortoise. The hare simply wanted to prove that he was the best and have the satisfaction of beating him.

The tortoise agreed and the race began.

The hare got a head-start but became overconfident towards the end of the race. His ego made him believe that he could win the race even if he rested for a while.

And so, he took a nap right near the finish line.

Meanwhile, the tortoise walked slowly but extremely determined and dedicated. He did not give up for a second and kept persevering despite the odds not being in his favour.

While the hare was asleep, the tortoise crossed the finish line and won the race!

The best part was that the tortoise did not gloat or put the hare down!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        flex:1,
        fontWeight:'bold',
        fontSize:10,
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        backgroundColor:'coral',
        fontSize:30,
    },
})