import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    
    <View style={styles.container}>
      
      <Image
      style={styles.felipe}
      source={require('../assets/images/felipe_neto.jpg')}
      />

      <View style={styles.containerImagem}>
      <Image
      style={styles.imagens}
      source={require('../assets/images/lula.jpeg')}
      />
      <View style={styles.text}>
        <Text style={styles.fonte}>Lula lindinho
        </Text>
        <Text style={styles.funcao}>13</Text>
        </View>
      </View>

      <View style={styles.containerImagem}>
      <Image
      style={styles.imagens}
      source={require('../assets/images/pablo.jpg')}
      />
      <View style={styles.text}>
        <Text style={styles.fonte}>Anderson votou em marçal</Text>
        <Text style={styles.funcao}>28</Text>
      </View>
      </View>

      <View style={styles.containerImagem}>
      <Image
      style={styles.imagens}
      source={require('../assets/images/papa.jpg')}
      />
      <View style={styles.text}>
        <Text style={styles.fonte}>Papa vivo</Text>
        <Text style={styles.funcao}>I</Text>
        </View>
      </View>

      <View style={styles.containerImagem}>
      <Image
      style={styles.imagens}
      source={require('../assets/images/bolsonaro.webp')}
      />
      <View style={styles.text}>
        <Text style={styles.fonte}>Bolsonaro depois da facada</Text>
        <Text style={styles.funcao}>22</Text>
        </View>
      </View>
    </View>
        
  );
}

const styles = StyleSheet.create ({
  container: {
    padding: 25,
    width: "100%",
    height: 250,
    //marginTop: 5,
  },

  texto: {
    //fontSize: 15,
    //color: '#006400',
  },
  
  felipe: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    marginTop: 10,
  },

  imagens: {
    width: 65,
    marginBottom: 15,
    height: 65,
    borderRadius: 200 / 2,
    margin: 10,
    borderColor: 'white',
    borderWidth: 2,
  },

  containerImagem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#D3D3D3",
    //padding: 10,
    borderRadius: 10,
  },

  text: {
    flexGrow: 1,
    marginLeft: 20,
  },

  fonte: {
    fontSize: 17,
  },

  funcao: {
    color: 'red',
  },
})