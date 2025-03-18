
const express = require('express')
import {handler7875} from "./handler7875";
const app = express()
app.get('/7875', handler7875)
app.listen(3000, () => {})
        