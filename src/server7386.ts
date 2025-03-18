
const express = require('express')
import {handler7386} from "./handler7386";
const app = express()
app.get('/7386', handler7386)
app.listen(3000, () => {})
        