
const express = require('express')
import {handler1206} from "./handler1206";
const app = express()
app.get('/1206', handler1206)
app.listen(3000, () => {})
        