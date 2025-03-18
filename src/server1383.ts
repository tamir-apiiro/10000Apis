
const express = require('express')
import {handler1383} from "./handler1383";
const app = express()
app.get('/1383', handler1383)
app.listen(3000, () => {})
        