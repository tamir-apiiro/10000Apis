
const express = require('express')
import {handler2466} from "./handler2466";
const app = express()
app.get('/2466', handler2466)
app.listen(3000, () => {})
        