
const express = require('express')
import {handler3560} from "./handler3560";
const app = express()
app.get('/3560', handler3560)
app.listen(3000, () => {})
        