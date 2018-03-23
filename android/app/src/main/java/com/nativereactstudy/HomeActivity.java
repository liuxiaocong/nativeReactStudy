package com.nativereactstudy;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;

/**
 * Created by xiaoconglau on 10/08/2017.
 */

public class HomeActivity extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home_activity);
        ClipboardManager clipboard = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
        ClipData clip = ClipData.newPlainText("a", "https://www.loopslive.com/web-loops/gz/loopsActives/event-webpack-activities/TrueLoveKnight/?zone=sa&token=d4de96d96a5006a89913caafc3fd33f5&userId=1441657&sig=d5967c872f75d63875ebcf432d7d7dbd&lang=en");
        clipboard.setPrimaryClip(clip);
    }

    public void openWholeReact(View view) {
        Intent intent = new Intent(this, SimpleReactActivity.class);
        startActivity(intent);
    }

    public void openMultiple(View view) {
        Intent intent = new Intent(this, MultipleActivity.class);
        startActivity(intent);
    }

    public void openNativeWebview(View view) {
        Intent intent = new Intent(this, NativeWebviewActivity.class);
        startActivity(intent);
    }

    public void openReactTab(View view) {
        Intent intent = new Intent(this, ReactTabActivity.class);
        startActivity(intent);
    }

    public void openReact2048Tab(View view) {
        Intent intent = new Intent(this, React2048Activity.class);
        startActivity(intent);
    }

    public void openNative2048Webview(View view) {
        Intent intent = new Intent(this, NativeWebview2048Activity.class);
        startActivity(intent);
    }
}

//react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
//        react-native run-android

// adb shell input keyevent 82
// adb reverse tcp:8081 tcp:8081
