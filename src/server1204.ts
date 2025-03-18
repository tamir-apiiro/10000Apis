
const express = require('express')
import {handler1204} from "./handler1204";
const app = express()
app.get('/1204', handler1204)
app.listen(3000, () => {})
        