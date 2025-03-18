
const express = require('express')
import {handler1389} from "./handler1389";
const app = express()
app.get('/1389', handler1389)
app.listen(3000, () => {})
        