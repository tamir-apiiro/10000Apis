
const express = require('express')
import {handler2917} from "./handler2917";
const app = express()
app.get('/2917', handler2917)
app.listen(3000, () => {})
        