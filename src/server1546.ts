
const express = require('express')
import {handler1546} from "./handler1546";
const app = express()
app.get('/1546', handler1546)
app.listen(3000, () => {})
        