package com.nativereactstudy;

import android.app.Activity;
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
    }

    public void openWholeReact(View view) {
        Intent intent = new Intent(this, SimpleReactActivity.class);
        startActivity(intent);
    }

    public void openMultiple(View view) {
        Intent intent = new Intent(this, MultipleActivity.class);
        startActivity(intent);
    }
}
