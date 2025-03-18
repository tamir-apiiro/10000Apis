
const express = require('express')
import {handler2040} from "./handler2040";
const app = express()
app.get('/2040', handler2040)
app.listen(3000, () => {})
        