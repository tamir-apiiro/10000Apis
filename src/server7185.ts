
const express = require('express')
import {handler7185} from "./handler7185";
const app = express()
app.get('/7185', handler7185)
app.listen(3000, () => {})
        