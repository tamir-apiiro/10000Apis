
const express = require('express')
import {handler1466} from "./handler1466";
const app = express()
app.get('/1466', handler1466)
app.listen(3000, () => {})
        