
const express = require('express')
import {handler1005} from "./handler1005";
const app = express()
app.get('/1005', handler1005)
app.listen(3000, () => {})
        