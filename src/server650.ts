
const express = require('express')
import {handler650} from "./handler650";
const app = express()
app.get('/650', handler650)
app.listen(3000, () => {})
        