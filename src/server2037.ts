
const express = require('express')
import {handler2037} from "./handler2037";
const app = express()
app.get('/2037', handler2037)
app.listen(3000, () => {})
        