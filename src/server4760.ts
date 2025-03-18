
const express = require('express')
import {handler4760} from "./handler4760";
const app = express()
app.get('/4760', handler4760)
app.listen(3000, () => {})
        