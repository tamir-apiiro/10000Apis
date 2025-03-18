
const express = require('express')
import {handler1621} from "./handler1621";
const app = express()
app.get('/1621', handler1621)
app.listen(3000, () => {})
        