
const express = require('express')
import {handler1872} from "./handler1872";
const app = express()
app.get('/1872', handler1872)
app.listen(3000, () => {})
        