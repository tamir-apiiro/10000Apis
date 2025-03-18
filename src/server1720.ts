
const express = require('express')
import {handler1720} from "./handler1720";
const app = express()
app.get('/1720', handler1720)
app.listen(3000, () => {})
        