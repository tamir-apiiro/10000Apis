
const express = require('express')
import {handler5650} from "./handler5650";
const app = express()
app.get('/5650', handler5650)
app.listen(3000, () => {})
        