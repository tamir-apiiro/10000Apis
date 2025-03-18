
const express = require('express')
import {handler1804} from "./handler1804";
const app = express()
app.get('/1804', handler1804)
app.listen(3000, () => {})
        