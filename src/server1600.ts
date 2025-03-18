
const express = require('express')
import {handler1600} from "./handler1600";
const app = express()
app.get('/1600', handler1600)
app.listen(3000, () => {})
        