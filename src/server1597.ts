
const express = require('express')
import {handler1597} from "./handler1597";
const app = express()
app.get('/1597', handler1597)
app.listen(3000, () => {})
        