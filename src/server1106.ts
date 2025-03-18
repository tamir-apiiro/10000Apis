
const express = require('express')
import {handler1106} from "./handler1106";
const app = express()
app.get('/1106', handler1106)
app.listen(3000, () => {})
        