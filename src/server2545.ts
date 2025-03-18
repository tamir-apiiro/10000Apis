
const express = require('express')
import {handler2545} from "./handler2545";
const app = express()
app.get('/2545', handler2545)
app.listen(3000, () => {})
        