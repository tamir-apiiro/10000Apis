
const express = require('express')
import {handler2812} from "./handler2812";
const app = express()
app.get('/2812', handler2812)
app.listen(3000, () => {})
        