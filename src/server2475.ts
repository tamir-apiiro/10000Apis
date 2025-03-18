
const express = require('express')
import {handler2475} from "./handler2475";
const app = express()
app.get('/2475', handler2475)
app.listen(3000, () => {})
        