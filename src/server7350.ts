
const express = require('express')
import {handler7350} from "./handler7350";
const app = express()
app.get('/7350', handler7350)
app.listen(3000, () => {})
        