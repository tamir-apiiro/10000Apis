
const express = require('express')
import {handler1591} from "./handler1591";
const app = express()
app.get('/1591', handler1591)
app.listen(3000, () => {})
        