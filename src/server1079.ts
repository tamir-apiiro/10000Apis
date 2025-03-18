
const express = require('express')
import {handler1079} from "./handler1079";
const app = express()
app.get('/1079', handler1079)
app.listen(3000, () => {})
        