package com.nativereactstudy;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.nativereactstudy.widget.TestViewReactPackage;

import java.util.Arrays;
import java.util.List;

public class SimpleReactActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "nativeReactStudy";
    }

}
