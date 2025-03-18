
const express = require('express')
import {handler1168} from "./handler1168";
const app = express()
app.get('/1168', handler1168)
app.listen(3000, () => {})
        