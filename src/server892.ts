
const express = require('express')
import {handler892} from "./handler892";
const app = express()
app.get('/892', handler892)
app.listen(3000, () => {})
        