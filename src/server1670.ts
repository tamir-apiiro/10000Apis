
const express = require('express')
import {handler1670} from "./handler1670";
const app = express()
app.get('/1670', handler1670)
app.listen(3000, () => {})
        