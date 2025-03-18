
const express = require('express')
import {handler1418} from "./handler1418";
const app = express()
app.get('/1418', handler1418)
app.listen(3000, () => {})
        