
const express = require('express')
import {handler1899} from "./handler1899";
const app = express()
app.get('/1899', handler1899)
app.listen(3000, () => {})
        