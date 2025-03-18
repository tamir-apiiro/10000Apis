
const express = require('express')
import {handler4650} from "./handler4650";
const app = express()
app.get('/4650', handler4650)
app.listen(3000, () => {})
        