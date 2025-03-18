
const express = require('express')
import {handler1377} from "./handler1377";
const app = express()
app.get('/1377', handler1377)
app.listen(3000, () => {})
        