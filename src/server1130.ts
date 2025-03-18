
const express = require('express')
import {handler1130} from "./handler1130";
const app = express()
app.get('/1130', handler1130)
app.listen(3000, () => {})
        