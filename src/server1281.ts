
const express = require('express')
import {handler1281} from "./handler1281";
const app = express()
app.get('/1281', handler1281)
app.listen(3000, () => {})
        