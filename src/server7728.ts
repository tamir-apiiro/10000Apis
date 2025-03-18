
const express = require('express')
import {handler7728} from "./handler7728";
const app = express()
app.get('/7728', handler7728)
app.listen(3000, () => {})
        