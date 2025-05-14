import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.texto}>Aplicativo muito legal.</Text>
      <Text style={styles.texto}>Vai comprar?</Text>
      
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
        <Text style={styles.fonte}>Lula lindo!</Text>
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
        <Text>28</Text>
      </View>
      </View>

      <View style={styles.containerImagem}>
      <Image
      style={styles.imagens}
      source={require('../assets/images/papa.jpg')}
      />
      <View style={styles.text}>
        <Text style={styles.fonte}>Papa morto</Text>
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
    padding: 15,
  },
  texto: {
    padding: 3,
  },
  felipe: {
    width: 350,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  imagens: {
    width: 70,
    marginBottom: 15,
    height: 70,
    borderRadius: 200 / 2,
    margin:10,
    
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
    fontSize: 20,
  },
  funcao: {
    color: 'red',
  },
})