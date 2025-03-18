
const express = require('express')
import {handler1800} from "./handler1800";
const app = express()
app.get('/1800', handler1800)
app.listen(3000, () => {})
        