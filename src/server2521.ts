
const express = require('express')
import {handler2521} from "./handler2521";
const app = express()
app.get('/2521', handler2521)
app.listen(3000, () => {})
        