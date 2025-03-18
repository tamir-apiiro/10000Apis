
const express = require('express')
import {handler1881} from "./handler1881";
const app = express()
app.get('/1881', handler1881)
app.listen(3000, () => {})
        