
const express = require('express')
import {handler7092} from "./handler7092";
const app = express()
app.get('/7092', handler7092)
app.listen(3000, () => {})
        