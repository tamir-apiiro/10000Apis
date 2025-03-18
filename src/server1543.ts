
const express = require('express')
import {handler1543} from "./handler1543";
const app = express()
app.get('/1543', handler1543)
app.listen(3000, () => {})
        