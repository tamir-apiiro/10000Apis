
const express = require('express')
import {handler2953} from "./handler2953";
const app = express()
app.get('/2953', handler2953)
app.listen(3000, () => {})
        