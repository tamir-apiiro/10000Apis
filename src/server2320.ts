
const express = require('express')
import {handler2320} from "./handler2320";
const app = express()
app.get('/2320', handler2320)
app.listen(3000, () => {})
        