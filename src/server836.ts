
const express = require('express')
import {handler836} from "./handler836";
const app = express()
app.get('/836', handler836)
app.listen(3000, () => {})
        