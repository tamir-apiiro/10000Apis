
const express = require('express')
import {handler1685} from "./handler1685";
const app = express()
app.get('/1685', handler1685)
app.listen(3000, () => {})
        