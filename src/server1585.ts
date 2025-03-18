
const express = require('express')
import {handler1585} from "./handler1585";
const app = express()
app.get('/1585', handler1585)
app.listen(3000, () => {})
        