
const express = require('express')
import {handler7105} from "./handler7105";
const app = express()
app.get('/7105', handler7105)
app.listen(3000, () => {})
        