
const express = require('express')
import {handler7037} from "./handler7037";
const app = express()
app.get('/7037', handler7037)
app.listen(3000, () => {})
        