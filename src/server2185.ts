
const express = require('express')
import {handler2185} from "./handler2185";
const app = express()
app.get('/2185', handler2185)
app.listen(3000, () => {})
        