import Vue from 'vue'
import Router from 'vue-router'
import templete from 'examples/src/templete'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', name: 'layout', component: templete.Layout, redirect: '/home',

      children: [
        { path: 'home', name: 'home', component: templete.Home  },

        { path: 'layout/', name: 'layoutTemplate', component: templete.LayoutTemplate,
          children: [
            { path: 'anchor_layout', name: 'anchorLayout', component: templete.AnchorLayout },
          ]
        },

        { path: 'menu/', name: 'menu', component: templete.Menu,
          children: [
            { path: 'drop_down', name: 'dropDown', component: templete.DropDown  },
            { path: 'tabs', name: 'anchorTabs', component: templete.AnchorTabs  }
          ]
        },

        { path: 'drag/', name: 'drag', component: templete.Drag,
          children: [
            { path: 'slider', name: 'slider', component: templete.Slider  },
          ]
        },

      ]
    }
  ]
})

export default router
