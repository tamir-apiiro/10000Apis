
const express = require('express')
import {handler1192} from "./handler1192";
const app = express()
app.get('/1192', handler1192)
app.listen(3000, () => {})
        