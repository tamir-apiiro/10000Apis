
const express = require('express')
import {handler1242} from "./handler1242";
const app = express()
app.get('/1242', handler1242)
app.listen(3000, () => {})
        