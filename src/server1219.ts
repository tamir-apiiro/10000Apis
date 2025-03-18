
const express = require('express')
import {handler1219} from "./handler1219";
const app = express()
app.get('/1219', handler1219)
app.listen(3000, () => {})
        