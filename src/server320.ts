
const express = require('express')
import {handler320} from "./handler320";
const app = express()
app.get('/320', handler320)
app.listen(3000, () => {})
        