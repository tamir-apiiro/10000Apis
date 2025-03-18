
const express = require('express')
import {handler665} from "./handler665";
const app = express()
app.get('/665', handler665)
app.listen(3000, () => {})
        