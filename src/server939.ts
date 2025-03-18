
const express = require('express')
import {handler939} from "./handler939";
const app = express()
app.get('/939', handler939)
app.listen(3000, () => {})
        