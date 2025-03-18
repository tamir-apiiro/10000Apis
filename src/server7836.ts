
const express = require('express')
import {handler7836} from "./handler7836";
const app = express()
app.get('/7836', handler7836)
app.listen(3000, () => {})
        