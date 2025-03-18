
const express = require('express')
import {handler1145} from "./handler1145";
const app = express()
app.get('/1145', handler1145)
app.listen(3000, () => {})
        