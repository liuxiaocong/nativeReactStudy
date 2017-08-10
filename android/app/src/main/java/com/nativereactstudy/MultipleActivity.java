package com.nativereactstudy;

import com.facebook.react.ReactActivity;

public class MultipleActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "multipleComponent";
    }
}
