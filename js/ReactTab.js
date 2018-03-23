/**
 * Created by xiaoconglau on 10/08/2017.
 */
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Platform,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Toast from './Toast';
import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputVal: {
    width: 300,
  },
  image: {
    width: '100%',
    height:150,
  },
  scrollView: {
    width: '100%',
    display:'flex',
  },
  subImage: {
    width: '40%',
    height:150,
  },
  wrap: {
    display:'flex',
    flexDirection:'row'
  },
  subText: {
    width: '55%',
  }
});

class ReactTab extends React.Component {

  // Mounting
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <Swiper style={ styles.wrapper } showsButtons={ false }>
        <View style={ styles.slide1 }>
          <TextInput style={ styles.inputVal }
                     value={ 'https://www.loopslive.com/web-loops/gz/loopsActives/event-webpack-activities/TrueLoveKnight/?zone=sa&token=d4de96d96a5006a89913caafc3fd33f5&userId=1441657&sig=d5967c872f75d63875ebcf432d7d7dbd&lang=en' }/>
        </View>
        <View style={ styles.slide2 }>
          <ScrollView style={ styles.scrollView }>
          <Image
            style={ styles.image }
            source={{uri: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=41bbbd1af7faaf5184e380bfbc5594ed/314e251f95cad1c82826e91b753e6709c93d5168.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://d2slvvdd87p1qe.cloudfront.net/wp-content/uploads/2014/08/Train-Feature.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://image5.tuku.cn/pic/wallpaper/fengjing/yingguoyuanlifengjing/006.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://pixdaus.com/files/items/pics/2/65/282265_48e0f5a894c8028679ff1ce72308a0d2_large.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'https://wallpaperstock.net/wallpapers/thumbs1/48917wide.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://3.bp.blogspot.com/-5qGd-t5w9bY/Uo1VpRzLeaI/AAAAAAAAHfw/5O9_Cwi6fHc/s640/England+Warwickshire+Cotswold+village+street+via+WikiMedia.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://image5.tuku.cn/pic/wallpaper/qita/huapi2yingshibizhi/018.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://5b0988e595225.cdn.sohucs.com/images/20170923/ff14dcfc7da74dfe8e9a6ecc16c49fbf.jpeg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://pic3.bbzhi.com/mingxingbizhi/zhangziyichuxibailindianying/star_starcn_141659_5.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=41bbbd1af7faaf5184e380bfbc5594ed/314e251f95cad1c82826e91b753e6709c93d5168.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://d2slvvdd87p1qe.cloudfront.net/wp-content/uploads/2014/08/Train-Feature.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://image5.tuku.cn/pic/wallpaper/fengjing/yingguoyuanlifengjing/006.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://pixdaus.com/files/items/pics/2/65/282265_48e0f5a894c8028679ff1ce72308a0d2_large.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'https://wallpaperstock.net/wallpapers/thumbs1/48917wide.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://3.bp.blogspot.com/-5qGd-t5w9bY/Uo1VpRzLeaI/AAAAAAAAHfw/5O9_Cwi6fHc/s640/England+Warwickshire+Cotswold+village+street+via+WikiMedia.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://image5.tuku.cn/pic/wallpaper/qita/huapi2yingshibizhi/018.jpg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://5b0988e595225.cdn.sohucs.com/images/20170923/ff14dcfc7da74dfe8e9a6ecc16c49fbf.jpeg'}}
          />
          <Image
            style={ styles.image }
            source={{uri: 'http://pic3.bbzhi.com/mingxingbizhi/zhangziyichuxibailindianying/star_starcn_141659_5.jpg'}}
          />
          <Text style={ styles.text }>Beautiful</Text>
          </ScrollView>
        </View>
        <View style={ styles.slide3 }>
          <ScrollView style={ styles.scrollView }>
            <View style={ styles.wrap}>
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://pic3.bbzhi.com/mingxingbizhi/zhangziyichuxibailindianying/star_starcn_141659_5.jpg'}}
              />
            </View>
            <View style={ styles.wrap}>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://3.bp.blogspot.com/-5qGd-t5w9bY/Uo1VpRzLeaI/AAAAAAAAHfw/5O9_Cwi6fHc/s640/England+Warwickshire+Cotswold+village+street+via+WikiMedia.jpg'}}
              />
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
            </View>
            <View style={ styles.wrap}>
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://pixdaus.com/files/items/pics/2/65/282265_48e0f5a894c8028679ff1ce72308a0d2_large.jpg'}}
              />
            </View>
            <View style={ styles.wrap}>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://d2slvvdd87p1qe.cloudfront.net/wp-content/uploads/2014/08/Train-Feature.jpg'}}
              />
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
            </View>
            <View style={ styles.wrap}>
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://5b0988e595225.cdn.sohucs.com/images/20170923/ff14dcfc7da74dfe8e9a6ecc16c49fbf.jpeg'}}
              />
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
            </View>
            <View style={ styles.wrap}>
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://pic3.bbzhi.com/mingxingbizhi/zhangziyichuxibailindianying/star_starcn_141659_5.jpg'}}
              />
            </View>
            <View style={ styles.wrap}>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://3.bp.blogspot.com/-5qGd-t5w9bY/Uo1VpRzLeaI/AAAAAAAAHfw/5O9_Cwi6fHc/s640/England+Warwickshire+Cotswold+village+street+via+WikiMedia.jpg'}}
              />
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
            </View>
            <View style={ styles.wrap}>
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://pixdaus.com/files/items/pics/2/65/282265_48e0f5a894c8028679ff1ce72308a0d2_large.jpg'}}
              />
            </View>
            <View style={ styles.wrap}>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://d2slvvdd87p1qe.cloudfront.net/wp-content/uploads/2014/08/Train-Feature.jpg'}}
              />
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
            </View>
            <View style={ styles.wrap}>
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
              <Image
                style={ styles.subImage }
                source={{uri: 'http://5b0988e595225.cdn.sohucs.com/images/20170923/ff14dcfc7da74dfe8e9a6ecc16c49fbf.jpeg'}}
              />
              <Text style={ styles.subText }>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
            </View>
          </ScrollView>
        </View>
      </Swiper>
    );
  }

  componentDidMount() {

  }

  //End Mounting

  //Updating

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  //End Updating

  //Un Mounting
  componentWillUnmount() {

  }

  //End Un Mounting
}

export default ReactTab;


<div class="swipe-wrap">
  <div>
    <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=41bbbd1af7faaf5184e380bfbc5594ed/314e251f95cad1c82826e91b753e6709c93d5168.jpg"/>
    <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
    <img src="http://d2slvvdd87p1qe.cloudfront.net/wp-content/uploads/2014/08/Train-Feature.jpg"/>
    <img src="http://image5.tuku.cn/pic/wallpaper/fengjing/yingguoyuanlifengjing/006.jpg"/>
    <img src="http://pixdaus.com/files/items/pics/2/65/282265_48e0f5a894c8028679ff1ce72308a0d2_large.jpg"/>
    <img src="https://wallpaperstock.net/wallpapers/thumbs1/48917wide.jpg"/>
    <img src="http://pixdaus.com/files/items/pics/6/14/188614_aa7a6a4fb4ed976b4f5eb920847cd786_large.jpg"/>
    <img src="http://3.bp.blogspot.com/-5qGd-t5w9bY/Uo1VpRzLeaI/AAAAAAAAHfw/5O9_Cwi6fHc/s640/England+Warwickshire+Cotswold+village+street+via+WikiMedia.jpg"/>
    <img src="http://image5.tuku.cn/pic/wallpaper/qita/huapi2yingshibizhi/018.jpg"/>
    <img src="http://5b0988e595225.cdn.sohucs.com/images/20170923/ff14dcfc7da74dfe8e9a6ecc16c49fbf.jpeg"/>
    <img src="http://pic3.bbzhi.com/mingxingbizhi/zhangziyichuxibailindianying/star_starcn_141659_5.jpg"/>
    <img src="https://pic.36krcnd.com/avatar/201702/16110529/tt7jqmxr59avot5m.jpeg!1200"/>
    <img src="http://pic1.win4000.com/wallpaper/4/5379566a4ff0d.jpg"/>
    <img src="http://pic1.bbzhi.com/yingshibizhi/wanjuzongdongyuan3toystory3/film_2010_06_toy_story_3_495639_5.jpg"/>
    <img src="http://www.wallcoo.com/game/MMOG_91_tf/wallpapers/1920x1200/tfo_dhf.jpg"/>
    <img src="http://www.wallcoo.com/film/2010_11_Tangled/wallpapers/1600x1200/tangled_pub-thugs.jpg"/>
    <img src="http://www.wallcoo.com/film/2009_06_The_Hangover/wallpapers/1600x1200/The_Hangover_wall14.jpg"/>
    <img src="http://www.33lc.com/article/UploadPic/2012-9/201291114415536020.jpg"/>
  </div>
  <div>
    <div class="wrap">
      <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://pic1.win4000.com/wallpaper/4/5379566a4ff0d.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://pic1.bbzhi.com/yingshibizhi/wanjuzongdongyuan3toystory3/film_2010_06_toy_story_3_495639_5.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://www.wallcoo.com/film/2010_11_Tangled/wallpapers/1600x1200/tangled_pub-thugs.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://www.wallcoo.com/film/2009_06_The_Hangover/wallpapers/1600x1200/The_Hangover_wall14.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://www.wallcoo.com/game/MMOG_91_tf/wallpapers/1920x1200/tfo_dhf.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://5b0988e595225.cdn.sohucs.com/images/20170923/ff14dcfc7da74dfe8e9a6ecc16c49fbf.jpeg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://image5.tuku.cn/pic/wallpaper/fengjing/yingguoyuanlifengjing/006.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://www.wallcoo.com/film/2009_06_The_Hangover/wallpapers/1600x1200/The_Hangover_wall14.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://www.wallcoo.com/film/2010_11_Tangled/wallpapers/1600x1200/tangled_pub-thugs.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://pic1.bbzhi.com/yingshibizhi/wanjuzongdongyuan3toystory3/film_2010_06_toy_story_3_495639_5.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://pic1.win4000.com/wallpaper/4/5379566a4ff0d.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <div class="wrap">
      <img src="http://pic1.win4000.com/wallpaper/4/5379566a4ff0d.jpg"/>
      <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>

  </div>
  <div>

    <img src="https://pic.36krcnd.com/avatar/201702/16110529/tt7jqmxr59avot5m.jpeg!1200"/>
    <img src="http://pic1.win4000.com/wallpaper/4/5379566a4ff0d.jpg"/>
    <img src="http://pic1.bbzhi.com/yingshibizhi/wanjuzongdongyuan3toystory3/film_2010_06_toy_story_3_495639_5.jpg"/>
    <img src="http://www.wallcoo.com/game/MMOG_91_tf/wallpapers/1920x1200/tfo_dhf.jpg"/>
    <img src="http://www.wallcoo.com/film/2010_11_Tangled/wallpapers/1600x1200/tangled_pub-thugs.jpg"/>
    <img src="http://www.wallcoo.com/film/2009_06_The_Hangover/wallpapers/1600x1200/The_Hangover_wall14.jpg"/>
    <img src="http://www.33lc.com/article/UploadPic/2012-9/201291114415536020.jpg"/>
    <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=41bbbd1af7faaf5184e380bfbc5594ed/314e251f95cad1c82826e91b753e6709c93d5168.jpg"/>
    <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
    <img src="http://d2slvvdd87p1qe.cloudfront.net/wp-content/uploads/2014/08/Train-Feature.jpg"/>
    <img src="http://image5.tuku.cn/pic/wallpaper/fengjing/yingguoyuanlifengjing/006.jpg"/>
    <img src="http://pixdaus.com/files/items/pics/2/65/282265_48e0f5a894c8028679ff1ce72308a0d2_large.jpg"/>
    <img src="https://wallpaperstock.net/wallpapers/thumbs1/48917wide.jpg"/>
    <img src="http://pixdaus.com/files/items/pics/6/14/188614_aa7a6a4fb4ed976b4f5eb920847cd786_large.jpg"/>
    <img src="http://3.bp.blogspot.com/-5qGd-t5w9bY/Uo1VpRzLeaI/AAAAAAAAHfw/5O9_Cwi6fHc/s640/England+Warwickshire+Cotswold+village+street+via+WikiMedia.jpg"/>
    <img src="http://image5.tuku.cn/pic/wallpaper/qita/huapi2yingshibizhi/018.jpg"/>
    <img src="http://5b0988e595225.cdn.sohucs.com/images/20170923/ff14dcfc7da74dfe8e9a6ecc16c49fbf.jpeg"/>
    <img src="http://pic3.bbzhi.com/mingxingbizhi/zhangziyichuxibailindianying/star_starcn_141659_5.jpg"/>
  </div>
  <div>
    <img src="http://5b0988e595225.cdn.sohucs.com/images/20170923/ff14dcfc7da74dfe8e9a6ecc16c49fbf.jpeg"/>
    <img src="http://pic3.bbzhi.com/mingxingbizhi/zhangziyichuxibailindianying/star_starcn_141659_5.jpg"/>
    <img src="http://pic1.bbzhi.com/yingshibizhi/wanjuzongdongyuan3toystory3/film_2010_06_toy_story_3_495639_5.jpg"/>
    <img src="http://www.wallcoo.com/game/MMOG_91_tf/wallpapers/1920x1200/tfo_dhf.jpg"/>
    <img src="http://www.wallcoo.com/film/2010_11_Tangled/wallpapers/1600x1200/tangled_pub-thugs.jpg"/>
    <img src="http://www.wallcoo.com/film/2009_06_The_Hangover/wallpapers/1600x1200/The_Hangover_wall14.jpg"/>
    <img src="http://www.33lc.com/article/UploadPic/2012-9/201291114415536020.jpg"/>
    <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=41bbbd1af7faaf5184e380bfbc5594ed/314e251f95cad1c82826e91b753e6709c93d5168.jpg"/>
    <img src="https://tva3.sinaimg.cn/crop.0.0.1024.576/90eb2137ly1fkujfiu2eij20sg0j1jub.jpg"/>
    <img src="http://d2slvvdd87p1qe.cloudfront.net/wp-content/uploads/2014/08/Train-Feature.jpg"/>
    <img src="http://image5.tuku.cn/pic/wallpaper/fengjing/yingguoyuanlifengjing/006.jpg"/>
    <img src="http://pixdaus.com/files/items/pics/2/65/282265_48e0f5a894c8028679ff1ce72308a0d2_large.jpg"/>
    <img src="https://wallpaperstock.net/wallpapers/thumbs1/48917wide.jpg"/>
    <img src="http://pixdaus.com/files/items/pics/6/14/188614_aa7a6a4fb4ed976b4f5eb920847cd786_large.jpg"/>
    <img src="http://3.bp.blogspot.com/-5qGd-t5w9bY/Uo1VpRzLeaI/AAAAAAAAHfw/5O9_Cwi6fHc/s640/England+Warwickshire+Cotswold+village+street+via+WikiMedia.jpg"/>
    <img src="http://image5.tuku.cn/pic/wallpaper/qita/huapi2yingshibizhi/018.jpg"/>
    <img src="https://pic.36krcnd.com/avatar/201702/16110529/tt7jqmxr59avot5m.jpeg!1200"/>
    <img src="http://pic1.win4000.com/wallpaper/4/5379566a4ff0d.jpg"/>
  </div>

</div>

