
const express = require('express')
import {handler1293} from "./handler1293";
const app = express()
app.get('/1293', handler1293)
app.listen(3000, () => {})
        