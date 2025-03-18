
const express = require('express')
import {handler2540} from "./handler2540";
const app = express()
app.get('/2540', handler2540)
app.listen(3000, () => {})
        