
const express = require('express')
import {handler1868} from "./handler1868";
const app = express()
app.get('/1868', handler1868)
app.listen(3000, () => {})
        