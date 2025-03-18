
const express = require('express')
import {handler1684} from "./handler1684";
const app = express()
app.get('/1684', handler1684)
app.listen(3000, () => {})
        