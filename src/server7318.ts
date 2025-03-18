
const express = require('express')
import {handler7318} from "./handler7318";
const app = express()
app.get('/7318', handler7318)
app.listen(3000, () => {})
        