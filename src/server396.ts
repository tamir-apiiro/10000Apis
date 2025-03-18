
const express = require('express')
import {handler396} from "./handler396";
const app = express()
app.get('/396', handler396)
app.listen(3000, () => {})
        