
const express = require('express')
import {handler1250} from "./handler1250";
const app = express()
app.get('/1250', handler1250)
app.listen(3000, () => {})
        