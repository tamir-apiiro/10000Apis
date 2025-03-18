
const express = require('express')
import {handler1150} from "./handler1150";
const app = express()
app.get('/1150', handler1150)
app.listen(3000, () => {})
        