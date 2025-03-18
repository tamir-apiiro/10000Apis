
const express = require('express')
import {handler7760} from "./handler7760";
const app = express()
app.get('/7760', handler7760)
app.listen(3000, () => {})
        