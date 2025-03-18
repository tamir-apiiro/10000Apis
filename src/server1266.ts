
const express = require('express')
import {handler1266} from "./handler1266";
const app = express()
app.get('/1266', handler1266)
app.listen(3000, () => {})
        