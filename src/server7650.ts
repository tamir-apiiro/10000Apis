
const express = require('express')
import {handler7650} from "./handler7650";
const app = express()
app.get('/7650', handler7650)
app.listen(3000, () => {})
        