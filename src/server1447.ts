
const express = require('express')
import {handler1447} from "./handler1447";
const app = express()
app.get('/1447', handler1447)
app.listen(3000, () => {})
        