
const express = require('express')
import {handler2974} from "./handler2974";
const app = express()
app.get('/2974', handler2974)
app.listen(3000, () => {})
        