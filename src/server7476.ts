
const express = require('express')
import {handler7476} from "./handler7476";
const app = express()
app.get('/7476', handler7476)
app.listen(3000, () => {})
        