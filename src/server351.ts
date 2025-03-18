
const express = require('express')
import {handler351} from "./handler351";
const app = express()
app.get('/351', handler351)
app.listen(3000, () => {})
        