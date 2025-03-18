
const express = require('express')
import {handler1033} from "./handler1033";
const app = express()
app.get('/1033', handler1033)
app.listen(3000, () => {})
        