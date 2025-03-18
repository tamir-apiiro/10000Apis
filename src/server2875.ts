
const express = require('express')
import {handler2875} from "./handler2875";
const app = express()
app.get('/2875', handler2875)
app.listen(3000, () => {})
        