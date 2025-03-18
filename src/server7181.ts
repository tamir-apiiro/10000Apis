
const express = require('express')
import {handler7181} from "./handler7181";
const app = express()
app.get('/7181', handler7181)
app.listen(3000, () => {})
        