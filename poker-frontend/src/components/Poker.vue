<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import poker from '../gen/poker_pb'
import { PokerServiceClient } from '../gen/poker_grpc_web_pb';

export default {
  name: 'Poker',
  props: {
    msg: String
  },
  
  data: function() {
    return {
      greeting: "",
      message: []
    };
  },  
  created: function() {
    this.client = new PokerServiceClient('http://127.0.0.1:8081', null, null);
    this.test_grpc();
  },
  methods: {
    test_grpc: function() {
      let test = new poker.Pokering();
      test.setFirstName("Jeffyboi");
      
      let request = new poker.PokerRequest();
      request.setPokering(test)
      this.client.poker(request, {}, (err, response) => {
        this.message = response.toObject().result;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
