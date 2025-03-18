
const express = require('express')
import {handler2597} from "./handler2597";
const app = express()
app.get('/2597', handler2597)
app.listen(3000, () => {})
        