
const express = require('express')
import {handler1351} from "./handler1351";
const app = express()
app.get('/1351', handler1351)
app.listen(3000, () => {})
        