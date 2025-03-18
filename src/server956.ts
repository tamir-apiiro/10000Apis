
const express = require('express')
import {handler956} from "./handler956";
const app = express()
app.get('/956', handler956)
app.listen(3000, () => {})
        