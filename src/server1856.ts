
const express = require('express')
import {handler1856} from "./handler1856";
const app = express()
app.get('/1856', handler1856)
app.listen(3000, () => {})
        