
const express = require('express')
import {handler3546} from "./handler3546";
const app = express()
app.get('/3546', handler3546)
app.listen(3000, () => {})
        