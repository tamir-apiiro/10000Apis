
const express = require('express')
import {handler2786} from "./handler2786";
const app = express()
app.get('/2786', handler2786)
app.listen(3000, () => {})
        