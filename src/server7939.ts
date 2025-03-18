
const express = require('express')
import {handler7939} from "./handler7939";
const app = express()
app.get('/7939', handler7939)
app.listen(3000, () => {})
        