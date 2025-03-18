
const express = require('express')
import {handler744} from "./handler744";
const app = express()
app.get('/744', handler744)
app.listen(3000, () => {})
        