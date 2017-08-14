package com.nativereactstudy.widget;

import android.app.Activity;
import android.graphics.Color;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.nativereactstudy.R;

/**
 * Created by xiaoconglau on 14/08/2017.
 */

public class TestViewManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "RCTTestView";



    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "bgColor")
    public void setBgColor(View view, @Nullable String bgColor) {
        if(bgColor == null)
        {
            return;
        }
        view.setBackgroundColor(Color.parseColor(bgColor));
    }

    @Override
    protected View createViewInstance(ThemedReactContext reactContext) {
        if(reactContext.getCurrentActivity() instanceof Activity)
        {
            Log.d("TestViewManager","is activity");
        }else {
            Log.d("TestViewManager","not activity");
        }
        LayoutInflater layoutInflater = LayoutInflater.from(reactContext.getCurrentActivity());
        return layoutInflater.inflate(R.layout.custom_view, null);
    }
}
