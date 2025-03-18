
const express = require('express')
import {handler2117} from "./handler2117";
const app = express()
app.get('/2117', handler2117)
app.listen(3000, () => {})
        