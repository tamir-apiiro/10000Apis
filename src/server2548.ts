
const express = require('express')
import {handler2548} from "./handler2548";
const app = express()
app.get('/2548', handler2548)
app.listen(3000, () => {})
        