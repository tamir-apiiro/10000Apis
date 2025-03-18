
const express = require('express')
import {handler2188} from "./handler2188";
const app = express()
app.get('/2188', handler2188)
app.listen(3000, () => {})
        