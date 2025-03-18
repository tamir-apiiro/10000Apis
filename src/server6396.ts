
const express = require('express')
import {handler6396} from "./handler6396";
const app = express()
app.get('/6396', handler6396)
app.listen(3000, () => {})
        