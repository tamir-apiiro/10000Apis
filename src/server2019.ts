
const express = require('express')
import {handler2019} from "./handler2019";
const app = express()
app.get('/2019', handler2019)
app.listen(3000, () => {})
        