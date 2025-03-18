
const express = require('express')
import {handler2664} from "./handler2664";
const app = express()
app.get('/2664', handler2664)
app.listen(3000, () => {})
        