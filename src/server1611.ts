
const express = require('express')
import {handler1611} from "./handler1611";
const app = express()
app.get('/1611', handler1611)
app.listen(3000, () => {})
        