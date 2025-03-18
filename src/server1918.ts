
const express = require('express')
import {handler1918} from "./handler1918";
const app = express()
app.get('/1918', handler1918)
app.listen(3000, () => {})
        