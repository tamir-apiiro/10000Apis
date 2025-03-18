
const express = require('express')
import {handler2101} from "./handler2101";
const app = express()
app.get('/2101', handler2101)
app.listen(3000, () => {})
        