
const express = require('express')
import {handler2519} from "./handler2519";
const app = express()
app.get('/2519', handler2519)
app.listen(3000, () => {})
        