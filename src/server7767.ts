
const express = require('express')
import {handler7767} from "./handler7767";
const app = express()
app.get('/7767', handler7767)
app.listen(3000, () => {})
        