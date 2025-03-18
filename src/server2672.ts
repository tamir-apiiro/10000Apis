
const express = require('express')
import {handler2672} from "./handler2672";
const app = express()
app.get('/2672', handler2672)
app.listen(3000, () => {})
        