
const express = require('express')
import {handler7724} from "./handler7724";
const app = express()
app.get('/7724', handler7724)
app.listen(3000, () => {})
        