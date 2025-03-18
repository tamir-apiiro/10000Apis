
const express = require('express')
import {handler1999} from "./handler1999";
const app = express()
app.get('/1999', handler1999)
app.listen(3000, () => {})
        