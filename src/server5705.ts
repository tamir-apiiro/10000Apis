
const express = require('express')
import {handler5705} from "./handler5705";
const app = express()
app.get('/5705', handler5705)
app.listen(3000, () => {})
        