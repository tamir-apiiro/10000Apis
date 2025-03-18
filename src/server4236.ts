
const express = require('express')
import {handler4236} from "./handler4236";
const app = express()
app.get('/4236', handler4236)
app.listen(3000, () => {})
        