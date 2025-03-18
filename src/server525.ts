
const express = require('express')
import {handler525} from "./handler525";
const app = express()
app.get('/525', handler525)
app.listen(3000, () => {})
        