
const express = require('express')
import {handler1054} from "./handler1054";
const app = express()
app.get('/1054', handler1054)
app.listen(3000, () => {})
        