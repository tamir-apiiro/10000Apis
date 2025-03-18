
const express = require('express')
import {handler1318} from "./handler1318";
const app = express()
app.get('/1318', handler1318)
app.listen(3000, () => {})
        