
const express = require('express')
import {handler2764} from "./handler2764";
const app = express()
app.get('/2764', handler2764)
app.listen(3000, () => {})
        