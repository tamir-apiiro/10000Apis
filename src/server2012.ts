
const express = require('express')
import {handler2012} from "./handler2012";
const app = express()
app.get('/2012', handler2012)
app.listen(3000, () => {})
        