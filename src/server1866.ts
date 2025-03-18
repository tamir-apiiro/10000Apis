
const express = require('express')
import {handler1866} from "./handler1866";
const app = express()
app.get('/1866', handler1866)
app.listen(3000, () => {})
        