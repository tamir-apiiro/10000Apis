
const express = require('express')
import {handler105} from "./handler105";
const app = express()
app.get('/105', handler105)
app.listen(3000, () => {})
        