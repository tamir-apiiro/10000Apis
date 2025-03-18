
const express = require('express')
import {handler7773} from "./handler7773";
const app = express()
app.get('/7773', handler7773)
app.listen(3000, () => {})
        