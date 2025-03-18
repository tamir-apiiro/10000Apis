
const express = require('express')
import {handler1172} from "./handler1172";
const app = express()
app.get('/1172', handler1172)
app.listen(3000, () => {})
        