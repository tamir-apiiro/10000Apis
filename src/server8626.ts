
const express = require('express')
import {handler8626} from "./handler8626";
const app = express()
app.get('/8626', handler8626)
app.listen(3000, () => {})
        