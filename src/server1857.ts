
const express = require('express')
import {handler1857} from "./handler1857";
const app = express()
app.get('/1857', handler1857)
app.listen(3000, () => {})
        