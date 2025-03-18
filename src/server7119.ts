
const express = require('express')
import {handler7119} from "./handler7119";
const app = express()
app.get('/7119', handler7119)
app.listen(3000, () => {})
        