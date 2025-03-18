
const express = require('express')
import {handler1098} from "./handler1098";
const app = express()
app.get('/1098', handler1098)
app.listen(3000, () => {})
        