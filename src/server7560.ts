
const express = require('express')
import {handler7560} from "./handler7560";
const app = express()
app.get('/7560', handler7560)
app.listen(3000, () => {})
        