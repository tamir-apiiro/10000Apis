
const express = require('express')
import {handler2407} from "./handler2407";
const app = express()
app.get('/2407', handler2407)
app.listen(3000, () => {})
        