
const express = require('express')
import {handler1052} from "./handler1052";
const app = express()
app.get('/1052', handler1052)
app.listen(3000, () => {})
        