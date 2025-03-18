
const express = require('express')
import {handler1315} from "./handler1315";
const app = express()
app.get('/1315', handler1315)
app.listen(3000, () => {})
        