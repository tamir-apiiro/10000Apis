
const express = require('express')
import {handler1619} from "./handler1619";
const app = express()
app.get('/1619', handler1619)
app.listen(3000, () => {})
        