
const express = require('express')
import {handler7321} from "./handler7321";
const app = express()
app.get('/7321', handler7321)
app.listen(3000, () => {})
        