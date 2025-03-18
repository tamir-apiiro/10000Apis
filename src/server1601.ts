
const express = require('express')
import {handler1601} from "./handler1601";
const app = express()
app.get('/1601', handler1601)
app.listen(3000, () => {})
        