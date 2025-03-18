
const express = require('express')
import {handler420} from "./handler420";
const app = express()
app.get('/420', handler420)
app.listen(3000, () => {})
        