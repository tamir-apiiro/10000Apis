
const express = require('express')
import {handler1308} from "./handler1308";
const app = express()
app.get('/1308', handler1308)
app.listen(3000, () => {})
        