
const express = require('express')
import {handler1465} from "./handler1465";
const app = express()
app.get('/1465', handler1465)
app.listen(3000, () => {})
        