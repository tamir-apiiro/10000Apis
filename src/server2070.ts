
const express = require('express')
import {handler2070} from "./handler2070";
const app = express()
app.get('/2070', handler2070)
app.listen(3000, () => {})
        