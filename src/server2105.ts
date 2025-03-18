
const express = require('express')
import {handler2105} from "./handler2105";
const app = express()
app.get('/2105', handler2105)
app.listen(3000, () => {})
        