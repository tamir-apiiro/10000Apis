
const express = require('express')
import {handler1991} from "./handler1991";
const app = express()
app.get('/1991', handler1991)
app.listen(3000, () => {})
        