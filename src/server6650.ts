
const express = require('express')
import {handler6650} from "./handler6650";
const app = express()
app.get('/6650', handler6650)
app.listen(3000, () => {})
        