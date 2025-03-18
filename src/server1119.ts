
const express = require('express')
import {handler1119} from "./handler1119";
const app = express()
app.get('/1119', handler1119)
app.listen(3000, () => {})
        