
const express = require('express')
import {handler1839} from "./handler1839";
const app = express()
app.get('/1839', handler1839)
app.listen(3000, () => {})
        