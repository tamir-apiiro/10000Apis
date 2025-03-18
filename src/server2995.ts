
const express = require('express')
import {handler2995} from "./handler2995";
const app = express()
app.get('/2995', handler2995)
app.listen(3000, () => {})
        