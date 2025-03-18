
const express = require('express')
import {handler2192} from "./handler2192";
const app = express()
app.get('/2192', handler2192)
app.listen(3000, () => {})
        