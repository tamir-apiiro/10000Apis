
const express = require('express')
import {handler2760} from "./handler2760";
const app = express()
app.get('/2760', handler2760)
app.listen(3000, () => {})
        