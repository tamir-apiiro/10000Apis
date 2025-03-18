
const express = require('express')
import {handler101} from "./handler101";
const app = express()
app.get('/101', handler101)
app.listen(3000, () => {})
        