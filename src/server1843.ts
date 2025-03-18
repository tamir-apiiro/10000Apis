
const express = require('express')
import {handler1843} from "./handler1843";
const app = express()
app.get('/1843', handler1843)
app.listen(3000, () => {})
        