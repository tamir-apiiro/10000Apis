
const express = require('express')
import {handler2579} from "./handler2579";
const app = express()
app.get('/2579', handler2579)
app.listen(3000, () => {})
        