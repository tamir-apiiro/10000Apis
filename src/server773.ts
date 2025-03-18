
const express = require('express')
import {handler773} from "./handler773";
const app = express()
app.get('/773', handler773)
app.listen(3000, () => {})
        