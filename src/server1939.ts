
const express = require('express')
import {handler1939} from "./handler1939";
const app = express()
app.get('/1939', handler1939)
app.listen(3000, () => {})
        