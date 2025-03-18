
const express = require('express')
import {handler1724} from "./handler1724";
const app = express()
app.get('/1724', handler1724)
app.listen(3000, () => {})
        