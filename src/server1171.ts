
const express = require('express')
import {handler1171} from "./handler1171";
const app = express()
app.get('/1171', handler1171)
app.listen(3000, () => {})
        