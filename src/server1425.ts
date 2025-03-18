
const express = require('express')
import {handler1425} from "./handler1425";
const app = express()
app.get('/1425', handler1425)
app.listen(3000, () => {})
        