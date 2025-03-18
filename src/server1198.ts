
const express = require('express')
import {handler1198} from "./handler1198";
const app = express()
app.get('/1198', handler1198)
app.listen(3000, () => {})
        