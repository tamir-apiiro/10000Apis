
const express = require('express')
import {handler1321} from "./handler1321";
const app = express()
app.get('/1321', handler1321)
app.listen(3000, () => {})
        