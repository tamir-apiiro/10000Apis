
const express = require('express')
import {handler1950} from "./handler1950";
const app = express()
app.get('/1950', handler1950)
app.listen(3000, () => {})
        