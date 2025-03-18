
const express = require('express')
import {handler1859} from "./handler1859";
const app = express()
app.get('/1859', handler1859)
app.listen(3000, () => {})
        