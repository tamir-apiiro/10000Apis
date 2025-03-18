
const express = require('express')
import {handler2546} from "./handler2546";
const app = express()
app.get('/2546', handler2546)
app.listen(3000, () => {})
        