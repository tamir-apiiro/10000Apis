
const express = require('express')
import {handler4195} from "./handler4195";
const app = express()
app.get('/4195', handler4195)
app.listen(3000, () => {})
        