import { Text, View, Image, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View  className="flex-1 p-4 gap-10">
        <View className="flex-row items-center justify-between">
          
          <View className="flex-row items-center gap-4">
            <View className=" rounded-full w-20 h-20 bg-red-500"></View>
            <View className="flex-col">
              <Text className="text-2xl font-semibold">Username</Text>
              <Text className="text-1xl text-gray-500">Usuário</Text>
            </View>
          </View>
          
          <View className="flex-row gap-4">
            <Image source={require('../assets/images/shopping.png')} className="max-w-8 max-h-8"></Image>
            <Image source={require('../assets/images/bell.png')} className="max-w-8 max-h-8"></Image>
          </View>

        </View>

        <View className="h-11 w-full bg-white rounded-3xl flex-row items-center justify-between">
          <View className="items-center px-3 h-full flex-row gap-3">
            <Image source={require('../assets/images/search.png')} className="max-w-6 max-h-6"></Image>
            <Text className="text-gray-500 text-1xl">Pesquia de produtos</Text>
          </View>
          <Image source={require('../assets/images/camera.png')} className="max-w-6 max-h-6 mr-4"></Image>
        </View>

        <View className="bg-yellow-400 flex-row w-full h-64 rounded-lg items-center justify-around p-2">
          <Image source={require('../assets/images/roupa.png')} className="max-w-28 max-h-full p-20w rounded-sm shadow shadow-yellow-500"></Image>
          <View className="flex-col items-center">
            <Text className="text-white text-2xl font-light">Liquida Verão 2025</Text>
            <Text className="text-white text-2xl font-bold">Roupas com até</Text>
            <Text className="text-white text-2xl font-bold">60% de Desconto</Text>
          </View>
        </View>

        <View className="flex-col gap-3">
          <Text className="font-medium text-3xl ">Categorias</Text>
          <View className="flex-row w-full gap-5">
            
            <View className="bg-red-500 rounded-md p-2 items-center justify-center shadow">
              <Image source={require('../assets/images/camisa-branca.png')} className="max-w-8 max-h-8"></Image>
            </View>
            
            <View className="bg-white rounded-md p-2 shadow">
              <Image source={require('../assets/images/tenis.png')} className="max-w-8 max-h-8"></Image>
            </View>
            
            <View className="bg-white rounded-md p-2 shadow">
              <Image source={require('../assets/images/bolsa.png')} className="max-w-8 max-h-8"></Image>
            </View>
            
            <View className="bg-white rounded-md p-2 shadow">
              <Image source={require('../assets/images/vestido.png')} className="max-w-8 max-h-8"></Image>
            </View>
          
          </View>
        </View>

        <View className="flex-row w-full gap-3 justify-center flex-wrap">

          <View className="bg-white w-40 p-3 shadow shadow-gray-300">
            <Image source={require('../assets/images/img1.png')} className="max-w-full max-h-36"></Image>
            <Text className="text-2xl text-black font-bold">Camiseta</Text>
            <Text className="text-red-500">$200</Text>
          </View>

          <View className="bg-white w-40 p-3 shadow shadow-gray-300">
            <Image source={require('../assets/images/img2.png')} className="max-w-full max-h-36"></Image>
            <Text className="text-2xl text-black font-bold">Camiseta</Text>
            <Text className="text-red-500">$200</Text>
          </View>

          <View className="bg-white w-40 p-3 shadow shadow-gray-300">
            <Image source={require('../assets/images/img3.png')} className="max-w-full max-h-36"></Image>
            <Text className="text-2xl text-black font-bold">Camiseta</Text>
            <Text className="text-red-500">$200</Text>
          </View>

          <View className="bg-white w-40 p-3 shadow shadow-gray-300">
            <Image source={require('../assets/images/img4.png')} className="max-w-full max-h-36"></Image>
            <Text className="text-2xl text-black font-bold">Camiseta</Text>
            <Text className="text-red-500">$200</Text>
          </View>

          <View className="bg-white w-40 p-3 shadow shadow-gray-300">
            <Image source={require('../assets/images/img1.png')} className="max-w-full max-h-36"></Image>
            <Text className="text-2xl text-black font-bold">Camiseta</Text>
            <Text className="text-red-500">$200</Text>
          </View>

          <View className="bg-white w-40 p-3 shadow shadow-gray-300">
            <Image source={require('../assets/images/img2.png')} className="max-w-full max-h-36"></Image>
            <Text className="text-2xl text-black font-bold">Camiseta</Text>
            <Text className="text-red-500">$200</Text>
          </View>

          <View className="bg-white w-40 p-3 shadow shadow-gray-300">
            <Image source={require('../assets/images/img3.png')} className="max-w-full max-h-36"></Image>
            <Text className="text-2xl text-black font-bold">Camiseta</Text>
            <Text className="text-red-500">$200</Text>
          </View>

          <View className="bg-white w-40 p-3 shadow shadow-gray-300">
            <Image source={require('../assets/images/img4.png')} className="max-w-full max-h-36"></Image>
            <Text className="text-2xl text-black font-bold">Camiseta</Text>
            <Text className="text-red-500">$200</Text>
          </View>
        
        </View>
      </View>


    </ScrollView>
  );
}
