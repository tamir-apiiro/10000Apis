
const express = require('express')
import {handler7546} from "./handler7546";
const app = express()
app.get('/7546', handler7546)
app.listen(3000, () => {})
        