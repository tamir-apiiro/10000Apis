
const express = require('express')
import {handler1068} from "./handler1068";
const app = express()
app.get('/1068', handler1068)
app.listen(3000, () => {})
        