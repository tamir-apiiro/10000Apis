
const express = require('express')
import {handler7005} from "./handler7005";
const app = express()
app.get('/7005', handler7005)
app.listen(3000, () => {})
        