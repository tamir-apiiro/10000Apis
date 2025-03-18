
const express = require('express')
import {handler1861} from "./handler1861";
const app = express()
app.get('/1861', handler1861)
app.listen(3000, () => {})
        