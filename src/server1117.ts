
const express = require('express')
import {handler1117} from "./handler1117";
const app = express()
app.get('/1117', handler1117)
app.listen(3000, () => {})
        