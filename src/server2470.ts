
const express = require('express')
import {handler2470} from "./handler2470";
const app = express()
app.get('/2470', handler2470)
app.listen(3000, () => {})
        