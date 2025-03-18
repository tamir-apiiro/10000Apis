
const express = require('express')
import {handler2560} from "./handler2560";
const app = express()
app.get('/2560', handler2560)
app.listen(3000, () => {})
        