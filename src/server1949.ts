
const express = require('express')
import {handler1949} from "./handler1949";
const app = express()
app.get('/1949', handler1949)
app.listen(3000, () => {})
        