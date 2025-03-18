
const express = require('express')
import {handler7072} from "./handler7072";
const app = express()
app.get('/7072', handler7072)
app.listen(3000, () => {})
        