
const express = require('express')
import {handler2071} from "./handler2071";
const app = express()
app.get('/2071', handler2071)
app.listen(3000, () => {})
        