
const express = require('express')
import {handler3177} from "./handler3177";
const app = express()
app.get('/3177', handler3177)
app.listen(3000, () => {})
        