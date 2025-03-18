
const express = require('express')
import {handler2014} from "./handler2014";
const app = express()
app.get('/2014', handler2014)
app.listen(3000, () => {})
        