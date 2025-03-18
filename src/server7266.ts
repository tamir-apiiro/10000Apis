
const express = require('express')
import {handler7266} from "./handler7266";
const app = express()
app.get('/7266', handler7266)
app.listen(3000, () => {})
        