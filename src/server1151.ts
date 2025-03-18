
const express = require('express')
import {handler1151} from "./handler1151";
const app = express()
app.get('/1151', handler1151)
app.listen(3000, () => {})
        