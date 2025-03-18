
const express = require('express')
import {handler1190} from "./handler1190";
const app = express()
app.get('/1190', handler1190)
app.listen(3000, () => {})
        