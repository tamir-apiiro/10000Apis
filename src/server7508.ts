
const express = require('express')
import {handler7508} from "./handler7508";
const app = express()
app.get('/7508', handler7508)
app.listen(3000, () => {})
        