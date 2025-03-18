
const express = require('express')
import {handler1851} from "./handler1851";
const app = express()
app.get('/1851', handler1851)
app.listen(3000, () => {})
        