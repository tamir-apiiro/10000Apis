
const express = require('express')
import {handler7326} from "./handler7326";
const app = express()
app.get('/7326', handler7326)
app.listen(3000, () => {})
        