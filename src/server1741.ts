
const express = require('express')
import {handler1741} from "./handler1741";
const app = express()
app.get('/1741', handler1741)
app.listen(3000, () => {})
        