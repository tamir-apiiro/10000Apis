
const express = require('express')
import {handler1675} from "./handler1675";
const app = express()
app.get('/1675', handler1675)
app.listen(3000, () => {})
        